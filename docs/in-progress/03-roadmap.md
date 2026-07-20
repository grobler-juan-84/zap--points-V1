# Roadmap

High-level development phases for Zap!-Points.

## Phase 1 — Project Foundation (Complete)

Establish core stack, folder structure, architectural boundaries, tooling, documentation, and application layout.

See [01-implemented-in-phase1.md](01-implemented-in-phase1.md).

## Phase 2 — Authentication and Persistence (Auth flows complete; Persistence planned)

### Auth flows (complete)

- Supabase project + JS client setup
- Authentication UI: login, signup, forgot password (OTP), reset password
- Auth service + feature hooks; copy in `authContent.ts`
- `AuthLayout` / `AuthCard` / shared auth chrome

See [phase2/00-phase2-goal.md](phase2/00-phase2-goal.md) and [phase2/01-implemented-in-phase2.md](phase2/01-implemented-in-phase2.md).

### Persistence and session (planned — remaining Phase 2)

- Database schema and RLS
- Protected routes / session guards
- Session management UI (sign-out, auth state listener)
- Dashboard beyond signed-in placeholder

## Phase 3 — Core Features (Planned)

Likely scope (to be refined):

- Class management
- Student roster
- Points awarding
- Dashboard workspace

## Phase 4 — Deployment (Planned)

- Vercel deployment configuration
- Environment management for production
- CI/CD pipeline

## Notes

Phase 2 auth specs live under `docs/in-progress/phase2/`. Detailed specs for Phase 3+ will be created in `docs/in-progress/phaseN/` when each phase begins.
