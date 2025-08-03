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
- Resend API integration for email sending
- Field-specific error handling and user feedback
- Environment variable configuration required

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

## AWS Migration Strategy (Future Reference)

This section outlines potential migration paths from Vercel to AWS for infrastructure learning and cost optimization.

### Current Vercel Setup Analysis

**Dependencies to Replace:**

- ✅ `@vercel/analytics` - ~~Integrated in `src/routes/+layout.svelte`~~ **REMOVED**
- ✅ `@vercel/speed-insights` - ~~Performance monitoring~~ **REMOVED**
- ✅ `@sveltejs/adapter-auto` - ~~Auto-detects Vercel deployment~~ **REPLACED** with `@sveltejs/adapter-node`
- Environment variables: `RESEND_API_KEY`, `EMAIL_RECIPIENT` - **CONFIGURED** in `.env.example`
- Server-side contact form using Resend API - **COMPATIBLE** with Node.js adapter

### Migration Options (Ordered by Complexity)

#### Phase 1: AWS Amplify (Recommended First Step)

**Complexity:** 🟢 Low | **Time:** 2-4 hours | **Cost:** $5-15/month

**Tasks:**

- ✅ Set up AWS Amplify project - **CONFIGURED** (`amplify.yml`, `.env.example`, README.md)
- [ ] Replace Vercel Analytics with Google Analytics + AWS CloudWatch
- [ ] Test contact form functionality in Amplify environment
- [ ] Configure custom domain and SSL
- [ ] Set up branch-based preview deployments
- [ ] Monitor performance vs Vercel baseline

**Benefits:** Vercel-like experience with AWS learning opportunity

#### Phase 2: S3 + CloudFront + Lambda (Cost Optimization)

**Complexity:** 🟡 Medium-High | **Time:** 8-16 hours | **Cost:** $2-8/month

**Architecture Tasks:**

- [ ] Convert to static site using `@sveltejs/adapter-static`
- [ ] Set up S3 bucket for static hosting
- [ ] Configure CloudFront distribution for CDN
- [ ] Create Lambda function for contact form API
- [ ] Set up API Gateway for Lambda endpoint
- [ ] Implement Infrastructure as Code (CDK or Terraform)
- [ ] Create CI/CD pipeline (GitHub Actions → AWS)
- [ ] Set up monitoring and alerting

**Required Code Changes:**

- [ ] Refactor contact form to use API endpoint instead of SSR
- [ ] Update build configuration for static generation
- [ ] Replace server-side logic with client-side API calls

#### Phase 3: Lambda + Function URLs (Serverless-First)

**Complexity:** 🟡 Medium | **Time:** 4-8 hours | **Cost:** $1-5/month

**Tasks:**

- [ ] Configure `@sveltejs/adapter-node` for Lambda deployment
- [ ] Set up single Lambda function with Function URLs
- [ ] Configure CloudFront for static asset caching
- [ ] Implement serverless deployment pipeline
- [ ] Test cold start performance and optimize

#### Phase 4: AWS App Runner (Container-Based)

**Complexity:** 🟢 Low-Medium | **Time:** 2-6 hours | **Cost:** $10-25/month

**Tasks:**

- [ ] Create Dockerfile for SvelteKit app
- [ ] Set up AWS App Runner service
- [ ] Configure auto-scaling policies
- [ ] Implement container-based CI/CD

### Migration Decision Matrix

**Choose AWS Amplify if:**

- Want to learn AWS with minimal risk
- Need Vercel-like developer experience
- Planning to integrate other AWS services later

**Choose S3 + CloudFront + Lambda if:**

- Cost optimization is primary goal
- Want to learn AWS architecture deeply
- Comfortable with infrastructure complexity

**Choose Lambda + Function URLs if:**

- Prefer unified serverless approach
- Want simplest AWS serverless setup
- Don't need API Gateway features

**Stay with Vercel if:**

- Primary focus is on development, not DevOps
- Free tier meets current needs
- Time is better spent on features than infrastructure

### Pre-Migration Checklist

**Performance Baseline:**

- [ ] Document current Vercel performance metrics
- [ ] Record current build and deployment times
- [ ] Note current monthly costs (should be $0 on free tier)

**Preparation Tasks:**

- [ ] Set up AWS account and configure billing alerts
- [ ] Learn AWS IAM roles and policies basics
- [ ] Choose Infrastructure as Code tool (CDK recommended)
- [ ] Plan analytics replacement strategy
- [ ] Create rollback plan to Vercel if needed

### Success Metrics

**Technical:**

- Page load time ≤ current Vercel performance
- Contact form functionality 100% operational
- Build/deploy time ≤ 5 minutes
- 99.9% uptime

**Learning:**

- Understanding of AWS core services (S3, CloudFront, Lambda, IAM)
- Infrastructure as Code proficiency
- Monitoring and alerting setup experience

**Economic:**

- Monthly AWS costs documented and predictable
- Cost comparison with Vercel validated

### Notes

- This migration is primarily for learning AWS and DevOps skills
- Vercel's free tier is economically superior for personal portfolios
- Phased approach allows learning without high-risk big-bang migration
- Each phase builds incrementally on AWS knowledge
