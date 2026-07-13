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
