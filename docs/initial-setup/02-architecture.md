# Architecture

Zap!-Points uses **Three-Tier UI / Three-Layer Data** architecture, adapted from KIS-Points for a Vite SPA.

## Three-Tier UI

| Tier | Location | Responsibility |
|------|----------|----------------|
| **Tier 1** | `src/layouts/` | Application layout, persistent chrome, page positioning, overlay mount areas |
| **Tier 2** | `src/features/` | Feature views, workspace wiring, store subscription, prop delegation |
| **Tier 3** | `src/components/ui/` + feature `components/` | Presentational UI — buttons, cards, forms, modals |

### Tier Rules

- **Tier 1** composes layout; no feature logic or data fetching.
- **Tier 2** orchestrates feature UI; may read/write Zustand stores; no direct API/Supabase calls.
- **Tier 3** receives data and callbacks via props; no stores or orchestration hooks.

## Three-Layer Data

| Layer | Location | Responsibility |
|-------|----------|----------------|
| **Layer 1** | `src/hooks/` (+ feature `hooks/`) | Workflow orchestration, async operations, loading/error states |
| **Layer 2** | `src/stores/` (+ feature `stores/`) | Application state, synchronous actions |
| **Layer 3** | `src/services/` (+ `src/lib/`) | External data access — Supabase, APIs, auth (future) |

### Layer Rules

- **Layer 1** hooks connect UI events to stores and services.
- **Layer 2** stores are pure data containers — no Supabase or API imports.
- **Layer 3** services are dumb data access — parameters in, typed records out.

## Pure Domain Utilities

Business rules that do not depend on React, Zustand, or external services belong in `src/lib/` as plain TypeScript functions (validation, formatting, calculations).

## Data Flow (Target)

```text
UI Event → Layer 1 Hook → Layer 2 Store (optimistic update) → Layer 3 Service → External API
```

Phase 1 implements the folder boundaries and a minimal store demo only. Full data flow arrives with authentication and persistence in Phase 2+.

## Routing

`src/app/router.tsx` defines routes. The URL will become the primary source of truth for navigational state as features are added.

## Phase 1 Example

```text
MarketingLayout (Tier 1)
  └── LandingPage (Tier 2)
        ├── Button (Tier 3)
        └── useAppStore (Layer 2)
```
