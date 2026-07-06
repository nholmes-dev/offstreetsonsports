# Off Streets On Sports

Custom fightwear and sportswear website for **The Lioness** — built with React 18, Vite, and Tailwind CSS. Deployed on Cloudflare Pages.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 + Vite | Frontend framework & build tooling |
| Tailwind CSS v3 | Utility-first styling |
| Framer Motion | Page & element animations |
| React Router v6 | Client-side routing |
| Formspree | Contact/order form submission |
| Cloudflare Pages | Hosting & deployment |

---

## Pages

| Route | Page |
|---|---|
| `/` | Landing — hero, How It Works, CTA |
| `/customise` | Multi-step kit builder (5 steps + success screen) |
| `/about` | About The Lioness |
| `/terms` | Terms & Conditions |
| `/privacy` | Privacy Policy |

---

## Kit Builder Flow

1. **Customer details** — name, email, phone, gym/team
2. **Select gear** — choose garment from product catalogue
3. **Quantity** — set quantity, validates minimum order rules, shows bundle pricing
4. **Personalise** — custom text, upgrades, additional specs (Fighter Bundles have a 3-part sub-flow: Ring Jacket → Fight Shorts → Top)
5. **Review & submit** — full order summary with estimated totals, submitted via Formspree

---

## Product Catalogue & Pricing

- **T-Shirt bundles**: 10+ for £200, 20 for £350, above 20 is price on enquiry
- **Enquiry-only items** (min. 10): Jiu-Jitsu Gis, Rash Guards, and any `enquiryOnly: true` products
- **Fighter Bundles**: Ring Jacket + Fight Shorts + Top, priced from £200
- **Fight Shorts upgrades**: Premium Materials (+£20/unit), Embroidered Side Band (+£15/unit)

---

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Deployment

Pushes to `main` trigger an automatic Cloudflare Pages build. The working branch is `Claude` — merge into `main` to deploy.

---

## Form Submissions

Orders are submitted to [Formspree](https://formspree.io) — endpoint configured in `src/pages/Customise.jsx`. Logos and artwork are requested via email to **offstreetsonsports@gmail.com**.

---

## Brand

- **Colour**: `#B68332` (gold — `text-brand` / `bg-brand` in Tailwind config)
- **Font**: System sans-serif stack, heavy uppercase tracking for headings
- **Contact**: +44 7309 728053 · offstreetsonsports@gmail.com
