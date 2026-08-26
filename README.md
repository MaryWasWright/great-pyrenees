# The Great Pyrenees Archive

Public site for Great Pyrenees history, a living catalog of internet sources, and a livestock-guardian training how-to.

- Repo: https://github.com/MaryWasWright/great-pyrenees
- Intended live URL after GitHub Pages is switched on: https://marywaswright.github.io/great-pyrenees/

## Local layout

- `index.html` — home
- `history.html` — breed history
- `archive.html` — searchable source catalog
- `training.html` — livestock guardian how-to
- `about.html` — project notes
- `data/articles.json` — catalog entries (add sources here)
- `assets/` — CSS and catalog JavaScript

## Go live (one-time)

1. Open https://github.com/MaryWasWright/great-pyrenees/settings/pages
2. Under **Build and deployment**, set Source to **GitHub Actions** (if using the workflow) **or** **Deploy from a branch** → `main` / `/ (root)`
3. Wait a minute, then visit https://marywaswright.github.io/great-pyrenees/

## Add an article later

Append an object to `data/articles.json`:

```json
{
  "title": "Article title",
  "source": "Publisher",
  "url": "https://example.com",
  "year": "2026",
  "topic": "History",
  "summary": "One or two original sentences. Do not paste copyrighted full text."
}
```

Topics already in use: History, Livestock Guardian, Training, Breed Standard, Clubs & Rescue.
