# Execution OS

> Enterprise-oriented Project Management SaaS built with a Micro Frontend architecture.

Execution OS is a project execution platform designed to connect **planning, execution, and productivity insights** into a single system.

The project is built as a **Nx monorepo** with independently owned React Micro Frontends, shared contracts, and a host application responsible for composition and navigation.

---

## Overview

Execution OS models work as:

```text
Goal
  └── Milestone
        └── Task
              └── Working Unit
                    └── Focus Session
```

### Core concepts

* **Goal** — the outcome a user wants to achieve.
* **Milestone** — a meaningful checkpoint toward a goal.
* **Task** — a concrete piece of work within a milestone.
* **Working Unit** — a small executable unit of work, roughly equivalent to one focused work cycle.
* **Focus Session** — execution telemetry representing focused work performed on a Working Unit.

Progress is based on completed work units rather than raw time spent.

Focus Sessions provide execution evidence and productivity telemetry without becoming the primary definition of progress.

---

## Architecture

Execution OS uses a Micro Frontend architecture based on **Module Federation**.

```text
                         Shell
                           │
                    TanStack Router
                           │
                    Module Host
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
      Planning         Execution         Insights
       Provider         Provider          Provider
          │                │                │
          ▼                ▼                ▼
       Planning         Execution         Analytics
        Domain           Domain            Domain
```

### Module ownership

#### Planning

Owns the planning hierarchy:

```text
Goal
 └── Milestone
      └── Task
           └── Working Unit
```

Planning is responsible for:

* Goals
* Milestones
* Tasks
* Working Units
* Planning APIs
* Planning state
* Planning-specific mock APIs
* Planning navigation

#### Execution

Owns execution behavior:

```text
Working Unit
     │
     └── Focus Session
```

Execution is responsible for:

* Starting focus sessions
* Pausing/resuming sessions
* Completing sessions
* Recording execution evidence
* Working Unit completion

#### Insights

Owns analytical projections such as:

* Productivity metrics
* Progress analytics
* Execution trends
* Dashboard visualizations

Insights consumes domain data through defined contracts rather than owning the underlying work entities.

---

## Micro Frontend Principles

The project follows several architectural rules.

### 1. Shell does not own business domains

Shell is responsible for:

* Application composition
* Global navigation
* MFE lifecycle
* Module Federation
* Global routing boundaries

Shell must not contain Planning, Execution, or Insights business logic.

### 2. Each MFE owns its domain

For example:

```text
Planning
├── features
├── services
├── store
├── mocks
└── domain-specific UI
```

Planning mock handlers and API behavior therefore remain inside Planning.

### 3. MFEs do not import each other's source code

Invalid:

```text
Planning → Execution source
Execution → Planning source
```

Instead, cross-module communication uses shared contracts or explicit application-level interfaces.

### 4. Shared packages contain contracts and infrastructure

```text
packages/
├── contracts
├── event-bus
├── design-system
└── api-client
```

These packages provide stable boundaries without coupling one MFE to another MFE's implementation.

---

## Repository Structure

```text
execution-os/
├── apps/
│   ├── shell/
│   ├── planning/
│   ├── execution/
│   └── insights/
│
├── packages/
│   ├── contracts/
│   ├── event-bus/
│   ├── design-system/
│   └── api-client/
│
├── package.json
├── pnpm-workspace.yaml
├── nx.json
└── README.md
```

### Shell

The host application responsible for composing Micro Frontends.

```text
apps/shell/
```

### Planning

Planning bounded context.

```text
apps/planning/
```

### Execution

Execution bounded context.

```text
apps/execution/
```

### Insights

Analytics and productivity insights bounded context.

```text
apps/insights/
```

### Contracts

Shared application and domain contracts.

```text
packages/contracts/
```

### Event Bus

Cross-module event contracts and event infrastructure.

```text
packages/event-bus/
```

### Design System

Shared accessible UI components and visual primitives.

```text
packages/design-system/
```

### API Client

Shared API infrastructure based on Redux Toolkit Query.

```text
packages/api-client/
```

---

## Tech Stack

| Area                     | Technology              |
| ------------------------ | ----------------------- |
| Monorepo                 | Nx                      |
| Package Manager          | pnpm                    |
| Runtime                  | Node.js                 |
| Framework                | React 19                |
| Language                 | TypeScript              |
| Bundler                  | Rspack                  |
| Micro Frontend           | Module Federation       |
| Router                   | TanStack Router         |
| UI Primitives            | Radix UI                |
| Icons                    | Phosphor Icons          |
| Styling                  | CSS Modules + Sass      |
| State Management         | Redux Toolkit           |
| API / Cache              | RTK Query               |
| Forms                    | React Hook Form         |
| Validation               | Valibot                 |
| Charts                   | Apache ECharts          |
| Drag & Drop              | Pragmatic Drag and Drop |
| API Mocking              | MSW                     |
| E2E Testing              | Playwright              |
| Component Testing / Docs | Storybook               |
| Formatting / Linting     | Biome                   |

---

## Design System

Execution OS uses a shared design system rather than allowing each Micro Frontend to implement its own visual primitives.

The design system is based on:

* Radix UI primitives
* CSS Modules
* Sass
* Phosphor Icons
* Light and dark themes
* Glass / Frost / Solid surface variants

Application background, theme, and component surface are treated as separate concerns.

