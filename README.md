# Emmanuel Johnny Koffi · Portfolio

A hand-coded, single-page portfolio in plain HTML, CSS and JavaScript. There is no build step and nothing to install.

## Files

| File | What it does |
|---|---|
| `index.html` | All the content and structure. Edit this to change any text. |
| `css/styles.css` | All the styling. Theme colors live at the top as CSS variables. |
| `js/theme.js` | Picks light or dark mode before the page draws (avoids a flash). |
| `js/main.js` | Theme toggle, mobile menu and the footer year. |
| `assets/favicon.svg` | The browser-tab icon. |

## Preview locally

Open `index.html` in a browser, or run a tiny local server from this folder:

```sh
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Common edits

- **Change the accent color:** edit `--accent` in both the dark (`:root`) and light (`:root[data-theme="light"]`) blocks at the top of `css/styles.css`.
- **Add a job:** copy the `<li>` that wraps `<article class="job">`, newest first.
- **Add a project:** copy an `<article class="project">` block.
- **Hide "Available for opportunities":** delete the `<p class="status-badge">` in the hero.

## Deploy on Netlify

Connect this repository in Netlify with an empty build command and publish directory `.` (the repository root).
