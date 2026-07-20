# Decision Log

Official project decisions. Update this file when a decision is finalized.

## Phase 1 Decisions

### Vite over Next.js

**Decision:** Use Vite as the build tool instead of Next.js.

**Rationale:** Zap!-Points is a client-side SPA. Vite provides faster dev experience and simpler configuration without server-side rendering overhead.

**Date:** Phase 1

---

### React Router for client routing

**Decision:** Use `react-router-dom` with `createBrowserRouter`.

**Rationale:** The folder structure includes `router.tsx`. React Router is the standard choice for Vite SPAs and supports future multi-route growth.

**Date:** Phase 1

---

### Prettier for formatting

**Decision:** Use Prettier with `prettier-plugin-tailwindcss` for code formatting.

**Rationale:** Matches KIS-Points tooling. Consistent formatting reduces review friction.

**Date:** Phase 1

---

### `services/` for Layer 3

**Decision:** External data access lives in `src/services/` (not `lib/api/` as in KIS-Points).

**Rationale:** Phase 1 spec defines `services/` as the Layer 3 boundary. KIS-Points used `lib/api/` — Zap!-Points uses the clearer `services/` name.

**Date:** Phase 1

---

### No commit in Phase 1 implementation

**Decision:** Leave changes unstaged for manual first commit by the project owner.

**Date:** Phase 1

---

### Use Page instead of View suffix

**Decision:** Page will be used which correlates to the URL eg. LandingPage.tsx will be /landing LoginPage.tsx will be /login

**Date:** Phase 1

---

## Phase 2 Decisions

### Supabase client in `src/lib/supabase/`

**Decision:** Use `@supabase/supabase-js` with a singleton client in `src/lib/supabase/client.ts`. Only the anon/publishable key is exposed via `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.

**Rationale:** Vite SPAs can only safely ship the anon key. Service-role keys stay off the client. Typed env access lives in `src/lib/env.ts`.

**Date:** Phase 2

---

### Auth API only in `services/auth.service.ts`

**Decision:** All Supabase Auth calls go through Layer 3 (`src/services/auth.service.ts`). Tier 2 pages and Tier 3 forms never import the Supabase client.

**Rationale:** Keeps the Three-Layer boundary: hooks orchestrate; services own external I/O; UI stays presentational.

**Date:** Phase 2

---

### Shared `useAuthFeedback` / `runAction`

**Decision:** Loading, error, and success feedback for auth flows share `useAuthFeedback` with a `runAction` helper.

**Rationale:** Avoids duplicating try/catch/loading boilerplate across login, signup, forgot, and reset hooks.

**Date:** Phase 2

---

### Auth copy in `authContent.ts`

**Decision:** User-facing auth strings live in `src/features/auth/content/authContent.ts`, not hard-coded inside hooks or forms.

**Rationale:** One place to edit labels/errors; forms and hooks stay focused on behavior.

**Date:** Phase 2

---

### Layout owns auth chrome; pages stay thin

**Decision:** `AuthLayout` owns header, history-back (`AuthBackLink`), and content centering. Pages render `AuthCard` + form + hook wiring only. Default card width/padding live on `AuthCard`.

**Rationale:** Shared chrome belongs in Tier 1. Pages should not re-specify width, back links, or full-page mains.

**Date:** Phase 2

---

### Intentionally deferred in Phase 2 auth slice

**Decision:** Route guards, database schema/RLS, and formal session management UI are deferred until the persistence half of Phase 2.

**Rationale:** Ship and verify auth flows first. Session is already stored by the Supabase client after login; guarding routes and modeling app data come next.

**Date:** Phase 2
