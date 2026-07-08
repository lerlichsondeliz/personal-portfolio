# hi, i'm lukas

My personal portfolio — live at [lerlichsondeliz.github.io/personal-portfolio](https://lerlichsondeliz.github.io/personal-portfolio/).

## The concept

My name and tagline sit centered on screen. The four sections (About / Projects / Experience / Contact) start "locked" behind outlined nav pills — clicking one unlocks it: the section expands into the page, the pill fills in, and an ambient background orb tinted toward that section's accent color fades in. Sections stay open once revealed, and everything works with keyboard navigation, mobile widths, and `prefers-reduced-motion`.

## Stack

- **[Vite](https://vite.dev/)** + **[React](https://react.dev/)** — fast dev loop, and a single-page interactive site is exactly React's sweet spot
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility classes keep every style decision visible in the component that uses it; the whole theme is two CSS variables
- **No component libraries, no templates** — every component is small, custom, and understood

Content (projects, experience, skills) lives in plain data files under [`src/data/`](src/data/), separate from the components that render it — see [UPDATING.md](UPDATING.md) for how to add a project in a few minutes.

## Built with Claude

This site was designed and built collaboratively with [Claude Code](https://claude.com/claude-code) as my project for the AI Fluency course. The collaboration was structured deliberately: I set the concept, constraints, and decisions; Claude proposed structure and implemented one section at a time, explaining the key React and CSS patterns after each step so I could review, question, and course-correct before moving on. I can explain every line in this repo.

## Running locally

```bash
npm install
npm run dev
```

Build for production with `npm run build` (output in `dist/`).
