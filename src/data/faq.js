export const faqItems = [
  {
    q: "Is Skinner safe to use with Brawlhalla?",
    a: "Yes. Skinner operates purely on local client-side visual assets (such as vector SWF files, stage backgrounds, and UI sprites). It does not hook game memory, alter netcode, or inject runtime cheats. All modifications are purely cosmetic."
  },
  {
    q: "How does the single-click rollback system work?",
    a: "Before applying any cosmetic modification or map, Skinner creates a bit-exact snapshot of the original official game files inside `.studio_backups/`. Clicking 'Rollback All' instantly restores original files to pristine condition without needing to re-verify game cache through Steam."
  },
  {
    q: "Can I equip weapon skins independently from character costumes?",
    a: "Absolutely! Skinner gives you complete creative freedom to equip any primary and secondary weapon skins from any costume across all 14 weapon types (Sword, Hammer, Blasters, Spear, Rocket Lance, Katars, Bow, Axe, Gauntlets, Scythe, Cannon, Orb, Greatsword, Battle Boots)."
  },
  {
    q: "How do custom maps and community addons work?",
    a: "Skinner features a dedicated Addons page connected to GameBanana. You can browse, preview screenshots, and 1-click download community arenas. Skinner automatically unpacks .bmod containers, places files into the correct game directories, and lets you toggle individual stage elements (backgrounds, platforms) on or off."
  },
  {
    q: "Is Skinner completely free?",
    a: "Yes! Skinner is 100% free and community-oriented. All 70+ playable Legends, hundreds of costumes, weapon combinations, and map addons are accessible to everyone without subscriptions or paywalls."
  },
  {
    q: "How does the cryptographic auto-updater work?",
    a: "Skinner automatically discovers official GitHub releases and verifies each package using Ed25519 digital signatures and SHA-256 checksums against an embedded official public key, guaranteeing authenticity and security."
  }
];
