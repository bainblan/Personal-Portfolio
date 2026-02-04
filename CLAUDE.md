# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture Overview

This is a **Next.js 16 personal portfolio** using the App Router with React 19, TypeScript, and Tailwind CSS 4.

### Component Organization

- **`app/`** - Next.js App Router pages and layouts
  - `Home.tsx` is the main orchestrator that composes all sections
  - `actions/contact.ts` contains the server action for form submission
- **`sections/`** - Full-width page sections (Navbar, Hero, Projects, Skills, Experience, Education, Contact, Footer)
- **`components/`** - Reusable UI components (Project card, Skill badge)
- **`utils/supabase/`** - Supabase client configuration (browser and server clients)

### Key Patterns

- **Server Components by default** - Use `'use client'` directive only when interactivity is needed (forms, navigation with JS)
- **Server Actions** - Backend logic in `app/actions/` with `'use server'` directive
- **Styling** - Tailwind utility classes inline in JSX; theme colors defined in `globals.css`

### External Services

- **Supabase** - PostgreSQL database for storing contact form submissions
- **Resend** - Email notification service for contact form alerts

Environment variables required in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`
- `RESEND_API_KEY`

### Navigation

Sections use `id` attributes for smooth scroll navigation from the Navbar. Adding a new section requires:
1. Create component in `sections/`
2. Import and add to `Home.tsx`
3. Add navigation link in `Navbar.tsx` with matching `id`
