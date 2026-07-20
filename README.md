# Zap!-Points

A classroom points application built with Vite, React, and TypeScript.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run preview` | Preview production build |

## Environment Variables

Copy `.env.example` to `.env.local` and adjust values as needed. Only variables prefixed with `VITE_` are exposed to client code.

For authentication, set:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Documentation

Start with [docs/00-documentation-index.md](docs/00-documentation-index.md) for the full documentation map.

## Architecture

Zap!-Points uses a **Three-Tier UI / Three-Layer Data** architecture adapted from KIS-Points. See [docs/initial-setup/02-architecture.md](docs/initial-setup/02-architecture.md) for details.

## Project Status

- **Phase 1** — Project foundation (complete): tooling, folder structure, landing layout, docs.
- **Phase 2** — Authentication and persistence: **auth flows complete** (login, signup, password recovery via Supabase); database schema, RLS, and protected routes still pending.

See [docs/in-progress/01-project-status.md](docs/in-progress/01-project-status.md) and [docs/in-progress/03-roadmap.md](docs/in-progress/03-roadmap.md).
