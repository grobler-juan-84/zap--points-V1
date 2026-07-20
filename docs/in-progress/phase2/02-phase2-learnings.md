# Phase 2 Learnings (Auth)

Educational notes from building and refining the auth flows. Read alongside [login-training.md](../../login-training.md).

## Tier / layer split in practice

```text
AuthLayout (Tier 1)     → chrome only
LoginPage (Tier 2)      → hook + AuthCard
LoginForm (Tier 3)      → props in, callbacks out
useLogin (Layer 1)      → async workflow + feedback
auth.service (Layer 3)  → Supabase Auth calls
```

If a form imports `supabase`, or a page calls `signInWithPassword` directly, the boundary is wrong.

## Why `<form>` matters

Submit handlers belong on a real `<form>`, not `<main>` or a `<div>`. Browsers only fire `submit` (and honor `type="submit"`) for forms. Signup briefly used `<main onSubmit={...}>`, so clicking **Create account** did nothing until it was changed to `<form>`.

## Layout vs page ownership

Shared chrome belongs once, in the layout:

| Concern | Owner |
|---------|--------|
| Back control, centering | `AuthLayout` |
| Default card width / padding | `AuthCard` |
| Fields + submit | Form |
| Hook wiring | Page |

Pages that re-add `AuthBackLink` or `w-9/10 sm:w-1/3` duplicate the shell and drift out of sync.

## Controlled inputs and callbacks

Forms are controlled: `value` + `onChange` from the page/hook. The form does not own email/password state. That makes validation and submit logic easy to test in the hook and keeps Tier 3 presentational.

## Thin services, UI copy in hooks

Services throw `new Error(message)` (often Supabase’s message). Hooks decide user-facing fallbacks via `authContent` and `runAction`. Do not hard-code long error strings inside the service.

## Shared feedback

`useAuthFeedback` + `AuthFormFeedback` keep loading/error/success consistent across login, signup, forgot, and reset. Prefer one shared component over four copies of red/green `InlineErrorText`.

## Session nuances

- After login, Supabase stores the session in browser storage; `navigate('/dashboard')` usually runs before any success banner is visible.
- Reset password checks for a recovery session before showing the new-password fields.
- `/dashboard` is **not** guarded yet — opening it without signing in still works. Protected routes are a remaining Phase 2 item.

## Client-safe env

Only `VITE_*` vars reach the browser. Use the anon key, never the service-role key. Empty env values become `''` and fail at runtime — configure `.env.local` before testing auth.

## History back vs known routes

`AuthBackLink` uses `navigate(-1)` with a fallback path when there is little history. That is better UX for “go back” than always linking to `/`, but a known `Link to="/login"` is still right for footer CTAs (“Already have an account?”).
