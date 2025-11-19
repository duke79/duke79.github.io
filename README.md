# Pulkit Singh Resume (React + Vite + TypeScript)

The original static resume has been migrated into a Vite-powered React app. Content is rendered through typed components and keeps the collapsible UX that was previously handled with vanilla JavaScript.

## Getting Started

```bash
npm install        # install dependencies
npm run dev        # start Vite in development mode
npm run build      # type-check and build for production
npm run preview    # preview the production build locally
```

## Key Files

- `src/main-entry.tsx` – bootstraps React and loads the global stylesheet.
- `src/app-root.tsx` – renders the resume layout and content.
- `src/components/collapsible-section.tsx` – reusable animated collapsible control.
- `src/styles/resume-page.css` – migrated styling from the legacy site.

Persistent form helpers from the legacy codebase are not included because the resume has no input fields today. If inputs are added in the future, localStorage persistence can be layered onto controlled components in React.

## GitHub Pages Deployment

- `.github/workflows/deploy-github-pages.yml` builds the site with `npm run build` and publishes the `dist` folder using the official `actions/deploy-pages` action.
- Deployments run automatically on every push to `main` and can also be triggered manually using **Run workflow** in the Actions tab.
- Before the first deploy, enable GitHub Pages in repository settings and choose **GitHub Actions** as the source so the workflow can publish the site.
- If your default branch is not `main`, edit the `on.push.branches` section in the workflow to follow the correct branch.
