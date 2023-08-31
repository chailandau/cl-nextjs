# Chai Landau - Portfolio Frontend

This is the frontend for my portfolio. It is a headless build using Next.js coupled with a PayloadCMS backend.

## Tech stack

This is not an exhaustive list, rather, the main tech stack

-   <strong>[Next.js](https://nextjs.org/) with App Dir</strong> - Using revalidate on demand allows incremental updates without the whole site having to be rebuilt (while staying static for SEO).
-   <strong>[TypeScript](https://www.typescriptlang.org/)</strong> - Adds type safeties and reduces potential errors further down the road
-   <strong>[Storybook](https://storybook.js.org/)</strong> - Acts as documentation and serves as a building block for snapshot and visual regression tests
-   <strong>[Jest](https://jestjs.io/)</strong> - Comprehensive testing library to ensure code is doing what it is supposed to
    -   Uses <strong>[jest-axe](https://www.npmjs.com/package/jest-axe)</strong> as an additional A11y safety net (on top of extensive manual testing)
-   <strong>[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)</strong> Adds APIs on top of DOM Testing Library for easier React component testing
-   <strong>[Loki](https://loki.js.org/)</strong> - Generates screenshots of Storybook stories to use with reg-cli
-   <strong>[reg-cli](https://github.com/reg-viz/reg-cli)</strong> - Generates report from screenshots generated by Loki to easily scan for visual regression.
-   <strong>[Framer Motion](https://www.framer.com/motion/)</strong> - Powerful motion library for React animations

## Behind the scenes

Some of the tech used behind the scenes, unnoticed, but super useful

-   <strong>[CapRover](https://caprover.com/)</strong> - Open source Docker-based app and database deployment manager that handles automatic deployments (with backups) when the main branch is updated
-   <strong>[GitHub Actions](https://github.com/features/actions)</strong> - Runs Jest tests and Loki / reg-cli visual regression tests on open pull requests
-   <strong>Linting</strong> - Comprehensive [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) rule sets automatically run with each commit through [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged).
## Getting started

- [Node version](#node-version)
- [Dependencies](#dependencies)
- [Secrets](#secrets)
- [Next.js](#nextjs)
  - [Development server](#development-server)
  - [Production server](#production-server)
- [Storybook](#storybook)
  - [Development Server](#development-server-1)
- [Codegen](#codegen)
  - [Update types](#update-types)
  - [Production build](#production-build)
- [Jest](#jest)
  - [Watch mode](#watch-mode)
  - [Coverage](#coverage)
  - [Update](#update)
- [Loki](#loki)
  - [Run tests](#run-tests)
  - [Generate report](#generate-report)
  - [Update references](#update-references)
- [Deploy](#deploy)

### Node version

This project uses Node v18.10.0. 

If you're using nvm, you can run `nvm use` to switch to the right version.

If you don't have nvm installed yet, you can get it [here](https://github.com/nvm-sh/nvm).

### Dependencies

Install all necessary dependencies using yarn.

```
yarn
```

### Secrets

You will need to add the appropriate secrets in an `.env` file.

### Next.js

#### Development server

Run the development server

```
yarn dev
```

#### Production server

Generate an optimized production build

```
yarn build
```

Run the production build locally

```
yarn start
```


### Storybook

#### Development Server

Run Storybook's development server

```
yarn storybook
```

### Codegen

#### Update types

Codegen is used to create or update GraphQL types for use with TypeScript. The app must be running for this to work.

```
yarn update-types
```


#### Production build

Generate an optimized production build of Storybook

```
yarn storybook:build
```

### Jest

#### Watch mode

Run Jest in watch mode

```
yarn test
```

#### Coverage

Run Jest and generate an updated coverage report

```
yarn test:coverage
```

#### Update

Run Jest and update snapshots

```
yarn test:update
```

### Loki

You will need a production Storybook [build](#production-build-1) before running Loki.

#### Run tests

```
 yarn loki:test
```

#### Generate report

Uses reg-cli to generate HTML and JSON reports

```
yarn loki:report
```

#### Update references

Updates Loki and ref-cli references. This is typically used after expected visual regressions are flagged in a PR.

```
yarn loki:update
```

### Deploy

The repo is connected to CapRover via webhook. Anytime the main branch updates, the site will be automatically updated and deployed.