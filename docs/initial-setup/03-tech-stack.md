# Tech Stack

## Core (Phase 1)

| Technology | Role |
|------------|------|
| **Vite** | Build tool and dev server |
| **React 19** | UI library |
| **TypeScript** | Strict typing |
| **Tailwind CSS v4** | Utility-first styling |
| **Zustand** | Global client state (Layer 2) |
| **Framer Motion** | Animation library |
| **React Router** | Client-side routing |

## State Management

- **Global state:** Zustand with granular selectors.
- **Local state:** React `useState` / `useRef` for isolated component UI.
- **React Context is not used** for global application state.

## Development Tooling

| Tool | Purpose |
|------|---------|
| ESLint | Linting (TypeScript + React Hooks + React Refresh) |
| Prettier | Code formatting with Tailwind class sorting |
| Path aliases | `@/` maps to `src/` |

## Planned (Out of Phase 1 Scope)

| Service | When |
|---------|------|
| **Supabase** | Phase 2+ — authentication and persistence |
| **Vercel** | After foundation is stable — deployment |

## Package Manager

npm
