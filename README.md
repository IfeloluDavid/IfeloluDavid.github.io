# ifeloludavid.github.io

Personal website of **Ifelolu David**, Solutions Architect. It's a static site served by GitHub Pages with no build step.

## Updating your content

All the text lives in **`assets/js/data.js`**. Edit that one file to add jobs, certifications, skills, leadership roles, projects or articles.

- An empty list (`[]`) hides its section and its menu link.
- Entries marked `TODO` are templates to fill in from LinkedIn.
- **Photos:** `assets/img/profile.jpg` (hero) and `assets/img/candid.jpg` (About). Replace the files to update them.
- **CV:** add a PDF to `assets/` and set `resume` to show a "Download CV" button.
- **Email:** set `email` to show an "Email me" button.

## Publishing changes

After editing `data.js`, `main.js` or `style.css`, bump the `?v=` number on their links in `index.html` (today's date works, e.g. `?v=20261116`). GitHub Pages lets browsers keep these files for 10 minutes, and without a new number returning visitors can see the new page with old content.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Structure

```
index.html            page layout
assets/css/style.css  design (light & dark mode)
assets/js/data.js     ← your content
assets/js/main.js     renders the content into the page
```
