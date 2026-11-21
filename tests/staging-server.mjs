import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const PORT = 4173;
const DIST_DIR = path.resolve(process.cwd(), "dist");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8"
};

const server = http.createServer((req, res) => {
  // Defensive sanitization: reject path traversal
  const safeUrlPath = path.normalize(decodeURI(req.url.split("?")[0])).replace(/^(\.\.[\/\\])+/, "");
  let filePath = path.join(DIST_DIR, safeUrlPath);

  // If path is a directory or root, serve index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(DIST_DIR, "index.html");
  }

  // SPA fallback: if asset does not exist and has no extension, serve index.html
  if (!fs.existsSync(filePath)) {
    if (!path.extname(safeUrlPath)) {
      filePath = path.join(DIST_DIR, "index.html");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";

  try {
    const stat = fs.statSync(filePath);
    res.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": stat.size,
      "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY"
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`[STAGING_SERVER_READY] Listening on http://127.0.0.1:${PORT}`);
});
