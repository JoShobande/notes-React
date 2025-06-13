
## Production Build

- Run `npm run build` to generate optimized assets in `dist/`.
- Total bundle size: 204k MB (measured with `du -sh dist/`).
- (Optional) `dist/stats.html` visualizes chunk composition.


## Code-Splitting

- **Lazy-loaded component:** `Heavy` via `React.lazy()` + `Suspense`.
- **Dev mode:** network tab shows `Heavy.[hash].js` fetched on demand.
- **Production build outputs:**
  - `index.html` — 0.46 kB (gzip: 0.29 kB)
  - `assets/index-Dtn62Xmo.css` — 0.91 kB (gzip: 0.49 kB)
  - `assets/Heavy-BnNTve_f.js` — 0.27 kB (gzip: 0.23 kB)
  - `assets/index-Blz6aORa.js` — 188.84 kB (gzip: 59.59 kB)

**Impact:**  
Your main bundle (`index-Blz6aORa.js`) is ~188 kB (59.6 kB gzipped), and the “heavy” component adds only ~0.27 kB (0.23 kB gzipped) when needed. This split ensures a small initial download, improving first-load performance.

