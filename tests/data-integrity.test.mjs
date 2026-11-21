import test from "node:test";
import assert from "node:assert/strict";
import { translations } from "../src/data/translations.js";
import { site } from "../src/data/site.js";

test("Data Integrity - site configuration constants", () => {
  assert.ok(site.name, "site.name must be defined");
  assert.equal(site.name, "Skinner");
  assert.ok(site.version, "site.version must be defined");
  assert.match(site.downloadUrl, /^https:\/\//, "downloadUrl must be an https URL");
  assert.match(site.discordUrl, /^https:\/\/discord\.gg\//, "discordUrl must be a valid Discord invite");
  assert.equal(site.githubRepo, "dahakabdellah12/Skinner", "githubRepo must point to official repo");
});

test("Data Integrity - Translations parity between EN and AR", () => {
  assert.ok(translations.en, "English translations must exist");
  assert.ok(translations.ar, "Arabic translations must exist");

  const enSections = Object.keys(translations.en);
  const arSections = Object.keys(translations.ar);

  for (const section of enSections) {
    assert.ok(translations.ar[section], `Arabic translation must include section: ${section}`);
  }

  // Check critical sections
  assert.ok(translations.ar.nav.home);
  assert.ok(translations.ar.nav.download);
  assert.ok(translations.ar.nav.features);
  assert.ok(translations.ar.home.heroTitlePrefix);
  assert.ok(translations.ar.downloadPage.downloadMain);
  assert.ok(Array.isArray(translations.ar.faqPage.items));
  assert.ok(translations.ar.faqPage.items.length > 0);
});
