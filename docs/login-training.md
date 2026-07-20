# Login Training Guide

> **Educational reference only.** This file is not imported by the app.
> In production, the same logic is split across many files. Here it is flattened into one place so you can see the whole `/login` path without jumping around.

## Purpose

In the real codebase you must open many files to follow login:

```text
index.html
  → main.tsx
  → App.tsx
  → AppProviders.tsx
  → router.tsx
  → AuthLayout.tsx
  → LoginPage.tsx
  → LoginForm.tsx (+ UI primitives)
  → useLogin.ts → useAuthFeedback.ts
  → auth.service.ts → supabase/client.ts → env.ts
  → /dashboard
```

This document consolidates that chain into one annotated walkthrough.

---

## Flow overview

```text
Browser loads index.html
  → Vite boots React (main.tsx)
  → Router matches /login
  → AuthLayout wraps LoginPage
  → LoginPage owns state via useLogin
  → LoginForm renders controlled inputs
  → Submit → preventDefault → handleLogin
  → runAction (loading / error / success)
  → signInWithEmailPassword
  → supabase.auth.signInWithPassword
  → Supabase stores session in browser storage
  → navigate('/dashboard')
```

---

## Prerequisites

### Packages used by this flow

```json
{
  "dependencies": {
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "react-router-dom": "^7.18.1",
    "@supabase/supabase-js": "^2.110.6"
  },
  "devDependencies": {
    "vite": "^8.1.1",
    "@vitejs/plugin-react": "^6.0.3",
    "typescript": "~6.0.2",
    "tailwindcss": "^4.3.2",
    "@tailwindcss/postcss": "^4.3.2",
    "postcss": "^8.5.18"
  }
}
```

Scripts: `npm run dev` (Vite), `npm run build` (`tsc -b && vite build`).

### Environment (`.env.local`)

```bash
# Vite only exposes vars prefixed with VITE_ to client code.
VITE_APP_NAME=Zap!-Points
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_ANON_OR_PUBLISHABLE_KEY
```

Use the **browser-safe anon/publishable key only**. Never put a service-role key in Vite client code.

### Path alias (`@` → `src`)

Vite (`vite.config.ts`) and TypeScript (`tsconfig.app.json`) both map `@/*` to `./src/*`, which is why imports look like `@/services/auth.service`.

### Styling dependency

- `src/styles/globals.css` — Tailwind import, League Spartan font, brand color tokens (`brand-primary`, `brand-secondary`, `brand-tertiary`, …)
- `postcss.config.mjs` — `@tailwindcss/postcss` plugin
- Logo asset: `src/assets/auth/auth-logo.png` (imported by the form header)

---

## Consolidated implementation

Everything below mirrors the **current** production behavior for login, flattened into one TSX-oriented block. Section labels show where each piece lives in the real repo.

