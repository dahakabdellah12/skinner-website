# Skinner Website

Official dark-themed React + Vite website for **Skinner** — High-Performance Native Windows Desktop Studio for Brawlhalla Cosmetic Customization.

## Features
- **Modern Responsive Design**: Dark-mode aesthetic with custom design tokens, fluid typography, and mobile drawer navigation.
- **Rich Showcase**: Roster stats, weapon studio highlights, KO effects, and community map addons.
- **Accurate Release History**: Complete changelogs and download instructions for Windows x64.
- **Zero Configuration Deploy**: Ready to deploy on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

## Requirements
- Node.js 18+ or 20+
- npm

## Development
```bash
npm install
npm run dev
```

Open the local development URL (typically `http://localhost:5173`).

## Production Build
```bash
npm run build
npm run preview
```

The compiled static website will be generated in `dist/`.

## Deployment Options
- **Vercel / Netlify / Cloudflare Pages**: Connect the repository and select Vite as the framework preset (Build Command: `npm run build`, Output Directory: `dist`).
- **GitHub Pages**: Upload `dist/` or configure GitHub Actions with `vite build`.

## Legal Disclaimer
Skinner is an independent community project and is not affiliated with, endorsed by, or sponsored by Ubisoft or Blue Mammoth Games.
