# Yoom Landing Page

A professional, dark-mode-first landing page for Yoom — a video conferencing SaaS platform. Built with React 19, Vite, Tailwind CSS v4, and shadcn/ui.

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 (CSS-first configuration)
- **UI Components**: shadcn/ui (radix-nova style) + Radix UI primitives
- **Icons**: Lucide React
- **Typography**: Geist Variable (via @fontsource-variable)
- **TypeScript**: Strict mode enabled

## Design System

### Colors (Dark Mode First)
| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#161925` | Page background |
| `--card` | `#1c1f2e` | Card surfaces |
| `--primary` | `oklch(0.5952 0.2116 257.77)` | Primary buttons, accents |
| `--blue-1` | Same as primary | Brand blue |
| `--orange-1` | `#ff742e` | New Meeting accent |
| `--purple-1` | `#830ef9` | Recordings accent |
| `--yellow-1` | `#f9a90e` | Analytics accent |
| `--sky-1` | `#c9ddff` | Live badge, time display |

### Typography
- **Font**: Geist Variable (sans-serif)
- **Headings**: `font-extrabold` / `font-bold`, responsive `text-3xl` → `text-7xl`
- **Body**: `text-base` / `text-lg`, `font-normal`
- **Muted**: `text-muted-foreground` (oklch 0.708)

### Spacing & Radius
- **Base radius**: `0.625rem` (10px) with `rounded-xl` (12px) / `rounded-2xl` (16px) variants
- **Section padding**: `py-20` → `py-28` (responsive)
- **Container**: `max-w-7xl` with `px-6` / `px-10`

## Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components (button, card, hover-card, etc.)
│   └── landing/               # Landing page sections
│       ├── Navbar.tsx         # Fixed header with nav + CTA
│       ├── Hero.tsx           # Hero with gradient mesh, time badge, dual CTA
│       ├── FeatureCard.tsx    # Reusable feature card component
│       ├── FeaturesGrid.tsx   # 4-column feature showcase
│       ├── HowItWorks.tsx     # 3-step process with connector line
│       ├── Capabilities.tsx   # 6 hover cards with detail popovers
│       ├── Footer.tsx         # Minimal footer (Product + Legal + GitHub)
│       └── index.ts           # Barrel exports
├── lib/
│   └── utils.ts               # cn() utility for class merging
├── App.tsx                    # Page assembly
├── main.tsx                   # Entry point + providers
└── index.css                  # Tailwind + custom theme tokens
```

## Sections

1. **Navbar** — Fixed, blurred background, logo, nav links, "Get Started" CTA
2. **Hero** — Full-screen, animated gradient mesh, live badge, headline, dual CTAs, 3 preview cards
3. **Features Grid** — 4 cards (New Meeting, Schedule, Recordings, Analytics) with colored Lucide icons
4. **How It Works** — 3 steps (Create → Invite → Collaborate) with numbered circles, desktop connector
5. **Capabilities** — 6 hover cards (HD Video, Screen Share, Recording, Chat, Encryption, Calendar) with detail popovers
6. **Footer** — Product links, Legal links, copyright, GitHub icon

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Type checking
npm run typecheck

# Production build
npm run build

# Preview build
npm run preview
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (port 5173) |
| `npm run build` | Type-check + production build to `dist/` |
| `npm run typecheck` | Run `tsc --noEmit` |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
| `npm run preview` | Preview production build locally |

## Key Design Decisions

- **Single dark background** throughout — no light/dark section switching
- **No glassmorphism** — uses `bg-card border border-white/5` for cards
- **Flat Lucide icons** everywhere — no emojis
- **Reduced padding** on cards (`p-4` to `p-6`) for denser, professional feel
- **Subtle gradient mesh** in Hero for depth without video performance cost
- **Hover-card popovers** in Capabilities for progressive disclosure
- **Responsive at 4 breakpoints**: 375px, 768px, 1024px, 1440px

## Adding shadcn Components

```bash
npx shadcn@latest add <component-name>
```

Components are installed to `src/components/ui/` with radix-nova style.

## Customization

### Colors
Edit `--color-*` tokens in `src/index.css` under `@theme inline`.

### Sections
Modify `src/App.tsx` to reorder, add, or remove sections.

### Icons
All icons from `lucide-react` — import individually for tree-shaking.

## License

Private project — Yoom landing page.