# Contributing Guide
Teclab Library Information System

## Purpose

This repository represents the development prototype of the **Teclab Library Information System**, a project focused on translating organizational analysis into software architecture and user-centered solutions.

Contributions are welcome when they align with the project’s engineering principles:

- clarity over complexity
- system thinking over feature accumulation
- maintainable architecture
- documented decision-making

This document defines how collaboration should occur.

---

## Contribution Philosophy

This project follows a systems engineering mindset:

understand → analyze → design → implement → iterate

Contributors are expected to preserve this approach. Changes should solve validated problems, not introduce unnecessary features.

---

## How to Contribute

### 1. Fork the Repository

Create a personal fork and work from your own branch.

```bash
git checkout -b feature/short-description
```

Branch naming conventions:

- `feature/...` — new functionality
- `fix/...` — bug fixes
- `refactor/...` — internal improvements
- `docs/...` — documentation updates

---

### 2. Development Standards

All contributions should:

- Follow TypeScript best practices
- Respect component-based architecture
- Maintain separation of concerns
- Avoid duplicated logic
- Preserve accessibility and usability

Frontend stack:

- React
- Vite
- TypeScript
- Tailwind CSS

---

### 3. Code Style

- Prefer readability over clever implementations.
- Components must be reusable and scoped.
- Avoid large monolithic components.
- Keep styling consistent with existing design tokens.

---

### 4. Pull Request Process

Each Pull Request must include:

- Clear description of the change
- Motivation or problem addressed
- Screenshots (if UI changes)
- Testing notes

PRs may be reviewed for:

- architectural coherence
- usability impact
- maintainability

---

## Communication

Be respectful, precise, and constructive in discussions.  
Engineering dialogue should focus on improving solutions rather than defending opinions.

---

## License

By contributing, you agree that your contributions will be licensed under the same license as this repository.