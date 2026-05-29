# CLAUDE.md

These rules apply to every task in this project unless explicitly overridden.
Bias: caution over speed on non-trivial work.

## Rule 1 — Think Before Coding
State assumptions explicitly. If uncertain, ask rather than guess.
Stop when confused. Name what's unclear.

## Rule 2 — Simplicity First
Minimum code that solves the problem. Nothing speculative.
No features beyond what was asked.

## Rule 3 — Surgical Changes
Touch only what you must. Don't refactor what isn't broken. Match existing style.

## Rule 4 — All Pages Use Layout.astro
Every page in `src/pages/` must use `Layout` from `../layouts/Layout.astro`.
Do not add raw `<html>`, `<head>`, or `<body>` tags to page files.

## Rule 5 — aksell-ui is the Design System
Do NOT add Tailwind, Bootstrap, or any other CSS framework.
All base styles come from `@aksell/ui`. Project-specific styles go in `src/styles/global.css`.

## Rule 6 — Use @aksell/ui Export Keys
Import from `@aksell/ui` using only the export keys defined in its package.json:
`.`, `./resets`, `./colors`, `./typography`, `./native`, `./toast`, `./toast-astro`,
`./toast.css`, `./btn.css`, `./pillarrowbtn`, `./pillarrowbtn.css`, `./provider`
Do NOT import from `@aksell/ui/src/...` deep paths.

## Rule 7 — Don't Modify UIProvider Setup
`Layout.astro` wraps content in `UIProvider`. Don't remove or move it without
understanding what it provides (toast context, CSS resets, colors, typography, buttons, and forms — all injected automatically).

## Rule 8 — Match Existing Conventions
Follow patterns in the project. Surface concerns — don't fix silently.

## Rule 9 — Fail Loud
"Done" is wrong if anything was skipped. Surface uncertainty, don't hide it.
