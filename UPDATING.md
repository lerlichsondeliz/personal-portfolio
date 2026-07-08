# Updating this site

Every common edit is a data change, not a component change. Content lives in `src/data/`, theme in `src/index.css`. After any change: `npm run dev` to check it, then commit and push — GitHub Pages redeploys automatically.

## Add a project (~10 minutes)

1. Export the artifact (image or PDF) into `public/assets/` — e.g. `public/assets/my-project.png`.
2. Open [`src/data/projects.js`](src/data/projects.js) and add one object to the `PROJECTS` array (order in the array = order on the page):

```js
{
  slug: 'my-project',                    // unique, kebab-case, used for DOM ids
  title: 'My Project',
  summary: 'One or two sentences shown on the card before expanding.',
  tech: ['Python', 'SQL'],               // rendered as small tags
  highlights: [                          // bullet points in the expanded view
    'What you built',
    'What you found',
  ],
  artifact: {
    type: 'image',                       // 'image' | 'pdf' | 'link'
    src: '/assets/my-project.png',       // for pdf/link: the href
    alt: 'Describe the image',           // image only
    // label: 'View the paper (PDF)',    // pdf/link only: button text
  },
},
```

That's it — the card, expand/collapse, tags, and artifact rendering all come from `ProjectCard.jsx` automatically. If the artifact file is missing, the card shows a dashed placeholder box instead of a broken image.

## Add or edit experience / education

[`src/data/experience.js`](src/data/experience.js) has two arrays:

- `EXPERIENCE`: `{ role, org, dates, bullets: [...] }` — keep reverse-chronological order yourself; nothing sorts automatically.
- `EDUCATION`: `{ school, degree, dates, location, note }`.

## Edit skills

[`src/data/skills.js`](src/data/skills.js) — `{ category, items: [...] }` per group. Add a skill by appending a string to the right `items` array.

## Add a contact link (e.g. YouTube)

[`src/components/Contact.jsx`](src/components/Contact.jsx) — add `{ label: 'YouTube', href: 'https://...' }` to the `LINKS` array at the top. Non-`mailto:` links open in a new tab automatically. Consider matching it in the footer ([`src/components/Footer.jsx`](src/components/Footer.jsx)) if relevant.

## Change the theme colors

[`src/index.css`](src/index.css):

- **Light mode**: the `@theme` block — `--color-cream` (background) and `--color-ink` (text).
- **Dark mode**: the `.dark` block right below it.
- Everything using `bg-cream`, `text-ink`, etc. updates automatically. The handful of literal grays (`text-gray-600 dark:text-gray-300` etc.) are per-component.

## Tune the background orbs

[`src/components/AmbientOrbs.jsx`](src/components/AmbientOrbs.jsx) — the `ORBS` array at the top is the single source of truth: one object per orb with `accentColor`, position (`top`/`left`), `size`, drift `duration`/`driftX`/`driftY`. The desaturated resting tint is `--orb-tint` in `index.css` (separate values for light and dark). Overall strength: `TINT_OPACITY` / `ACCENT_OPACITY` constants.

## Change the name, tagline, or bio

- Name + tagline: [`src/components/Hero.jsx`](src/components/Hero.jsx)
- Bio paragraph: [`src/components/About.jsx`](src/components/About.jsx)

## Add a whole new section

More involved (touches three places):

1. Add `{ id: 'newsection', label: 'New Section' }` to `NAV_ITEMS` in `Nav.jsx`.
2. Create the content component in `src/components/`.
3. In `App.jsx`, add a `<Section id="newsection" title="New Section" unlocked={isUnlocked('newsection')}>` wrapping it.
4. Optionally give it an orb: add an entry with the same `id` to the `ORBS` array in `AmbientOrbs.jsx`.

## Deployment notes

- The site deploys from the `main` branch via GitHub Actions (`.github/workflows/deploy.yml`) — push to `main` and it rebuilds.
- `base: '/personal-portfolio/'` in [`vite.config.js`](vite.config.js) must always match the repo name. If the repo is ever renamed, change this too or every asset 404s.
