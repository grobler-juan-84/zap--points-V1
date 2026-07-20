# Folder Structure

`src/` layout after Phase 1 foundation and Phase 2 auth. Folders are populated only when they have a genuine responsibility.

```text
src/
├── app/
│   ├── App.tsx                 # Root composition
│   ├── router.tsx              # React Router configuration
│   └── providers/
│       └── AppProviders.tsx    # Router and future global providers
│
├── layouts/
│   ├── MarketingLayout.tsx     # Tier 1 — landing chrome
│   └── AuthLayout.tsx          # Tier 1 — auth chrome (back + centered outlet)
│
├── features/
│   ├── landing/
│   │   └── LandingPage.tsx
│   ├── auth/
│   │   ├── LoginPage.tsx
│   │   ├── SignupPage.tsx
│   │   ├── ForgotPasswordPage.tsx
│   │   ├── ResetPasswordPage.tsx
│   │   ├── components/         # AuthCard, AuthBackLink, forms, …
│   │   ├── content/
│   │   │   └── authContent.ts
│   │   └── hooks/              # useLogin, useSignup, useAuthFeedback, …
│   └── dashboard/
│       └── DashboardPage.tsx   # Placeholder post-login screen
│
├── components/
│   └── ui/                     # Tier 3 — Button, TextInput, PasswordInput, …
│
├── hooks/                      # Layer 1 — cross-feature hooks (empty until needed)
├── stores/
│   └── useAppStore.ts          # Layer 2 — minimal verification store
├── services/
│   └── auth.service.ts         # Layer 3 — Supabase Auth API
│
├── lib/
│   ├── env.ts                  # Typed environment variable access
│   └── supabase/
│       └── client.ts           # Supabase browser client
│
├── types/
│   └── index.ts                # Shared application types
│
├── assets/                     # Static assets (images, icons)
├── styles/
│   └── globals.css             # Tailwind entry + theme tokens
│
├── main.tsx                    # Application entry point
└── vite-env.d.ts               # Vite and env type declarations
```

## Import Aliases

Configured in `tsconfig.app.json` and `vite.config.ts`:

| Alias | Path |
|-------|------|
| `@/*` | `src/*` |
| `@/components/*` | `src/components/*` |
| `@/features/*` | `src/features/*` |
| `@/layouts/*` | `src/layouts/*` |
| `@/stores/*` | `src/stores/*` |
| `@/hooks/*` | `src/hooks/*` |
| `@/services/*` | `src/services/*` |
| `@/lib/*` | `src/lib/*` |
| `@/types/*` | `src/types/*` |
| `@/assets/*` | `src/assets/*` |
| `@/styles/*` | `src/styles/*` |
| `@/app/*` | `src/app/*` |

## Conventions

- Feature-scoped hooks/stores/components go inside `src/features/<feature>/` when introduced.
- Cross-feature shared code goes in top-level `hooks/`, `stores/`, or `components/ui/`.
- Empty folders are not created with placeholder files.
- Auth pages stay thin: hook wiring + `AuthCard`; shared chrome lives in `AuthLayout`.
