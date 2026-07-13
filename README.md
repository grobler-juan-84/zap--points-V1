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

## Documentation

Start with [docs/00-documentation-index.md](docs/00-documentation-index.md) for the full documentation map.

## Architecture

Zap!-Points uses a **Three-Tier UI / Three-Layer Data** architecture adapted from KIS-Points. See [docs/initial-setup/02-architecture.md](docs/initial-setup/02-architecture.md) for details.

## Phase 1 Status

Phase 1 establishes the project foundation — tooling, folder structure, application layout, and documentation. Authentication, database, and feature development begin in later phases.
