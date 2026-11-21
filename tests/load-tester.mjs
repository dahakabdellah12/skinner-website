import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const TARGET_HOST = "127.0.0.1";
const TARGET_PORT = 4173;

// Discover actual asset file names from dist/assets
const distAssets = fs.existsSync(path.resolve("dist/assets"))
  ? fs.readdirSync(path.resolve("dist/assets"))
  : [];

const jsBundle = distAssets.find(f => f.startsWith("index-") && f.endsWith(".js")) || "index.js";
const cssBundle = distAssets.find(f => f.startsWith("index-") && f.endsWith(".css")) || "index.css";
const downloadChunk = distAssets.find(f => f.startsWith("Download-") && f.endsWith(".js")) || "";
const featuresChunk = distAssets.find(f => f.startsWith("Features-") && f.endsWith(".js")) || "";

// Realistic multi-page user journeys
const USER_JOURNEYS = [
  // Journey A: Homepage visitor exploring features
  [
    "/",
    `/assets/${cssBundle}`,
    `/assets/${jsBundle}`,
    "/images/preview-customizer.png"
  ],
  // Journey B: User looking to download Skinner
  [
    "/",
    "/download",
    downloadChunk ? `/assets/${downloadChunk}` : "/download"
  ],
  // Journey C: Exploring Features gallery
  [
    "/features",
    featuresChunk ? `/assets/${featuresChunk}` : "/features",
    "/images/preview-legends.jpg"
  ],
  // Journey D: Checking FAQ & Support
  [
    "/faq",
    "/support",
    "/sitemap.xml"
  ]
];

// High-performance HTTP Keep-Alive Agent to simulate concurrent client connections
const httpAgent = new http.Agent({
  keepAlive: true,
  maxSockets: 2000,
  maxFreeSockets: 1000,
  timeout: 10000
});

function sendRequest(urlPath) {
  return new Promise((resolve) => {
    const start = performance.now();
    const req = http.request(
      {
        host: TARGET_HOST,
        port: TARGET_PORT,
        path: urlPath,
        method: "GET",
        agent: httpAgent,
        headers: {
          "User-Agent": "SkinnerLoadTester/1.0",
          Accept: "text/html,application/javascript,text/css,image/png,*/*"
        }
      },
      (res) => {
        res.on("data", () => {}); // Consume stream
        res.on("end", () => {
          const duration = performance.now() - start;
          resolve({
            ok: res.statusCode >= 200 && res.statusCode < 400,
            status: res.statusCode,
            duration
          });
        });
      }
    );

    req.on("error", (err) => {
      const duration = performance.now() - start;
      resolve({
        ok: false,
        status: 0,
        error: err.message,
        duration
      });
    });

    req.end();
  });
}

function calculatePercentile(latencies, percentile) {
  if (latencies.length === 0) return 0;
  const index = Math.min(
    Math.floor((percentile / 100) * latencies.length),
    latencies.length - 1
  );
  return latencies[index];
}

