# Karanjit Singh · Portfolio & Resume

Personal portfolio and printable resume, served with GitHub Pages.

**Live:** https://karanjit96.github.io/Resume/

## Features

- Responsive layout for phone, tablet and desktop, with a mobile menu
- English and German, switchable in the header (remembers your choice)
- Expandable experience timeline, project cards, skills, gallery with lightbox
- Printable resume with six templates (Modern, Classic, Compact, Minimal, Executive, ATS) and three A4 densities
- No build step: plain HTML, CSS and JavaScript

## Editing content

All text lives in **`resume-data.js`**, with one block per language (`en`, `de`).
Change it there and both the website and the printable resume update.

Images live in `images/` as `.webp`. To add a gallery photo, put the file in `images/` and add an entry under `base.gallery` plus a caption key under `ui.gallery` for each language.

## Saving the PDF

Open the site, go to **Resume**, pick a template and density, then click **Print / Save PDF** and choose *Save as PDF*.
Turn on *Background graphics* in the print dialog to keep the colors.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure |
| `styles.css` | All styling, including print |
| `resume-data.js` | Content in English and German |
| `portfolio.js` | Website rendering, language switch, menu, gallery |
| `resume.js` | Printable resume templates |
| `images/` | Optimized photos and favicon |
