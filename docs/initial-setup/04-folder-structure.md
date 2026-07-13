# Folder Structure

Initial `src/` layout established in Phase 1. Folders are populated only when they have a genuine responsibility.

```text
src/
├── app/
│   ├── App.tsx                 # Root composition
│   ├── router.tsx              # React Router configuration
│   └── providers/
│       └── AppProviders.tsx    # Router and future global providers
│
├── layouts/
│   └── MarketingLayout.tsx    # Tier 1 — header, outlet, overlay mount
│
├── features/
│   └── landing/
│       └── LandingPage.tsx     # Tier 2 — foundation landing screen
│
├── components/
│   └── ui/
│       └── Button.tsx          # Tier 3 — shared UI primitive
│
├── hooks/                      # Layer 1 — cross-feature hooks (empty until needed)
├── stores/
│   └── useAppStore.ts          # Layer 2 — minimal verification store
├── services/                   # Layer 3 — external data access (future)
│
├── lib/
│   └── env.ts                  # Typed environment variable access
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
