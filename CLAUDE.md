# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

- **SvelteKit 2.5** with Vite as build tool
- **pnpm** as package manager (version 10.13.1)
- **TypeScript** with strict configuration
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
