import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const indexPath = path.resolve(process.cwd(), "index.html");
const robotsPath = path.resolve(process.cwd(), "public/robots.txt");
const sitemapPath = path.resolve(process.cwd(), "public/sitemap.xml");

test("SEO Audit - index.html metadata and tags", () => {
  assert.ok(fs.existsSync(indexPath), "index.html must exist");
  const html = fs.readFileSync(indexPath, "utf-8");

  assert.match(html, /<title>.*<\/title>/, "Title tag must exist");
  assert.match(html, /<meta name="description" content="[^"]+" \/>/, "Description meta tag must exist");
  assert.match(html, /<meta name="keywords" content="[^"]+" \/>/, "Keywords meta tag must exist");
  assert.match(html, /<link rel="canonical" href="https:\/\/skinner-app\.vercel\.app\/" \/>/, "Canonical link must point to production");

  // OpenGraph and Twitter
  assert.match(html, /<meta property="og:title"/, "og:title must exist");
  assert.match(html, /<meta property="og:description"/, "og:description must exist");
  assert.match(html, /<meta property="og:image"/, "og:image must exist");
  assert.match(html, /<meta name="twitter:card"/, "twitter:card must exist");

  // Performance Font Preconnects
  assert.match(html, /rel="preconnect" href="https:\/\/fonts\.googleapis\.com"/, "Font preconnect must exist");
  assert.match(html, /rel="preconnect" href="https:\/\/fonts\.gstatic\.com"/, "Gstatic preconnect must exist");

  // Structured Data JSON-LD
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(jsonLdMatch, "JSON-LD schema script must be present");
  const schema = JSON.parse(jsonLdMatch[1]);
  assert.equal(schema["@context"], "https://schema.org");
  assert.ok(Array.isArray(schema["@graph"]), "Schema graph must be an array");
});

test("SEO Audit - robots.txt and sitemap.xml", () => {
  assert.ok(fs.existsSync(robotsPath), "robots.txt must exist");
  const robots = fs.readFileSync(robotsPath, "utf-8");
  assert.match(robots, /User-agent: Googlebot/, "robots.txt must mention Googlebot");
  assert.match(robots, /Sitemap: https:\/\/skinner-app\.vercel\.app\/sitemap\.xml/, "robots.txt must link to sitemap");

  assert.ok(fs.existsSync(sitemapPath), "sitemap.xml must exist");
  const sitemap = fs.readFileSync(sitemapPath, "utf-8");
  assert.match(sitemap, /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/, "sitemap must have valid xml namespace");
  assert.match(sitemap, /<loc>https:\/\/skinner-app\.vercel\.app\/download<\/loc>/, "sitemap must include /download with absolute url");
  assert.match(sitemap, /<loc>https:\/\/skinner-app\.vercel\.app\/features<\/loc>/, "sitemap must include /features with absolute url");
});
