# Phase 2 — Authentication and Persistence

## Objective

Connect Zap!-Points to Supabase Auth, ship the authentication UI flows, and prepare for persistence (schema, RLS, protected routes).

Phase 2 is split into two slices:

1. **Auth flows** (this slice — complete): login, signup, forgot password, reset password, Supabase client + auth service.
2. **Persistence and session** (remaining): database schema, RLS, protected routes, session management UI.

## Goals

- Establish Supabase as Layer 3 for authentication
- Keep Tier 2 / Tier 3 free of direct Supabase imports
- Provide a consistent auth shell (`AuthLayout`, `AuthCard`, shared feedback)
- Document decisions and learnings for educational continuity

## In scope (auth flows)

- Env: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
- `src/lib/supabase/client.ts`
- `src/services/auth.service.ts`
- Routes under `AuthLayout`: `/login`, `/signup`, `/forgot-password`, `/reset-password`
- Feature hooks and forms; shared `useAuthFeedback` and `authContent`

## Out of scope (auth flows slice)

- Database tables / RLS policies
- Protected route wrappers
- Full dashboard workspace
- Vercel / production CI

## Completion criteria (auth flows)

- [x] User can sign up and sign in via Supabase Auth
- [x] User can request a password recovery code and set a new password
- [x] Auth UI follows Tier/Layer boundaries
- [x] Docs updated for Phase 2 auth status

## Remaining criteria (persistence)

- [ ] Schema and RLS documented and applied
- [ ] Unauthenticated users cannot open protected app routes
- [ ] Sign-out / session listener wired into the UI

See [01-implemented-in-phase2.md](01-implemented-in-phase2.md) and [02-phase2-learnings.md](02-phase2-learnings.md).
