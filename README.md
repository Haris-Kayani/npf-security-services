# NPF Security Services website

A public company website built with React, TypeScript, Vite and CSS modules.

## Requirements

Node.js 22.16 or newer and npm.

## Development

```sh
npm ci
npm run dev
```

## Checks and build

```sh
npm run typecheck
npm run format:check
npm run build
```

The build outputs static client files to `dist/client`. The included deployment adapter is prepared by `scripts/prepare-sites-build.mjs`.

## Source layout

- `src/components`: homepage and shared layout components.
- `src/content`: company content and navigation.
- `src/features/inquiry`: inquiry interface and state.
- `src/pages`: page composition.
- `src/styles`: global rules and design tokens.
- `public/images/brand`: approved brand assets.

Generated placeholder images are not versioned. A clean checkout requires approved replacement imagery or separately provisioned local assets for the image paths referenced by the UI.
