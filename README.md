# IMC Iraq — 1:1 Pure TypeScript Modern Remake

A 1:1 high-performance TypeScript remake of [http://imc.local](http://imc.local) (**IMC Iraq — Award Winning Cummins Authorized Seller**), completely decoupled from WordPress, PHP, and MySQL.

Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons**.

---

## ⚡ What Changed vs. WordPress?

| Feature | Old WordPress Site (`imc.local`) | New TypeScript App (`IMC`) |
| :--- | :--- | :--- |
| **Engine / Runtime** | PHP 8.2 + MySQL + Nginx | **Next.js 15 + TypeScript** |
| **Performance** | Sluggish TTFB (~800ms+), heavy plugins | **Instant Sub-50ms static delivery** |
| **Slider** | Revolution Slider (heavy jQuery / Flash legacy) | **Lightweight Framer Motion Hero Slider** |
| **Generator Catalog** | WooCommerce (27 products, slow SQL queries) | **Static Typed Catalog with Instant Client-side Filtering** |
| **Multilingual** | Fragmented page duplications | **Unified Context (English LTR, Arabic RTL, Kurdish RTL)** |
| **Quote System** | YITH Request a Quote plugin | **Interactive Floating & Modal Quote Flow with Pre-fill** |
| **Live Chat** | Chaty plugin | **Custom Direct WhatsApp & Phone Action Widget** |
| **Asset Delivery** | Dynamic local WordPress uploads | **Local static WebP / PNG / JPG assets in `public/`** |

---

## 🚀 Key Features

1. **Multilingual Architecture (`English`, `العربية`, `کوردی`)**:
   - Complete RTL mirroring for Arabic and Kurdish.
   - Preserves standard Iraqi Cummins terminologies across all 3 languages.
2. **27 Cummins Generator Models**:
   - Filterable by Standby Power (`Under 500 kVA`, `500 - 1500 kVA`, `Over 1500 kVA`).
   - Real-time search across model numbers (e.g. `C44D5L`, `C3500D5`, `C2500D5A`) and engine families (`QSK`, `KTA`, `B-Series`).
   - Detailed specification sheets: *Standby rating, Prime rating, Engine model, Dry weight, Frequency, Dimensions*.
3. **Interactive "Request a Quote" System**:
   - Pre-selects the clicked generator model from the catalog.
   - Comprehensive form for company info, province/city, required kVA, and project notes.
4. **Complete Services & Support Hub**:
   - Field Service & 24/7 Mobile Dispatch (`/repairs`)
   - Certified Master Rebuild Center (`/master-rebuild`)
   - Preventative Maintenance Contracts & SLAs (`/preventative-maintenance`)
   - Technical Training Academy (`/training`)
   - Fleetguard Heavy Filtration (`/fleet-guard`)
   - Valvoline & Cummins Premium Oils (`/oils`)
   - Industrial Engine Platforms (`/engines`)
   - Renewable & Hybrid Microgrids (`/renewable-power`)
   - Careers Application (`/careers`)
   - Contact & Branch Directory (`/contact`)

---

## 📦 Getting Started

### 1. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
```bash
npm run build
npm run start
```
Runs the optimized production build on port 3000.

### Form delivery

The quote, contact, careers, field service, and training forms submit to the Next.js server route at `/api/submit`. Careers applications include the selected CV as an email attachment. The browser shows success only after Resend accepts the request.

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` and `IMC_FROM_EMAIL` to an address on a domain verified in Resend. Set `IMC_TO_EMAIL` if requests should go somewhere other than `info@imc.iq`. Add the same environment variables to the production Next.js host. Without the key and verified sender, the forms show a delivery error and do not claim to have sent the request. The key must remain server-side.
