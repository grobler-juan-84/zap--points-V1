# Architecture

Zap!-Points uses **Three-Tier UI / Three-Layer Data** architecture, adapted from KIS-Points for a Vite SPA.

## Three-Tier UI

| Tier | Location | Responsibility |
|------|----------|----------------|
| **Tier 1** | `src/layouts/` | Application layout, persistent chrome, page positioning, overlay mount areas |
| **Tier 2** | `src/features/` | Feature pages, workspace wiring, store subscription, prop delegation |
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
| **Layer 3** | `src/services/` (+ `src/lib/`) | External data access — Supabase Auth (in use), database/APIs (persistence pending) |

### Layer Rules

- **Layer 1** hooks connect UI events to stores and services.
- **Layer 2** stores are pure data containers — no Supabase or API imports.
- **Layer 3** services are dumb data access — parameters in, results or thrown errors out.

## Pure Domain Utilities

Business rules that do not depend on React, Zustand, or external services belong in `src/lib/` as plain TypeScript functions (validation, formatting, calculations).

## Data Flow (Target)

```text
UI Event → Layer 1 Hook → Layer 2 Store (optimistic update) → Layer 3 Service → External API
```

Auth flows today typically skip Layer 2 (no Zustand auth store yet):

```text
Submit → useLogin / useSignup / … → auth.service → supabase.auth → navigate
```

Database-backed features and protected routes arrive with Phase 2 persistence.

## Routing

`src/app/router.tsx` defines routes. Marketing routes use `MarketingLayout`; auth routes use `AuthLayout`. The URL is the primary source of truth for navigational state.

## Examples

### Phase 1 — Landing

```text
MarketingLayout (Tier 1)
  └── LandingPage (Tier 2)
        ├── Button (Tier 3)
        └── useAppStore (Layer 2)
```

### Phase 2 — Login

```text
AuthLayout (Tier 1)
  └── LoginPage (Tier 2)
        ├── AuthCard / LoginForm (Tier 3)
        ├── useLogin + useAuthFeedback (Layer 1)
        └── auth.service → supabase client (Layer 3)
```
