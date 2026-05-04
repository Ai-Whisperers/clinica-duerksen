# AGENTS.md - Development Guidelines for Clínica Duerksen

## Project Overview
Dental clinic website for Dr. Victor Duerksen in Asunción, Paraguay.
Built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, and Supabase.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend
- **Animations**: CSS (reduced-motion aware)
- **Deployment**: Docker + Traefik

## Project Structure
```
app/           → Next.js App Router pages and layouts
components/    → React components
  layout/      → Header, Footer, Navigation
  home/        → Homepage sections
  ui/          → shadcn/ui primitives
  seo/         → SEO components (JsonLd, etc.)
lib/           → Utilities, helpers, configs
  supabase.ts  → Supabase client helpers
  constants.ts → Business info, brand constants
  utils.ts     → Utility functions (cn, etc.)
public/        → Static assets
  images/      → Optimized images
  icons/       → Favicon, app icons
```

## Brand Identity
- **Primary**: #1B4D7A (deep medical blue) - trust, professionalism
- **Secondary**: #4A9BD9 (friendly blue) - approachability
- **Accent**: #D4A843 (warm gold) - quality, premium
- **Background**: #FFFFFF / #F8FAFB
- **Text**: #1A1A2E
- **Font**: Inter (all weights)

## Coding Standards

### TypeScript
- Use strict TypeScript - no `any` types
- Prefer interfaces over types for object shapes
- Export types from the same file as their usage
- Use `as const` for constant objects

### Components
- Use functional components with arrow functions
- Co-locate component-specific types in the same file
- Use named exports (not default) for components except pages
- Keep components focused - extract logic to custom hooks

### Styling
- Use Tailwind CSS utility classes
- Use `cn()` helper for conditional classes
- Use CSS variables via shadcn/ui theme for brand colors
- Mobile-first responsive design
- Prefer `brand-primary`, `brand-secondary`, `brand-accent` for direct brand color access

### File Naming
- Components: PascalCase (e.g., `HeroSection.tsx`)
- Utilities: camelCase (e.g., `formatPhone.ts`)
- Constants: camelCase file, UPPER_CASE exports

### SEO
- Every page must have proper metadata
- Use semantic HTML (header, main, nav, section, article, footer)
- Include structured data (JSON-LD) for local business
- Optimize images with next/image
- All content in Spanish (es) by default

### Performance
- Use Next.js Image component for all images
- Lazy load below-the-fold content
- Use dynamic imports for heavy components
- Keep bundle size minimal
- Target Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

### Git
- Conventional commits: feat:, fix:, chore:, docs:, style:, refactor:
- Branch from main
- Keep commits atomic and well-described
- Run `npm run build` before pushing

### Testing (future)
- Component tests with React Testing Library
- E2E tests with Playwright
- Test accessibility with axe-core