```tsx
/* =============================================================================
   1) BOOTSTRAP
   Real files: index.html → src/main.tsx → src/app/App.tsx → AppProviders.tsx
   ============================================================================= */

// index.html mounts <div id="root"> and loads /src/main.tsx as a module.

import {
  StrictMode,
  useCallback,
  useState,
  type ChangeEvent,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useNavigate,
} from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'

// In the real app: import '@/styles/globals.css'
// Brand tokens + Tailwind live there.

/* =============================================================================
   2) ENV + SUPABASE CLIENT
   Real files: src/lib/env.ts , src/lib/supabase/client.ts
   ============================================================================= */

const env = {
  appName: import.meta.env.VITE_APP_NAME ?? 'Zap!-Points',
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL ?? '',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
} as const

// Singleton browser client. Empty env strings will fail at runtime.
const supabase = createClient(env.supabaseUrl, env.supabaseAnonKey)

/* =============================================================================
   3) AUTH SERVICE (login only)
   Real file: src/services/auth.service.ts  (signInWithEmailPassword)
   ============================================================================= */

function throwAuthError(error: { message: string }): never {
  throw new Error(error.message)
}

async function signInWithEmailPassword(
  email: string,
  password: string,
): Promise<void> {
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throwAuthError(error)
  // On success, Supabase persists the session (localStorage by default).
}

/* =============================================================================
   4) CONTENT STRINGS (login subset)
   Real file: src/features/auth/content/authContent.ts
   ============================================================================= */

const authContent = {
  emailLabel: 'Email Address',
  passwordLabel: 'Password',
  loginLabel: 'Login',
  loginButtonText: 'Login',
  loginButtonLoadingText: 'Logging in…',
  forgotPasswordLabel: 'Forgot Password?',
  dontHaveAccountLabel: "Don't have an account?",
  signUpLabel: 'Sign up',
  emailPlaceholder: 'Enter your email address',
  passwordPlaceholder: 'Enter your password',
  loginSuccess: 'Login successful.',
  loginError: 'Failed to sign in. Please try again.',
} as const

/* =============================================================================
   5) SHARED UI PRIMITIVES (only those used by login)
   Real files under: src/components/ui/
   ============================================================================= */

function FormLabel({
  htmlFor,
  children,
  className = '',
}: {
  htmlFor: string
  children: ReactNode
  className?: string
}) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  )
}

function TextInput({
  className = '',
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={className} {...props} />
}

// Real app: PasswordVisibleIcon / PasswordHiddenIcon under components/ui/icons/
function PasswordVisibleIcon() {
  return <span aria-hidden>👁</span>
}
function PasswordHiddenIcon() {
  return <span aria-hidden>🙈</span>
}

function PasswordInput({
  id,
  name,
  value,
  onChange,
  placeholder,
  autoComplete,
  required,
  disabled,
  className = '',
}: {
  id: string
  name?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  autoComplete?: string
  required?: boolean
  disabled?: boolean
  className?: string
}) {
  const [visible, setVisible] = useState(false)

  return (
    <div className="relative">
      <TextInput
        id={id}
        name={name}
        type={visible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        disabled={disabled}
        className={className}
      />
      <button
        type="button"
        disabled={disabled}
        onClick={() => setVisible((v) => !v)}
        className="absolute top-1/2 right-3 -translate-y-1/2 text-black/50"
        aria-label={visible ? 'Hide password' : 'Show password'}
      >
        {visible ? <PasswordHiddenIcon /> : <PasswordVisibleIcon />}
      </button>
    </div>
  )
}

function InlineErrorText({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <p className={className}>{children}</p>
}

function AuthFormFeedback({
  error,
  success,
}: {
  error?: string
  success?: string
}) {
  return (
    <>
      {error && (
        <InlineErrorText className="text-center text-sm text-red-600">
          {error}
        </InlineErrorText>
      )}
      {success && (
        <InlineErrorText className="text-center text-sm text-green-600">
          {success}
        </InlineErrorText>
      )}
    </>
  )
}

function PrimaryButton({
  className = '',
  children,
  size = 'md',
  fullWidth = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
  size?: 'md' | 'lg'
  fullWidth?: boolean
}) {
  const base =
    'rounded-lg bg-brand-secondary text-white font-bold tracking-tight hover:brightness-95 transition focus:outline-none focus:ring-4 focus:ring-brand-secondary/30 disabled:opacity-60'
  const sizes = { md: 'h-10 px-6 text-base', lg: 'h-12 px-8 text-2xl' }

  return (
    <button
      className={`${base} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

/* =============================================================================
   6) AUTH FEATURE UI
   Real files under: src/features/auth/components/
   ============================================================================= */

function AuthCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  // Default width/padding live on the card; pages only pass overrides when needed.
  return (
    <div
      className={`bg-brand-tertiary relative w-9/10 rounded-xl px-6 pb-2 shadow-xl sm:w-1/3 ${className}`}
    >
      {children}
    </div>
  )
}

function AuthBackLink({
  fallbackTo = '/',
  className = '',
  style,
  strokeWidth = 2,
}: {
  fallbackTo?: string
  className?: string
  style?: CSSProperties
  strokeWidth?: number
}) {
  const navigate = useNavigate()

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate(fallbackTo)
    }
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      className={`absolute z-10 text-[#DE8680] transition-colors hover:text-[#E89A94] ${className}`}
      style={style}
      aria-label="Go back"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-7 w-7"
      >
        <path
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-8-8 8-8"
        />
      </svg>
    </button>
  )
}

