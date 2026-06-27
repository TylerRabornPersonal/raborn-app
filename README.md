# raborn-site

One repo → one Vercel project → raborn.app. Every page is a folder.

## How to add a new page

1. Make a new folder named after the URL you want (lowercase, no spaces).
2. Put your HTML inside it, named `index.html`.
3. Commit in GitHub Desktop. Vercel auto-deploys in ~20 seconds.

```
raborn-site/
├── index.html          → raborn.app
├── worldcup/
│   └── index.html      → raborn.app/worldcup
└── new-thing/
    └── index.html      → raborn.app/new-thing
```

Naming each file `index.html` inside its own folder gives a clean URL
with no `.html` on the end.

## Workflow

Drop folder → open GitHub Desktop → Commit to main → live.
No new repos, no tokens, no new Vercel projects ever again.
