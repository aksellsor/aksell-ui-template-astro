# {{project-name}}

Scaffolded with [create-aksell](https://github.com/aksellsor/create-aksell).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

Before handing off changes, run:

```bash
npm run check
```

## Stack
- [Astro](https://astro.build)
- [@aksell/ui](https://www.npmjs.com/package/@aksell/ui)

Do not add Tailwind, Bootstrap, or another CSS framework. Use `@aksell/ui` for base styles and components.
`@aksell/ui` does not ship Aeonik font files. If this project has a valid Aeonik license, add the project-owned `@font-face` declarations in `src/styles/global.css`.

## Project structure

```
src/
├── layouts/
│   └── Layout.astro   # base layout with UIProvider
├── pages/
│   └── index.astro    # home page
└── styles/
    └── global.css     # project-specific styles
```
# aksell-ui-template-astro
