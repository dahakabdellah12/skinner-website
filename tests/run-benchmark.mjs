import { spawn } from "node:child_process";
import path from "node:path";

console.log("[LOAD_TEST_ORCHESTRATOR] Starting local staging server on port 4173...");

const serverProcess = spawn("node", [path.resolve("tests/staging-server.mjs")], {
  stdio: ["inherit", "pipe", "pipe"]
});

serverProcess.stderr.on("data", (d) => {
  console.error(`[SERVER_ERR] ${d}`);
});

serverProcess.stdout.on("data", (data) => {
  const msg = data.toString();
  if (msg.includes("[STAGING_SERVER_READY]")) {
    console.log("[LOAD_TEST_ORCHESTRATOR] Staging server is ready. Launching progressive load testing suite...");

    const testProcess = spawn("node", [path.resolve("tests/load-tester.mjs")], {
      stdio: "inherit"
    });

    testProcess.on("exit", (code) => {
      console.log(`[LOAD_TEST_ORCHESTRATOR] Load tester finished with exit code ${code}. Stopping server...`);
      serverProcess.kill("SIGTERM");
      process.exit(code || 0);
    });
  }
});

process.on("SIGINT", () => {
  serverProcess.kill("SIGTERM");
  process.exit(1);
});
