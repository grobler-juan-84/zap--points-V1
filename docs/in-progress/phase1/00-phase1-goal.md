# Phase 1 — Project Foundation

## Objective

Create a clean, production-ready foundation for the Zap!-Points application.

The purpose of this phase is to establish:

* the core technology stack,
* the initial folder structure,
* architectural boundaries,
* development tooling,
* documentation,
* and a clean Git starting point.

Phase 1 will not include authentication, database integration, API development, or application features.

The phase should end with a stable foundation that is ready for the first clean Git commit.

---

## Core Technology Stack

The initial application will use:

* Vite
* React
* TypeScript
* Tailwind CSS
* Zustand
* Framer Motion

### Styling Decision

Tailwind CSS will remain the primary styling system.

Reusable component libraries may be considered later when there is a clear need.

---

## Future Platform Services

The following services are planned but are outside the implementation scope of Phase 1:

* Supabase
* Vercel

Supabase will be introduced when authentication and persistence are implemented.

Vercel deployment may be introduced after the initial project foundation is stable.

---

## Architecture Direction

Zap!-Points will use an adapted version of the architecture that worked successfully in KIS-Points.

The architecture will be known as:

> Three-Tier UI / Three-Layer Data Architecture

During Phase 1, the architectural boundaries will be documented and represented in the folder structure.

The complete data flow will not yet be implemented because the application will not have a backend or database during this phase.

---

## Three-Tier UI Architecture

### Tier 1 — Application Layout (Shell for reference)

Responsible for:

* application scaffolding,
* global layout,
* persistent navigation,
* page positioning,
* and overlay mounting areas.

Tier 1 should focus on composition rather than feature logic.

Example:

```text
Application Shell
│
├── Persistent Chrome
├── Page Content
└── Overlays and Modals
```

---

### Tier 2 — Feature Views and Containers

Responsible for:

* assembling feature-specific UI,
* connecting UI actors,
* managing feature-level presentation state,
* and delegating business behaviour.

Tier 2 components should not directly communicate with future database or API services.

---

### Tier 3 — UI Actors

Responsible for:

* buttons,
* cards,
* forms,
* modals,
* menus,
* display elements,
* and reusable interactive components.

Tier 3 components should remain focused on rendering and user interaction.

They should receive data and callbacks through props where practical.

---

## Three-Layer Data Architecture

The data architecture will be introduced progressively as the application grows.

### Layer 1 — Hooks and Orchestration

Responsible for:

* coordinating workflows,
* handling asynchronous operations,
* connecting UI behaviour to stores and services,
* and managing feature-level loading and error states.

Hooks should be used when logic depends on React, lifecycle behaviour, Zustand, or UI orchestration.

---

### Layer 2 — Zustand State

Responsible for:

* application state,
* shared UI state,
* synchronous state actions,
* and lightweight state transformations.

Stores may contain meaningful synchronous state actions.

Stores should not directly communicate with Supabase, databases, or external APIs.

During Phase 1, only a minimal example store should be created if it helps confirm that Zustand is configured correctly.

---

### Layer 3 — Services and External Data Access

Responsible for:

* Supabase communication,
* API requests,
* authentication services,
* database operations,
* and other external integrations.

This layer will be represented in the initial folder structure but will not be implemented during Phase 1.

---

## Pure Domain Utilities

Business rules that do not depend on React, Zustand, or external services should use ordinary TypeScript functions.

Examples include:

* validation,
* calculations,
* data transformations,
* formatting,
* and reusable domain rules.

These functions should not be forced into hooks or stores.

---

## Proposed Initial Folder Structure

```text
src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   └── providers/
│
├── layouts/
│
├── features/
│
├── components/
│   └── ui/
│
├── hooks/
│
├── stores/
│
├── services/
│
├── lib/
│
├── types/
│
├── assets/
│
└── styles/
```

This structure is an initial guide rather than a permanently fixed design.

Folders should only be populated when they have a genuine responsibility.

Empty placeholder files should be avoided unless they provide clear architectural value.

---

## Development Principles

The project will prioritize:

1. Simplicity
2. Maintainability
3. Performance when justified
4. Scalability when it provides clear value

Best practices should be followed when they improve the application.

They should not be used to justify unnecessary abstractions or architectural complexity.

When multiple approaches are valid, preference should generally be given to the option that is:

* easier to understand,
* easier to navigate,
* easier to debug,
* easier to teach,
* and easier to maintain.

---

## Phase 1 Architecture Guardrails

During Phase 1:

* layout components should focus on composition,
* UI actors should remain presentation-focused,
* Zustand stores should not contain external data access,
* pure logic should use normal TypeScript functions,
* feature folders should only be introduced when needed,
* abstractions should not be created for hypothetical future requirements,
* and the architecture should remain understandable to a single developer.

The goal is to establish clear boundaries without overengineering an application that does not yet contain features.

---

## Documentation Deliverables

Phase 1 should initialize the project documentation needed for clean future development.

/docs folde currently contains empty md files and a few folders. 
md files can be updated during this phase, however, it should be concise. 

Recommended md files to update (but not limited to) includes:

```text
README.md
├──docs/
|    ├──initial-setup/
|    |     ├── 01-project-principles.md
|    |     ├── 02-architecture.md
|    |     ├── 03-tech-stack.md
|    |     ├── 04-folder-structure.md
|    |     └── 05-naming-conventions.md
|    ├──in-progress
|    |      └── 01-implemented-in-phase1.md   
|    ├── 01-project-status.md
|    ├── 02-decision-log.md
|    └── 03-roadmap.md
└──00-documentation-index.md

```

These documents are living documents and should evolve as the application develops.

A discussion is not considered an official project decision until the relevant documentation has been updated.

---

## Development Tooling

Phase 1 should configure:

* TypeScript strict mode
* ESLint
* Prettier, if selected
* import aliases
* consistent naming conventions
* basic environment variable handling
* Git ignore rules

Automated testing does not need to be fully established unless testing setup forms part of the intended development workflow from the beginning.

---

## Deliverables

By the end of Phase 1, the project should include:

* Vite application created
* React configured
* TypeScript configured
* Tailwind CSS configured
* Zustand installed and verified
* Framer Motion installed and verified
* initial folder structure created
* Three-Tier UI architecture documented
* Three-Layer Data architecture documented
* basic application shell created
* placeholder landing route or foundation screen created
* ESLint configured
* formatting approach decided
* import aliases configured
* documentation initialized
* Git repository initialized
* first clean commit completed

---

## Out of Scope

The following items are intentionally excluded from Phase 1:

* authentication,
* Supabase configuration,
* database schema,
* Row Level Security,
* API development,
* user profiles,
* protected routes,
* production business logic,
* feature-specific Zustand stores,
* complex reusable component systems,
* and premature optimization.

---

## Completion Criteria

Phase 1 is complete when:

* the application runs locally without errors,
* the selected libraries are correctly configured,
* the folder structure reflects the intended architecture,
* architectural responsibilities are documented,
* no unnecessary backend or feature logic has been introduced,
* linting and type checking pass,
* the repository contains clear supporting documentation,
* and the project is ready for its first clean Git commit.

The result should be a small, understandable foundation rather than an empty version of the final application.
