export const PROJECTS = [
  {
    slug: 'nfl-first-round-super-bowls',
    title: 'Do NFL First Round Picks Lead to Super Bowls?',
    summary:
      'SQL database built from APIs and web scrapers to analyze the correlation between first-round draft picks and Super Bowl wins.',
    tech: ['SQL', 'Python', 'Web scraping'],
    highlights: [
      'Data ingestion from multiple sources (APIs + scraping)',
      'SQL modeling for franchise-level comparisons',
      'Findings presented as a poster',
    ],
    artifact: {
      type: 'image',
      src: '/assets/nfl-poster.png',
      alt: 'NFL first-round draft picks vs. Super Bowl wins poster',
    },
  },
  {
    slug: 'area-development-segmentation',
    title: 'Finding Area Development Through Segmentation',
    summary:
      "Used Meta's Segment Anything Model and multiple ML models on satellite imagery to track building development and quantify natural land loss in the U.S.",
    tech: ['Python', 'Machine learning', 'Meta Segment Anything Model'],
    highlights: [
      'Explored areas around Fort Worth Texas and Houston Texas to find development patterns',
      'Multiple ML models used to segment buildings and quantify land loss all with their own challenges and tradeoffs',
      'Discovered multiple areas of development destroying natural land over just 7 years.',
    ],
    artifact: {
      type: 'slides',
      src: '/assets/segmentation-slides',
      count: 20,
      alt: 'Area development segmentation project slides',
    },
  },
  {
    slug: 'ai-chess-engines',
    title: 'AI-Driven Chess Engines',
    summary: "Research paper on the evolution of chess engines, from early rule-based systems to modern neural network-based engines, and their impact on chess strategy and AI development. Was the Final Project for the Math and Society course at Ithaca College.",
    tech: ['Research', 'Machine learning', 'Chess engines'],
    highlights: [],
    artifact: {
      type: 'pdf',
      src: '/assets/chess-engines-paper.pdf',
      label: 'View the paper (PDF)',
    },
  },
  {
    slug: 'college-thrift',
    title: 'College Thrift',
    summary:
      'Full-stack marketplace where college students buy and sell to each other — a working Flask demo with listing creation, image uploads, and search.',
    tech: ['Python', 'Flask', 'JavaScript', 'SQL', 'AWS'],
    highlights: [
      'Working demo: create listings with images and details, browse and search them, backed by a SQL database',
      'Signups restricted to campus (@ithaca.edu) email addresses',
      'AWS deployment underway when the semester ended; location filters and in-app chat were next',
    ],
    artifact: {
      type: 'slides',
      src: '/assets/college-thrift-slides',
      count: 7,
      alt: 'College Thrift project slides',
    },
  },
  {
    slug: 'this-website',
    title: 'This Website',
    summary:
      'Portfolio designed and built collaboratively with Claude as an AI Fluency course project — planned via structured delegation, built section by section with comprehension checks, deployed to GitHub Pages.',
    tech: ['Vite', 'React', 'Tailwind', 'Claude Code'],
    highlights: [
      'Planned via structured delegation, not one-shot generation',
      'Built and reviewed section by section, with comprehension checks along the way',
      'Repo is the code sample: clean README, tidy commits, UPDATING.md',
    ],
    artifact: {
      type: 'link',
      src: 'https://github.com/lerlichsondeliz/personal-portfolio',
      label: 'View the repo',
    },
  },
]
