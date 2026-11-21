import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const vercelJsonPath = path.resolve(process.cwd(), "vercel.json");

test("Security Audit - vercel.json exists and is valid JSON", () => {
  assert.ok(fs.existsSync(vercelJsonPath), "vercel.json must exist");
  const raw = fs.readFileSync(vercelJsonPath, "utf-8");
  const parsed = JSON.parse(raw);
  assert.ok(parsed, "vercel.json must be valid JSON");
  assert.ok(Array.isArray(parsed.headers), "vercel.json must define headers");
});

test("Security Audit - Global Security Headers Configuration", () => {
  const parsed = JSON.parse(fs.readFileSync(vercelJsonPath, "utf-8"));
  const globalHeaderRule = parsed.headers.find(h => h.source === "/(.*)");
  assert.ok(globalHeaderRule, "Global header rule /(.*) must exist");

  const headersMap = new Map(globalHeaderRule.headers.map(h => [h.key.toLowerCase(), h.value]));

  // 1. Content Security Policy (CSP)
  assert.ok(headersMap.has("content-security-policy"), "CSP header must be present");
  const csp = headersMap.get("content-security-policy");
  assert.match(csp, /default-src 'self'/, "CSP must contain default-src 'self'");
  assert.match(csp, /frame-ancestors 'none'/, "CSP must prevent clickjacking via frame-ancestors 'none'");
  assert.match(csp, /object-src 'none'/, "CSP must block vulnerable plugins via object-src 'none'");

  // 2. Clickjacking protection (X-Frame-Options)
  assert.ok(headersMap.has("x-frame-options"), "X-Frame-Options header must be present");
  assert.equal(headersMap.get("x-frame-options"), "DENY", "X-Frame-Options must be DENY");

  // 3. MIME-Type Sniffing Protection
  assert.ok(headersMap.has("x-content-type-options"), "X-Content-Type-Options header must be present");
  assert.equal(headersMap.get("x-content-type-options"), "nosniff", "X-Content-Type-Options must be nosniff");

  // 4. Strict Transport Security (HSTS)
  assert.ok(headersMap.has("strict-transport-security"), "HSTS header must be present");
  const hsts = headersMap.get("strict-transport-security");
  assert.match(hsts, /max-age=\d+/, "HSTS must have max-age");
  assert.match(hsts, /includeSubDomains/, "HSTS must include subdomains");

  // 5. Referrer Policy
  assert.ok(headersMap.has("referrer-policy"), "Referrer-Policy header must be present");
  assert.equal(headersMap.get("referrer-policy"), "strict-origin-when-cross-origin");

  // 6. Permissions Policy
  assert.ok(headersMap.has("permissions-policy"), "Permissions-Policy header must be present");
});

test("Performance Audit - Static Asset Cache Headers", () => {
  const parsed = JSON.parse(fs.readFileSync(vercelJsonPath, "utf-8"));
  const assetRule = parsed.headers.find(h => h.source === "/assets/(.*)");
  assert.ok(assetRule, "Cache rule for /assets/(.*) must exist");

  const headersMap = new Map(assetRule.headers.map(h => [h.key.toLowerCase(), h.value]));
  assert.ok(headersMap.has("cache-control"), "Asset rule must set Cache-Control");
  assert.match(headersMap.get("cache-control"), /immutable/, "Vite hashed assets must be marked immutable");
});