function AuthFormHeader({
  title,
  className = '',
}: {
  title: string
  className?: string
}) {
  // Real file imports: import kis_logo from '@/assets/auth/auth-logo.png'
  return (
    <div className={`flex flex-row ${className}`}>
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-brand-primary font-league-spartan text-[clamp(1.25rem,4vw,4.25rem)] leading-none font-extrabold">
          {title}
        </h1>
      </div>
      <div className="flex items-start justify-end">
        {/* <img src={kis_logo} alt="KIS Points logo" ... /> */}
        <span className="text-sm text-black/40">[auth-logo.png]</span>
      </div>
    </div>
  )
}

function AuthFormFooter({
  promptText,
  linkText,
  linkHref,
}: {
  promptText?: string
  linkText: string
  linkHref: string
}) {
  return (
    <div className="mt-6 text-center text-sm text-[18px]">
      {promptText ? (
        <span className="font-spartan text-gray-600">{promptText} </span>
      ) : null}
      <Link
        to={linkHref}
        className="text-brand-secondary font-spartan text-[18px] font-semibold hover:underline"
      >
        {linkText}
      </Link>
    </div>
  )
}

function AuthPrimaryButton({
  children,
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
}) {
  return (
    <PrimaryButton
      size="lg"
      fullWidth
      className={`font-spartan ${className}`.trim()}
      {...props}
    >
      {children}
    </PrimaryButton>
  )
}

/* =============================================================================
   7) HOOKS — feedback + login orchestration
   Real files: useAuthFeedback.ts , useLogin.ts
   ============================================================================= */

function useAuthFeedback() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const clearFeedback = useCallback(() => {
    setError('')
    setSuccess('')
  }, [])

  // Shared async wrapper: clear → load → try/catch → always stop loading
  const runAction = useCallback(
    async (action: () => Promise<void>, fallbackError: string) => {
      clearFeedback()
      setIsLoading(true)
      try {
        await action()
      } catch (err) {
        console.error(err)
        setError(err instanceof Error ? err.message : fallbackError)
      } finally {
        setIsLoading(false)
      }
    },
    [clearFeedback],
  )

  return {
    isLoading,
    error,
    success,
    setError,
    setSuccess,
    clearFeedback,
    runAction,
  }
}

function useLogin() {
  const navigate = useNavigate()
  const { isLoading, error, success, setSuccess, clearFeedback, runAction } =
    useAuthFeedback()

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const handleLogin = useCallback(
    async (data: { email: string; password: string }) => {
      await runAction(async () => {
        await signInWithEmailPassword(data.email, data.password)
        setSuccess(authContent.loginSuccess)
        navigate('/dashboard')
      }, authContent.loginError)
    },
    [navigate, runAction, setSuccess],
  )

  return {
    isLoading,
    error,
    success,
    clearFeedback,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    handleLogin,
  }
}

/* =============================================================================
   8) LOGIN FORM (presentational — props in, events out)
   Real file: src/features/auth/components/forms/LoginForm.tsx
   ============================================================================= */

