# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Project Overview

This is a SvelteKit-based personal portfolio website for Sungjoon Park, built with TypeScript, Tailwind CSS, and DaisyUI. The site showcases professional work, projects, and includes a contact form with email integration.

## Development Commands

**Core Development:**

```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm preview          # Preview production build locally
```

**Code Quality:**

```bash
pnpm run check        # Type check with svelte-check
pnpm run lint         # Run Prettier and ESLint checks
pnpm run format       # Format code with Prettier
```

**Testing:**

```bash
pnpm run test         # Run all tests (unit + integration)
pnpm run test:unit    # Run Vitest unit tests only
pnpm run test:integration  # Run Playwright E2E tests only
```

## Architecture Overview

### Build System

- **SvelteKit ^2.25.1** with Vite as the build tool
- **Node >=24.12.0** as the runtime engine requirement
- **pnpm 10.27.0** as the package manager
- **mise** for managing Node.js and pnpm versions
- **TypeScript** with a strict configuration
- Uses `@sveltejs/adapter-auto` for deployment flexibility

### Routing Structure

File-based routing with server-side layout data:

- Global layout implements 3-column CSS grid (`grid-cols-layout: '16rem 1fr 16rem'`)
- Layout provides dynamic page titles via `+layout.server.ts`
- Page transitions use Svelte's `fly` animation (200ms duration/delay)

### Component Architecture

Components follow a hierarchical pattern:

- `lib/components/layout/` - Layout components (header, footer, theme controller)
- `lib/components/pages/` - Page-specific component logic that mirrors route structure
- `lib/components/ui/` - Reusable UI primitives
- `lib/components/svgs/` - Custom SVG icon components

### Content Management

JSON-driven content system:

- Content stored in `lib/contents/pages/[page]/content-ja.json`
- Components dynamically render content based on JSON schema
- Internationalization-ready (currently Japanese)
- Schema supports sections, items, and element type configuration

### Styling System

- **Tailwind CSS** with custom grid configuration
- **DaisyUI** themes: 'autumn' (light) and 'dim' (dark)
  (DaisyUI is configured via the Tailwind CSS plugin block in `src/lib/styles/app.css`)
- Custom fonts: LINESeedJPStd for Japanese typography
- Utility functions: `cn()` from `tailwind-helper.ts` (combines clsx + tailwind-merge)
- Theme switching with localStorage persistence and SSR safety

### Contact Form Integration

Full-stack contact form implementation:

- Zod schema validation on both client and server
- Optional Resend API integration for email sending (disabled by default)
- Field-specific error handling and user feedback
- Environment variable configuration required

To enable email sending:

1. Set RESEND_API_KEY and EMAIL_RECIPIENT in your environment.
2. Uncomment the Resend imports/usages in src/routes/contact/+page.server.ts.
3. Deploy with those environment variables configured.

### Testing Setup

- **Vitest** for unit tests (`src/**/*.{test,spec}.{js,ts}`)
- **Playwright** for E2E tests (runs against production build)
- Tests expect build completion before integration testing

## Key Patterns

### Theme System

The site uses a sophisticated theme system with automatic detection and manual switching. Theme state is persisted in localStorage and handles SSR gracefully.

### Component Composition

Pages are composed from focused components that consume JSON content. This allows for consistent structure while maintaining flexibility for different content types.

### External Link Handling

External links are consistently handled through the `ExternalLink` component with proper `rel` attributes and visual indicators.

### Grid Layout System

Custom Tailwind configuration defines a 3-column layout grid that adapts responsively. The layout uses CSS Grid with named areas for semantic layout structure.

## Svelte 5 and SvelteKit Coding Rules

This project uses **Svelte 5** and **SvelteKit** with modern patterns including **Runes** and **Universal Reactivity**.

### 1. Reactivity via Svelte 5 Runes

Svelte 5 moves away from the `$:` syntax and `let` variable reactivity in favor of **Runes**, which provide more explicit and powerful control over state.

- **State Declaration:** Use the **`$state`** rune to declare reactive variables. For deeply nested objects or arrays, `$state` provides deep reactivity by default.
- **Performance Optimization:** Use **`$state.raw`** for large data structures where you do not need deep reactivity. This improves performance by only triggering updates when the entire object is reassigned.
- **Derived State:** Always use **`$derived`** (for simple expressions) or **`$derived.by`** (for complex logic) to create values that depend on other state.
  - **Rule:** **Never use `$effect` to synchronize state.** Use `$derived` instead to avoid "circles of hell" where state becomes out of sync or difficult to trace.
- **Side Effects:** Use **`$effect`** sparingly as an "escape hatch" for direct DOM manipulation or synchronizing with external systems (like APIs).
- **Debugging:** Utilize the **`$inspect`** rune instead of `console.log`. It automatically tracks reactive values and logs their status (init vs. update) whenever they change.

### 2. Modern Component Patterns

- **Props:** Declare component inputs using the **`$props()`** rune.
- **Two-Way Binding:** If a component needs to mutate a prop and have that change reflected in the parent, wrap the prop in the **`$bindable()`** rune.
- **Snippets over Slots:** Favor **Snippets** (`{#snippet ...}`) for reusable UI chunks or passing UI as props. They are more flexible than the legacy slot system and behave like regular JavaScript functions.
- **Universal Reactivity:** Move state logic out of `.svelte` files and into **`.svelte.js`** or **`.svelte.ts`** files. This allows you to share reactive state across multiple components or even global modules easily.
- **Classes for State:** For complex state logic, use **Classes** with `$state` fields. This provides a clean, encapsulated API using standard Getters and Setters.

### 3. SvelteKit Data Loading and Routing

- **Remote Functions (Experimental):** Use **Remote Functions** (queries and mutations) as the modern alternative to `load` functions and form actions. They provide an RPC-style experience that is fully type-safe from server to client without manual fetch calls.
- **Server Boundary:** Always put sensitive logic (database calls, secret keys) in **`.server.ts`** files to ensure it never runs on the client.
- **Route Safety:** Use the **`resolve`** function from `$app/paths` when creating links. This provides compile-time / dev-time checks to ensure you aren't linking to a non-existent route.
- **Middleware:** Utilize **`hooks.server.ts`** for cross-cutting concerns like authentication, session management, and passing data to the `locals` object for use in server functions.

### 4. Forms and User Interaction

- **Progressive Enhancement:** Spread remote function results into standard HTML forms (`<form {...createPost}>`) to automatically gain **progressive enhancement**, field validation, and type safety.
- **View Transitions:** Use the **View Transitions API** via the `onNavigate` hook in SvelteKit for seamless animations between pages.
- **Data Binding:** Use `bind:value` for simple two-way data binding in inputs. For complex transformations (e.g., an input that forces uppercase), use **Function Bindings** with custom get/set logic.

### 5. Styling and Performance

- **Scoped CSS:** Leverage Svelte's default **scoped styling**. Only use `:global()` or global stylesheets when necessary to prevent style leakage.
- **Conditional Classes:** Use the `class:` directive (e.g., `class:active={isActive}`) or pass an object/array to the `class` attribute for cleaner dynamic styling.
- **State Snapshots:** When sending reactive state to a non-Svelte system (like a database or `structuredClone`), use **`$state.snapshot()`** to strip the reactive proxy and get a plain JavaScript object.

### Philosophy

**Analogy:** If Svelte 4 was like a set of automatic doors that opened whenever they sensed movement nearby, Svelte 5 is like a smart home system where you explicitly define which sensors (runes) trigger which actions, making the whole house (application) much more predictable and easier to maintain.
