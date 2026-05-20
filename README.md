# boilerplate-front-react

React + TypeScript + Vite boilerplate with a ready-to-use Cypress E2E test stack.

## Stack

- **React 19** + **TypeScript 6**
- **Vite 8** for the dev server and the production build
- **Cypress 15** for E2E tests
- **start-server-and-test** to orchestrate the Vite server and Cypress in parallel

## Requirements

- Node.js 20+ (latest LTS recommended)
- npm 10+

## Install

```bash
npm install
```

## Scripts

### Dev - TDD mode

```bash
npm run test:dev
```

Starts Vite **and** opens the Cypress UI in parallel. You can:

1. Write a test in `cypress/e2e/` describing the expected behavior
2. Run it from the Cypress UI — it fails (red)
3. Implement the code in `src/` until the test passes (green)
4. Cypress automatically re-runs the spec on every save

Vite reloads the app on every change in `src/`, and Cypress re-runs specs on every change in `cypress/` — the TDD loop is instant.

### Manual testing

```bash
npm run dev
```

Starts the Vite dev server on [http://localhost:5173](http://localhost:5173) with HMR.

### Production build

```bash
npm run build
```

Runs the typecheck (`tsc -b`) and produces the production bundle in `dist/`.

```bash
npm run preview
```

Serves the production bundle locally to verify the build output.

### Run tests, Headless mode (CI / quick check)

```bash
npm test
```

Starts Vite, waits until it responds on `http://localhost:5173`, runs every Cypress spec headlessly, then stops Vite. This is the command to wire into CI.

## Structure

```
.
├── src/
│   ├── App.tsx          # Root component
│   └── main.tsx         # React entry point
├── cypress/
│   ├── e2e/             # E2E specs (*.cy.ts)
│   ├── support/         # Cypress hooks and custom commands
│   └── tsconfig.json    # tsconfig dedicated to Cypress types
├── cypress.config.mjs   # Cypress config (.mjs because package.json is "type": "module")
├── vite.config.ts
└── tsconfig.json
```

## Writing an E2E test

Specs live in `cypress/e2e/*.cy.ts`. Target elements via `data-testid` rather than CSS classes or text content (`data-testid` attributes don't shift when the design evolves).

Example (`cypress/e2e/home.cy.ts`):

```ts
describe("Welcome", () => {
  it('displays welcome page', () => {
    cy.visit('/')
    cy.get('[data-testid="home-title"]')
      .should('be.visible')
      .and('contain.text', 'Welcome in React boilerplate')
  })
})
```

The `baseUrl` is configured in `cypress.config.mjs`, so `cy.visit('/')` is enough.
