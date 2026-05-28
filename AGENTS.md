# AGENTS.md

## Project Type
Astro site using @aksell/ui component library.

## File Roles
- `src/layouts/Layout.astro` — base layout, wraps every page in UIProvider (provides all base styles + toast context)
- `src/pages/` — one .astro file per route (Astro file-based routing)
- `src/styles/global.css` — project-specific global styles
- `astro.config.mjs` — Astro configuration

## Adding a New Page
Create `src/pages/my-page.astro`:
```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="My Page">
  <h1>My Page</h1>
</Layout>
```
Route available at `/my-page`.

## @aksell/ui Export Keys (Astro-relevant)
Use these import paths for Astro projects (subset of @aksell/ui exports — React/WC/standalone exports also exist but are not applicable here):
- `@aksell/ui/provider` → UIProvider component (Astro) — already used in Layout.astro
- `@aksell/ui/resets` → CSS reset (injected by UIProvider — only import manually if not using UIProvider)
- `@aksell/ui/toast` → Toast JS module (use `@aksell/ui/toast-astro` for the Astro component instead)
- `@aksell/ui/toast-astro` → Toast component (Astro)
- `@aksell/ui/pillarrowbtn` → PillArrowBtn component (Astro)
- `@aksell/ui/colors` → CSS custom properties for brand colors
- `@aksell/ui/typography` → Typography styles
- `@aksell/ui/buttons.css` → Button styles
- `@aksell/ui/forms` → Form styles
- `@aksell/ui/toast.css` → Toast styles
- `@aksell/ui/pillarrowbtn.css` → PillArrowBtn styles

**Note:** UIProvider (used in Layout.astro) already injects resets, colors, typography, buttons, forms, and toast CSS. Do NOT re-import these in Layout.astro or page files — they are already applied globally.

## Dev Commands
- `npm run dev` — start dev server at http://localhost:4321
- `npm run build` — build for production
- `npm run preview` — preview production build

## What NOT to Do
- Don't add raw HTML/head/body to page files — use Layout
- Don't import @aksell/ui from deep `src/` paths
- Don't add a CSS framework
- Don't remove UIProvider from Layout
- Don't re-import CSS that UIProvider already provides (resets, colors, typography, buttons, forms, toast)
