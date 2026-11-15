# PyrPaws

**PyrPaws** — Great Pyrenees and Beyond. A painted archive of Great Pyrenees history,
a catalog of original source summaries, livestock guardian how-to, care notes, and Field Notes.

- Target domain: https://pyrpaws.com/ (Netlify)
- Current preview copy: https://marywaswright.github.io/great-pyrenees/ (GitHub Pages)

## Self-contained static site

Plain HTML/CSS/JS. No build step. Everything the site needs is in this repo:

- `assets/` holds the shared CSS, JS, favicon, painted JPEG + WebP images, the Age Ladder SVG,
  and the Field Notes mascot paintings. Pages reference them by relative path
  (`assets/...`, and `../assets/...` from `field-notes/`), so the site works at a domain root
  (Netlify) and under `/great-pyrenees/` (GitHub Pages).
- `data/articles.json` is the catalog (original summaries only, never third-party article text).
- `netlify.toml` sets `publish = "."` with no build command.
- `404.html` is the not-found page (uses root-relative paths, which is right on Netlify).
- `canonical`, `og:url` and `og:image` point at `https://pyrpaws.com/...`.
- Keep `.nojekyll`.

## Deploying on Netlify

New site from Git, this repo, branch `main`, build command empty, publish directory `.`.
Then add the custom domain `pyrpaws.com` in Netlify. DNS is changed separately, after approval.

## Cache-buster

After a visual change, bump the `?v=` value (currently `pyrpaws1`) on every page, in
`assets/site.js` (the `articles.json` fetch), and in `404.html`.