function LoginForm({
  email,
  password,
  isLoading,
  error,
  success,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: {
  email: string
  password: string
  isLoading: boolean
  error?: string
  success?: string
  onEmailChange: (value: string) => void
  onPasswordChange: (value: string) => void
  onSubmit: (data: { email: string; password: string }) => void | Promise<void>
}) {
  return (
    <>
      <AuthFormHeader title={authContent.loginLabel} />

      <form
        className="grid gap-2"
        onSubmit={(e) => {
          e.preventDefault() // stop full page reload
          void onSubmit({ email, password })
        }}
      >
        <div className="flex w-full flex-col gap-6 overflow-hidden">
          <div className="grid gap-2">
            <FormLabel
              htmlFor="email"
              className="font-league-spartan text-base text-[24px] font-semibold text-black"
            >
              {authContent.emailLabel}
            </FormLabel>
            <TextInput
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={isLoading}
              className="focus:ring-brand-primary/30 h-12 rounded-[12px] border border-black/20 bg-white px-4 font-sans text-[16px] text-black outline-none focus:border-black/40 focus:ring-2 disabled:opacity-60"
              placeholder={authContent.emailPlaceholder}
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <FormLabel
              htmlFor="password"
              className="font-spartan text-base text-[24px] font-semibold text-black"
            >
              {authContent.passwordLabel}
            </FormLabel>
            <PasswordInput
              id="password"
              name="password"
              autoComplete="current-password"
              required
              disabled={isLoading}
              className="focus:ring-brand-primary/30 h-12 w-full rounded-[12px] border border-black/20 bg-white px-4 pr-12 font-sans text-[16px] text-black outline-none focus:border-black/40 focus:ring-2 disabled:opacity-60"
              placeholder={authContent.passwordPlaceholder}
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
            />
          </div>

          <Link
            to="/forgot-password"
            className="font-league-spartan text-lg font-bold text-gray-600 hover:underline"
          >
            {authContent.forgotPasswordLabel}
          </Link>

          <div className="flex justify-end gap-3">
            <AuthPrimaryButton type="submit" disabled={isLoading}>
              {isLoading
                ? authContent.loginButtonLoadingText
                : authContent.loginButtonText}
            </AuthPrimaryButton>
          </div>

          <AuthFormFeedback error={error} success={success} />
        </div>
      </form>

      <AuthFormFooter
        promptText={authContent.dontHaveAccountLabel}
        linkText={authContent.signUpLabel}
        linkHref="/signup"
      />
    </>
  )
}

/* =============================================================================
   9) PAGE + LAYOUT + ROUTER + DASHBOARD
   Real files: LoginPage, AuthLayout, router, DashboardPage
   ============================================================================= */

function LoginPage() {
  const {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    isLoading,
    error,
    success,
    handleLogin,
  } = useLogin()

  // Tier 2 page: owns hooks, passes props down to Tier 3 form.
  // Layout owns back link + centering; AuthCard owns default width.
  return (
    <AuthCard>
      <LoginForm
        email={loginEmail}
        password={loginPassword}
        isLoading={isLoading}
        error={error}
        success={success}
        onEmailChange={setLoginEmail}
        onPasswordChange={setLoginPassword}
        onSubmit={handleLogin}
      />
    </AuthCard>
  )
}

function AuthLayout() {
  return (
    <div className="bg-brand-primary flex min-h-screen flex-col">
      <header className="bg-brand-primary relative flex h-[clamp(5rem,10vw,8.75rem)] min-w-[200px] overflow-visible">
        <AuthBackLink className="top-6 left-6" />
      </header>
      <main className="flex flex-row items-start justify-center">
        <Outlet /> {/* LoginPage renders here when path is /login */}
      </main>
    </div>
  )
}

function DashboardPage() {
  // Post-login destination. Currently has NO session guard.
  return (
    <main className="bg-brand-primary flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-lg rounded-2xl bg-white px-8 py-10 text-center shadow-lg">
        <h1 className="text-brand-primary font-spartan text-3xl font-extrabold">
          Welcome to {env.appName}
        </h1>
        <p className="font-spartan mt-4 text-black/70">
          Your dashboard is coming in Phase 3. You are signed in.
        </p>
        <Link
          to="/"
          className="text-brand-secondary font-spartan mt-6 inline-block font-semibold hover:underline"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}

// Real router also has /signup, /forgot-password, /reset-password — omitted here.
const router = createBrowserRouter([
  {
    path: '/login',
    element: <AuthLayout />,
    children: [{ index: true, element: <LoginPage /> }],
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
])

function AppProviders() {
  return <RouterProvider router={router} />
}

function App() {
  return <AppProviders />
}

// Real entry: createRoot(document.getElementById('root')!).render(...)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

## Submission walkthrough

What happens when the user clicks **Login**:

1. **Controlled inputs** — `email` / `password` live in `useLogin` state. The form only displays them and calls `onEmailChange` / `onPasswordChange`.
2. **`preventDefault`** — the form's `onSubmit` stops the browser from doing a full-page POST reload.
3. **`handleLogin`** — receives `{ email, password }` and calls `runAction`.
4. **`runAction`** — clears previous messages, sets `isLoading = true`, runs the async work, catches errors into `error`, always sets `isLoading = false` in `finally`.
5. **`signInWithEmailPassword`** — thin Layer 3 wrapper around `supabase.auth.signInWithPassword`.
6. **Supabase session** — on success, the client stores the session (JWT + refresh token) in browser storage so later requests can stay authenticated.
7. **Navigation** — `navigate('/dashboard')` swaps the route. The success string is set, but you usually never see it because navigation happens immediately.

Error path: Supabase returns `{ error }` → service throws `Error(message)` → `runAction` catch → `AuthFormFeedback` shows red text on the form. The fallback `authContent.loginError` is only used for non-`Error` throws.

---

## Real file map (login only)

| Concern         | Production path                                    |
| --------------- | -------------------------------------------------- |
| HTML shell      | `index.html`                                       |
| React boot      | `src/main.tsx`                                     |
| App shell       | `src/app/App.tsx`                                  |
| Router provider | `src/app/providers/AppProviders.tsx`               |
| Routes          | `src/app/router.tsx`                               |
| Auth chrome     | `src/layouts/AuthLayout.tsx`                       |
| Page wiring     | `src/features/auth/LoginPage.tsx`                  |
| Form UI         | `src/features/auth/components/forms/LoginForm.tsx` |
| Form feedback   | `src/features/auth/components/AuthFormFeedback.tsx`|
| Copy            | `src/features/auth/content/authContent.ts`         |
| Login hook      | `src/features/auth/hooks/useLogin.ts`              |
| Feedback hook   | `src/features/auth/hooks/useAuthFeedback.ts`       |
| Auth API        | `src/services/auth.service.ts`                     |
| Supabase client | `src/lib/supabase/client.ts`                       |
| Env             | `src/lib/env.ts`                                   |
| Dashboard       | `src/features/dashboard/DashboardPage.tsx`         |
| Styles          | `src/styles/globals.css`                           |
| Logo            | `src/assets/auth/auth-logo.png`                    |

---

## Current limitations

- **`/dashboard` is not protected** — anyone can open it without signing in; there is no session guard / `ProtectedRoute` yet.
- **Success message is usually invisible** — `setSuccess` runs, then `navigate('/dashboard')` unmounts the login form.
- **Env values are not validated** — empty `VITE_SUPABASE_*` become `''` and client creation/auth calls fail at runtime.
- **SPA hosting** — production servers must fall back unknown paths (like `/login`) to `index.html` so React Router can handle them.
- **Validation is HTML-only** — `required` + `type="email"`; no password policy or trimming in the hook.
- **Password icons** in this doc are simplified placeholders; production uses `PasswordVisibleIcon` / `PasswordHiddenIcon`.

---

## Related flows

Same layers, different pages/hooks/forms:

| Route | Page | Hook |
|-------|------|------|
| `/signup` | `SignupPage` | `useSignup` |
| `/forgot-password` | `ForgotPasswordPage` | `useForgotPassword` |
| `/reset-password` | `ResetPasswordPage` | `useResetPassword` |

All sit under `AuthLayout`, use `AuthCard`, and call into `auth.service.ts`. See [phase2/02-phase2-learnings.md](in-progress/phase2/02-phase2-learnings.md) for lessons from building these flows.

---

## Why production splits this

The flattened file is easier to learn. Production keeps layers separate so:

- **Tier 3 forms** stay presentational (no Supabase imports)
- **Layer 1 hooks** own async workflow
- **Layer 3 services** own external API details
- Features stay swappable without rewriting the whole app

Read this guide to understand the path. Change the real files under `src/` when building features.