async function runStage({ stageName, vus, durationMs, thinkTimeMs = 25 }) {
  console.log(`\n======================================================`);
  console.log(`[STAGE] ${stageName} -> Target Virtual Users: ${vus}`);
  console.log(`Duration: ${(durationMs / 1000).toFixed(1)}s | Base Think Time: ${thinkTimeMs}ms`);
  console.log(`======================================================`);

  const startTime = Date.now();
  let totalRequests = 0;
  let successRequests = 0;
  let failedRequests = 0;
  const latencies = [];
  let stopEmergency = false;

  const workerPromises = Array.from({ length: vus }, async (_, vuIndex) => {
    const journey = USER_JOURNEYS[vuIndex % USER_JOURNEYS.length];

    while (Date.now() - startTime < durationMs && !stopEmergency) {
      for (const stepPath of journey) {
        if (Date.now() - startTime >= durationMs || stopEmergency) break;

        const res = await sendRequest(stepPath);
        totalRequests++;
        latencies.push(res.duration);

        if (res.ok) {
          successRequests++;
        } else {
          failedRequests++;
        }

        // Check emergency stop condition: error rate > 5% after at least 100 requests
        if (totalRequests > 100 && (failedRequests / totalRequests) > 0.05) {
          console.error(`[EMERGENCY STOP] Error rate exceeded 5% (${((failedRequests / totalRequests) * 100).toFixed(1)}%)`);
          stopEmergency = true;
          break;
        }

        // Realistic user think time
        if (thinkTimeMs > 0) {
          await new Promise((r) => setTimeout(r, thinkTimeMs + Math.random() * 20));
        }
      }
    }
  });

  await Promise.all(workerPromises);

  const actualDurationSec = (Date.now() - startTime) / 1000;
  const rps = actualDurationSec > 0 ? (totalRequests / actualDurationSec).toFixed(1) : 0;
  const errorRate = totalRequests > 0 ? ((failedRequests / totalRequests) * 100).toFixed(2) : 0;

  latencies.sort((a, b) => a - b);
  const minLatency = latencies.length ? latencies[0].toFixed(2) : 0;
  const maxLatency = latencies.length ? latencies[latencies.length - 1].toFixed(2) : 0;
  const avgLatency = latencies.length ? (latencies.reduce((a, b) => a + b, 0) / latencies.length).toFixed(2) : 0;
  const p50 = calculatePercentile(latencies, 50).toFixed(2);
  const p90 = calculatePercentile(latencies, 90).toFixed(2);
  const p95 = calculatePercentile(latencies, 95).toFixed(2);
  const p99 = calculatePercentile(latencies, 99).toFixed(2);

  const metrics = {
    stage: stageName,
    vus,
    durationSec: actualDurationSec.toFixed(2),
    totalRequests,
    successRequests,
    failedRequests,
    errorRate: `${errorRate}%`,
    rps: Number(rps),
    latencies: {
      minMs: Number(minLatency),
      avgMs: Number(avgLatency),
      p50Ms: Number(p50),
      p90Ms: Number(p90),
      p95Ms: Number(p95),
      p99Ms: Number(p99),
      maxMs: Number(maxLatency)
    },
    passed: Number(errorRate) < 1.0 && Number(p95) < 500
  };

  console.log(`[RESULTS - ${stageName}]`);
  console.log(`• Virtual Users: ${vus} | Throughput: ${rps} RPS | Total Requests: ${totalRequests}`);
  console.log(`• Success: ${successRequests} | Failed: ${failedRequests} | Error Rate: ${errorRate}%`);
  console.log(`• Latency Percentiles: p50: ${p50}ms | p90: ${p90}ms | p95: ${p95}ms | p99: ${p99}ms | Max: ${maxLatency}ms`);
  console.log(`• Status: ${metrics.passed ? "PASS (P95 < 500ms, Errors < 1%)" : "FAIL/WARN"}`);

  return metrics;
}

async function runFullProgressiveLoadSuite() {
  const STAGES = [
    { stageName: "Smoke Test", vus: 5, durationMs: 4000, thinkTimeMs: 15 },
    { stageName: "Baseline", vus: 10, durationMs: 4000, thinkTimeMs: 15 },
    { stageName: "Low Load", vus: 50, durationMs: 5000, thinkTimeMs: 20 },
    { stageName: "Medium Load", vus: 100, durationMs: 6000, thinkTimeMs: 20 },
    { stageName: "High Load", vus: 250, durationMs: 7000, thinkTimeMs: 25 },
    { stageName: "Heavy Load", vus: 500, durationMs: 8000, thinkTimeMs: 30 },
    { stageName: "Very Heavy Load", vus: 750, durationMs: 8000, thinkTimeMs: 30 },
    { stageName: "Maximum Target (1,000 VUs)", vus: 1000, durationMs: 10000, thinkTimeMs: 35 }
  ];

  const results = [];

  for (const stage of STAGES) {
    const res = await runStage(stage);
    results.push(res);
    // Pause briefly between stages to allow sockets to settle
    await new Promise((r) => setTimeout(r, 1200));
  }

  // Save results to file
  const outputPath = path.resolve("reports/load_test_results.json");
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), "utf-8");
  console.log(`\n[COMPLETE] Load test suite completed. Results saved to ${outputPath}`);

  httpAgent.destroy();
  process.exit(0);
}

runFullProgressiveLoadSuite().catch((err) => {
  console.error("Load test failed:", err);
  process.exit(1);
});
