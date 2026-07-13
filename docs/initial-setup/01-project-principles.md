# Project Principles

Zap!-Points prioritizes clarity over cleverness. These principles guide every phase of development.

## Core Values

1. **Simplicity** — Prefer the easiest approach that solves the current problem.
2. **Maintainability** — Code should be easy to read, navigate, debug, and teach.
3. **Performance when justified** — Optimize only when there is a measured or obvious need.
4. **Scalability when it provides clear value** — Do not build for hypothetical future requirements.

## Development Guardrails

- Layout components focus on composition, not feature logic.
- UI actors remain presentation-focused (props in, callbacks out).
- Zustand stores contain synchronous state only — no external API calls.
- Pure business logic uses ordinary TypeScript functions, not hooks or stores.
- Feature folders are introduced only when a feature needs them.
- Abstractions are not created for hypothetical requirements.

## Decision Rule

A discussion is not an official project decision until the relevant documentation has been updated (see [02-decision-log.md](../in-progress/02-decision-log.md)).
