# Aellpr — landing page

Conversion-focused landing page for **Aellpr** (Send · Go · Business AI), plus the
Go & Send **Terms & Conditions** and **Privacy Policy** pages. Motion is refined and subtle,
built for performance on every device.

**Stack:** Next.js 16 (App Router, TypeScript) · Tailwind CSS v4 · no animation libraries

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

`npm run build` produces a **static site** in `out/` (`output: "export"` in
`next.config.ts`); there is no server at runtime. Hosted on DigitalOcean App
Platform as a static site: build command `npm run build`, output directory
`out`. No environment variables are needed.
