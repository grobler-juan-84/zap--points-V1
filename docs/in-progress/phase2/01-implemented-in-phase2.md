# Implemented in Phase 2 (Auth flows)

Checklist of what shipped in the authentication slice. Persistence items remain open.

## Supabase and env

- [x] `@supabase/supabase-js` dependency
- [x] `src/lib/supabase/client.ts` singleton client
- [x] `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` via `src/lib/env.ts`
- [x] `.env.example` documents required vars

## Layer 3 — Auth service

- [x] `signInWithEmailPassword`
- [x] `signUpWithEmailPassword` (metadata: name, title, role)
- [x] `requestPasswordReset` / `verifyRecoveryOtp` / `updateCurrentUserPassword`
- [x] `getSession` / `getUser` / `signOut`
- [x] Errors thrown as `Error(message)` for hooks to map to UI

## Routes and layout

- [x] `/login`, `/signup`, `/forgot-password`, `/reset-password` under `AuthLayout`
- [x] `AuthLayout`: header, `AuthBackLink` (history back + fallback), centered `<Outlet />`
- [x] Placeholder `/dashboard` (not guarded yet)

## Feature UI and hooks

- [x] Pages: `LoginPage`, `SignupPage`, `ForgotPasswordPage`, `ResetPasswordPage`
- [x] Forms under `features/auth/components/forms/`
- [x] Chrome: `AuthCard`, `AuthFormHeader`, `AuthFormFooter`, `AuthPrimaryButton`, `AuthFormFeedback`, `AuthBackLink`
- [x] Hooks: `useLogin`, `useSignup`, `useForgotPassword`, `useResetPassword`, `useAuthFeedback`
- [x] Copy: `content/authContent.ts`
- [x] Shared `PasswordInput` + visibility icons in `components/ui/`

## Deferred (still Phase 2)

- [ ] Database schema / RLS
- [ ] Protected routes / session guards
- [ ] Session management UI (sign-out button, auth listener in app shell)
- [ ] Dashboard beyond signed-in placeholder

## Explicitly out of this slice

- Class / student / points features (Phase 3)
- Production deployment (Phase 4)
