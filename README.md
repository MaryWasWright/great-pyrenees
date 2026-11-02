# Great Pyrenees and Beyond

Named door of the painted Southwest Guardian archive.

- Share this door: https://marywaswright.github.io/great-pyrenees/
- Twin host repo (asset host): https://github.com/MaryWasWright/MaryWasWright.github.io

## Asset dependency

This repo has no `assets/` folder. Every page loads its CSS, JS, painted images
(JPEG + WebP), favicon, and the Training page's Age Ladder SVG by absolute URL from the main door:
`https://marywaswright.github.io/assets/...`

- Renaming or deleting a file in the main repo's `assets/` breaks this door too.
- After a visual change, bump the same `?v=` cache-buster on every page in **both** repos.
- Only `data/articles.json` is local here (fetched relatively by the main door's `site.js`); keep it in sync with the main repo.

Pages deploys from `.github/workflows/pages.yml` on push to `main`.
