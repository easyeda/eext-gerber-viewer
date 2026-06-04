# CLAUDE.md - Gerber Viewer Extension for EasyEDA

## Project Overview

Gerber Viewer extension for EasyEDA (嘉立创EDA). Provides an integrated Gerber file viewer within the EDA, supporting RS-274X Gerber and Excellon drill files with multi-layer overlay rendering.

## Architecture

- **Entry point**: `src/index.ts` — Exports `viewPcbGerber` and `openGerberViewer` functions mapped to `extension.json` header menus
- **Gerber viewer source**: `src/online-gerber-viewer.html` — Original self-contained HTML viewer (minified), NOT modified directly
- **Build output**: `dist/online-gerber-viewer.html` — Copy with extension hook injected at build time
- **Configuration**: `extension.json` — Extension manifest with PCB header menu definitions
- **Locales**: `locales/` — i18n strings (en, zh-Hans) and extensionJson translations
- **Build**: esbuild + HTML injection, outputs to `dist/`, packages to `build/dist/`

## Build Pipeline

1. esbuild compiles `src/index.ts` → `dist/index.js`
2. Post-build step reads `src/online-gerber-viewer.html`, injects MessageBus listener before `</script>`, writes to `dist/online-gerber-viewer.html`
3. `packaged.ts` bundles everything (excluding `.edaignore` entries) into `.eext` ZIP

To update the viewer HTML: replace `src/online-gerber-viewer.html` and rebuild.

## Key APIs Used

- `eda.pcb_ManufactureData.getGerberFile()` — Gets Gerber ZIP from current PCB
- `eda.sys_IFrame.openIFrame()` — Opens the viewer as a dialog
- `eda.sys_MessageBus.push()` / `pullAsync()` — Passes file data from extension to iframe (topic: `gerber-viewer-load-file`)
- `eda.sys_I18n.text()` — Locale-aware strings

## Extension ↔ IFrame Communication

1. Extension pushes `{ data: ArrayBuffer, name: string }` to MessageBus topic `gerber-viewer-load-file`
2. Extension opens the IFrame dialog
3. IFrame accesses `window.parent.eda` to pull the data from the same topic
4. IFrame reconstructs a `File` from the ArrayBuffer and calls the internal `uw()` function to render

## Development Commands

```bash
npm install          # Install dependencies
npm run compile      # Compile TypeScript to dist/
npm run build        # Compile + package extension (.eext)
npm run lint         # Run ESLint
npm run fix          # Run ESLint --fix
```

## Extension Installation

1. Run `npm run build` to generate the `.eext` package in `build/dist/`
2. In EasyEDA, go to Extension Manager and install the generated package

## Code Style

- TypeScript with strict mode
- ESLint using `@antfu/eslint-config`
- No comments unless explaining non-obvious behavior
