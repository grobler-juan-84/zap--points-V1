# Naming Conventions

Adapted from KIS-Points. Consistent naming makes the codebase easier to navigate.

## UI Tiers

| Pattern | Tier | Example |
|---------|------|---------|
| `*Layout.tsx`, `MarketingLayout.tsx`, `AuthLayout.tsx` | Tier 1 | Layout scaffolding |
| `*Page.tsx` | Tier 2 | Feature route entry (`LoginPage`, `LandingPage`) |
| `*Workspace.tsx` | Tier 2 | Stage/workspace container |
| `*Host.tsx` | Tier 2 | Modal or tool orchestrator |
| Component name (PascalCase) | Tier 3 | `Button`, `AuthCard`, `LoginForm` |

> **Note:** Prefer `*Page` over `*View` for route entry components (see decision log).

## Data Layers

| Pattern | Layer | Example |
|---------|-------|---------|
| `use*Actions.ts`, `use*Management.ts` | Layer 1 | Mutation orchestration |
| `use*ModalController.ts` | Layer 1 | Modal wiring hook |
| `use*Sync.ts`, `*Sync.tsx` | Layer 1b | URL/store sync workers |
| `use*Store.ts` | Layer 2 | Zustand store |
| `*Service.ts` | Layer 3 | External data access (no `use` prefix) |

## Pure Utilities

Plain TypeScript functions for validation, formatting, and domain rules. No `use` prefix.

Examples: `formatPoints.ts`, `validateEmail.ts`

## Hook Placement

- `src/hooks/` — hooks consumed by **two or more** features.
- `src/features/<feature>/hooks/` — feature-scoped hooks.

## API Verbs (Layer 3)

Prefer consistent verbs: `list*`, `get*`, `create*`, `update*`, `delete*`.

## Files and Folders

- React components: PascalCase files (`LandingPage.tsx`)
- Hooks, stores, services, utilities: camelCase files (`useAppStore.ts`, `env.ts`)
- Feature folders: lowercase (`landing/`, `dashboard/`)