```text
Theme
  +
Background
  +
Surface
```

Components should remain readable over arbitrary application backgrounds.

---

## State Management

Redux Toolkit is used for application state.

RTK Query provides the API data layer:

```text
Feature
   │
   ▼
RTK Query API
   │
   ▼
Base API
   │
   ▼
Backend API
```

Feature APIs are injected into the shared `baseApi`.

Example:

```ts
export const goalsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGoal: builder.query({
      query: (goalId) => `/goals/${goalId}`,
    }),
  }),
});
```

This keeps API caching, invalidation, and request state consistent across the application.

---

## API Mocking

Each Micro Frontend owns its own mock API behavior.

For example:

```text
apps/planning/src/
├── services/
│   └── apis/
│       └── goals/
└── mocks/
    ├── browser.ts
    ├── handlers.ts
    └── data/
        └── planning-data.ts
```

The Shell must not contain Planning-specific mock handlers.

This preserves bounded-context ownership and keeps each MFE independently extractable.

---

## Getting Started

### Prerequisites

* Node.js 20+
* pnpm 10+

Verify:

```bash
node --version
pnpm --version
```

### Install dependencies

```bash
pnpm install
```

### Run the Shell

```bash
pnpm nx serve shell
```

Shell runs on:

```text
http://localhost:8100
```

### Run Planning

In another terminal:

```bash
pnpm nx serve planning
```

Planning runs on:

```text
http://localhost:8101
```

When running through the Shell, Planning is loaded through Module Federation.

---

## Useful Nx Commands

List projects:

```bash
pnpm nx show projects
```

Build a project:

```bash
pnpm nx build planning
```

Run affected projects:

```bash
pnpm nx affected -t build
```

Run tests:

```bash
pnpm nx affected -t test
```

Inspect the project graph:

```bash
pnpm nx graph
```

---

## Development Workflow

A typical development workflow:

```text
1. Define domain contract
        ↓
2. Implement feature inside owning MFE
        ↓
3. Add API endpoint / RTK Query endpoint
        ↓
4. Add MSW handler
        ↓
5. Implement UI
        ↓
6. Add Storybook coverage
        ↓
7. Add tests
        ↓
8. Validate affected projects
        ↓
9. Build through Nx
```

---

## Testing

### End-to-End

Playwright is used for end-to-end testing.

```bash
pnpm nx e2e shell-e2e
```

### API Mocking

MSW is used to provide deterministic API behavior during development and testing.

Mock handlers should remain inside the MFE that owns the corresponding API/domain.

### Component Documentation

Storybook is used to document and develop shared UI components.

```bash
pnpm nx storybook design-system
```

---

## Code Quality

Biome is used for formatting and linting.

The project intentionally uses a single tool instead of maintaining separate ESLint and Prettier configurations.

Run Biome:

```bash
pnpm biome check .
```

Apply safe fixes:

```bash
pnpm biome check --write .
```

---

## Build

Build an individual application:

```bash
pnpm nx build shell
pnpm nx build planning
```

Build affected projects:

```bash
pnpm nx affected -t build
```

Nx dependency analysis allows only affected applications and libraries to be rebuilt when possible.

---

## Module Federation

The Shell consumes Micro Frontends at runtime.

```text
Shell :8100
   │
   ├── Planning :8101
   ├── Execution :8102
   └── Insights :8103
```

Each provider exposes its application through a federation entry point.

Example:

```text
Planning
└── remoteEntry.js
```

The Shell resolves remote modules through the Module Federation runtime rather than importing MFE source code directly.

---

## Architectural Goals

Execution OS is designed around the following goals:

### Independent ownership

Each bounded context should be understandable and developable independently.

### Explicit contracts

Cross-module communication should happen through explicit contracts rather than implementation imports.

### Runtime composition

The Shell composes independently owned modules through Module Federation.

### Extractable modules

MFE boundaries should make it possible to extract a module into a separate repository later without redesigning its domain architecture.

### Scalable frontend architecture

The architecture should support additional bounded contexts without turning the Shell into a business-logic monolith.

---

## Roadmap

### Foundation

* [x] Nx monorepo
* [x] Rspack
* [x] Module Federation
* [x] Shell
* [x] Planning MFE
* [x] Shared contracts
* [x] Shared design system
* [x] Shared API client
* [x] Redux Toolkit
* [x] RTK Query
* [x] Storybook
* [x] Biome

### Planning

* [ ] Goals
* [ ] Milestones
* [ ] Tasks
* [ ] Working Units
* [ ] Planning actions
* [ ] Scheduling

### Execution

* [ ] Focus sessions
* [ ] Pause / resume
* [ ] Working Unit completion
* [ ] Execution telemetry

### Insights

* [ ] Progress dashboard
* [ ] Productivity analytics
* [ ] Execution trends
* [ ] Goal analytics

### Platform

* [ ] Authentication
* [ ] Authorization
* [ ] Notifications
* [ ] Team collaboration
* [ ] Production API
* [ ] Deployment pipeline

---

## Project Philosophy

Execution OS is intentionally built as more than a CRUD project-management application.

The architecture focuses on:

```text
Domain boundaries
        +
Independent MFE ownership
        +
Explicit contracts
        +
Runtime composition
        +
Observable execution
```

The goal is to demonstrate how a large frontend application can evolve while keeping business ownership, infrastructure, and application composition clearly separated.
