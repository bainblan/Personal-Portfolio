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
- **`sections/`** - Full-width page sections (Navbar, Hero, Projects, Skills, Experience, Education, Footer)
- **`components/`** - Reusable UI components (Project card, Skill badge)

### Key Patterns

- **Server Components by default** - Use `'use client'` directive only when interactivity is needed (navigation with JS)
- **Styling** - Tailwind utility classes inline in JSX; theme colors defined in `globals.css`

### Navigation

Sections use `id` attributes for smooth scroll navigation from the Navbar. Adding a new section requires:
1. Create component in `sections/`
2. Import and add to `Home.tsx`
3. Add navigation link in `Navbar.tsx` with matching `id`
