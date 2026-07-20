# Tech Stack

## Core

| Technology | Role |
|------------|------|
| **Vite** | Build tool and dev server |
| **React 19** | UI library |
| **TypeScript** | Strict typing |
| **Tailwind CSS v4** | Utility-first styling |
| **Zustand** | Global client state (Layer 2) |
| **Framer Motion** | Animation library |
| **React Router** | Client-side routing |
| **Supabase JS** | Auth (Phase 2) and future persistence |

## State Management

- **Global state:** Zustand with granular selectors.
- **Local state:** React `useState` / `useRef` for isolated component UI.
- **React Context is not used** for global application state.
- **Auth session:** Managed by the Supabase client in browser storage after sign-in (route guards still pending).

## Development Tooling

| Tool | Purpose |
|------|---------|
| ESLint | Linting (TypeScript + React Hooks + React Refresh) |
| Prettier | Code formatting with Tailwind class sorting |
| Path aliases | `@/` maps to `src/` |

## Backend / Platform

| Service | Status |
|---------|--------|
| **Supabase Auth** | In use — login, signup, password recovery |
| **Supabase Database / RLS** | Planned — Phase 2 persistence |
| **Vercel** | Planned — Phase 4 deployment |

## Package Manager

npm
