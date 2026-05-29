# Copilot Instructions

- Use `Layout.astro` for every page in `src/pages/`.
- Use `@aksell/ui` as the design system.
- Do not add Tailwind, Bootstrap, or any other CSS framework.
- Do not add Aeonik font files unless this project has a valid license.
- Do not import from `@aksell/ui/src/...`; use package exports such as `@aksell/ui/provider`, `@aksell/ui/pillarrowbtn`, and `@aksell/ui/btn.css`.
- Keep project-specific styles in `src/styles/global.css`.
- Run `npm run check` before handing off changes.
