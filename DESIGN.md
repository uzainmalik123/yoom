# Yoom — Design System Document

## Brand Overview
Yoom presents a modern, dark-mode-first video conferencing platform with a clean, technological aesthetic. The design communicates professionalism, reliability, and innovation through its deep color palette, glassmorphism effects, and clean typography. The overall vibe is tech-savvy yet approachable, focusing on seamless video communication experiences.

## Color Palette

| Role | Value | Tailwind Class | Used For |
|------|-------|----------------|----------|
| Background (Light) | oklch(1 0 0) | bg-background | Main background in light mode |
| Background (Dark) | oklch(0.145 0 0) | bg-background | Main background in dark mode |
| Foreground (Light) | oklch(0.145 0 0) | text-foreground | Primary text in light mode |
| Foreground (Dark) | oklch(0.985 0 0) | text-foreground | Primary text in dark mode |
| Primary (Light) | oklch(0.205 0 0) | bg-primary | Primary buttons, accents |
| Primary (Dark) | oklch(0.922 0 0) | bg-primary | Primary buttons, accents (dark) |
| Primary Foreground (Light) | oklch(0.985 0 0) | text-primary-foreground | Text on primary buttons |
| Primary Foreground (Dark) | oklch(0.205 0 0) | text-primary-foreground | Text on primary buttons (dark) |
| Secondary (Light) | oklch(0.97 0 0) | bg-secondary | Secondary elements |
| Secondary (Dark) | oklch(0.269 0 0) | bg-secondary | Secondary elements (dark) |
| Secondary Foreground (Light) | oklch(0.205 0 0) | text-secondary-foreground | Text on secondary elements |
| Secondary Foreground (Dark) | oklch(0.985 0 0) | text-secondary-foreground | Text on secondary elements (dark) |
| Muted (Light) | oklch(0.97 0 0) | bg-muted | Secondary backgrounds, less prominent elements |
| Muted (Dark) | oklch(0.269 0 0) | bg-muted | Secondary backgrounds, less prominent elements (dark) |
| Muted Foreground (Light) | oklch(0.556 0 0) | text-muted-foreground | Secondary text, placeholder text |
| Muted Foreground (Dark) | oklch(0.708 0 0) | text-muted-foreground | Secondary text, placeholder text (dark) |
| Accent (Light) | oklch(0.97 0 0) | bg-accent | Hover states, accent elements |
| Accent (Dark) | oklch(0.269 0 0) | bg-accent | Hover states, accent elements (dark) |
| Accent Foreground (Light) | oklch(0.205 0 0) | text-accent-foreground | Text on accent elements |
| Accent Foreground (Dark) | oklch(0.985 0 0) | text-accent-foreground | Text on accent elements (dark) |
| Destructive (Light) | oklch(0.577 0.245 27.325) | bg-destructive | Error states, delete buttons |
| Destructive (Dark) | oklch(0.704 0.191 22.216) | bg-destructive | Error states, delete buttons (dark) |
| Border (Light) | oklch(0.922 0 0) | border-input | Input borders, subtle dividers |
| Border (Dark) | oklch(1 0 0 / 10%) | border-input | Input borders, subtle dividers (dark) |
| Input (Light) | oklch(0.922 0 0) | bg-input/30 | Input backgrounds |
| Input (Dark) | oklch(1 0 0 / 15%) | bg-input/30 | Input backgrounds (dark) |
| Ring (Light) | oklch(0.708 0 0) | ring-ring/50 | Focus rings, hover rings |
| Ring (Dark) | oklch(0.556 0 0) | ring-ring/50 | Focus rings, hover rings (dark) |
| Chart 1 | oklch(0.646 0.222 41.116) | (custom) | Chart/data visualization |
| Chart 2 | oklch(0.6 0.118 184.704) | (custom) | Chart/data visualization |
| Chart 3 | oklch(0.398 0.07 227.392) | (custom) | Chart/data visualization |
| Chart 4 | oklch(0.828 0.189 84.429) | (custom) | Chart/data visualization |
| Chart 5 | oklch(0.769 0.188 70.08) | (custom) | Chart/data visualization |
| Sidebar | oklch(0.985 0 0) | bg-sidebar | Sidebar background |
| Sidebar (Dark) | oklch(0.205 0 0) | bg-sidebar | Sidebar background (dark) |
| Sidebar Foreground | oklch(0.145 0 0) | text-sidebar-foreground | Sidebar text |
| Sidebar Foreground (Dark) | oklch(0.985 0 0) | text-sidebar-foreground | Sidebar text (dark) |
| Sidebar Primary | oklch(0.205 0 0) | bg-sidebar-primary | Sidebar active items |
| Sidebar Primary (Dark) | oklch(0.488 0.243 264.376) | bg-sidebar-primary | Sidebar active items (dark) |
| Sidebar Primary Foreground | oklch(0.985 0 0) | text-sidebar-primary-foreground | Text on active sidebar items |
| Sidebar Primary Foreground (Dark) | oklch(0.985 0 0) | text-sidebar-primary-foreground | Text on active sidebar items (dark) |
| Sidebar Accent | oklch(0.97 0 0) | bg-sidebar-accent | Sidebar accent elements |
| Sidebar Accent (Dark) | oklch(0.269 0 0) | bg-sidebar-accent | Sidebar accent elements (dark) |
| Sidebar Accent Foreground | oklch(0.205 0 0) | text-sidebar-accent-foreground | Text on sidebar accent |
| Sidebar Accent Foreground (Dark) | oklch(0.985 0 0) | text-sidebar-accent-foreground | Text on sidebar accent (dark) |
| Sidebar Border | oklch(0.922 0 0) | border-sidebar | Sidebar borders |
| Sidebar Border (Dark) | oklch(1 0 0 / 10%) | border-sidebar | Sidebar borders (dark) |
| Sidebar Ring | oklch(0.708 0 0) | ring-sidebar | Sidebar focus rings |
| Sidebar Ring (Dark) | oklch(0.556 0 0) | ring-sidebar | Sidebar focus rings (dark) |
| Custom Dark 1 | #1c1f2e | bg-dark-1 | Navbar, sidebar background |
| Custom Dark 2 | #161925 | bg-dark-2 | Body background (from layout) |
| Custom Dark 3 | #252A41 | bg-dark-3 | Input backgrounds, modal backgrounds |
| Custom Dark 4 | #1E2757 | bg-dark-4 | Secondary button backgrounds |
| Custom Blue 1 | oklch(0.5952 0.2116 257.77) | bg-blue-1 | Primary buttons, active sidebar items |
| Custom Sky 1 | #c9ddff | text-sky-1 | Date text in hero section |
| Custom Sky 2 | #ECF0FF | bg-sky-2 | (Potential) hover states |
| Custom Sky 3 | #F5FCFF | bg-sky-3 | (Potential) hover states |
| Custom Orange 1 | #FF742E | bg-orange-1 | Home card background (New Meeting) |
| Custom Purple 1 | #830EF9 | bg-purple-1 | Home card background (Schedule Meeting) |
| Custom Yellow 1 | #F9A90E | bg-yellow-1 | Home card background (View Recordings) |

## Typography

### Font Family
- **Primary**: 'Inter', sans-serif (defined as `--font-inter` in CSS)
- Imported from: `@/components/ui/button.tsx` and `app/layout.tsx` using `next/font/google`

### Font Sizes
- **Headings**:
    - h1: `text-4xl` to `text-7xl` (responsive, e.g., `lg:text-7xl`)
    - h2: `text-2xl` (HomeCard title)
    - h3: `text-lg` (HomeCard description, labels)
    - h4: `text-base` (sidebar links, form labels)
- **Body**: `text-base` (inputs, body text), `text-sm` (small text, helper text)
- **Buttons**: `text-sm` (base), scales with size variants (xs, sm, default, lg)
- **Labels**: `text-base` (form labels, sidebar links)

### Font Weights
- **Normal**: `font-normal` (body text, descriptions)
- **Medium**: `font-medium` (labels, some headings)
- **Semibold**: `font-semibold` (dropdown items, some buttons)
- **Bold**: `font-bold` (headings, strong emphasis)
- **Extrabold**: `font-extrabold` (hero time display)
- **Black**: Not used

### Letter Spacing & Text Transform
- **Letter Spacing**: No custom tracking classes observed; uses default Tailwind spacing
- **Text Transform**:
    - `underline-offset-4` (link variant buttons)
    - No systematic text-transform (uppercase/lowercase) usage observed
    - `whitespace-nowrap` on buttons to prevent wrapping

## Component Patterns

### Buttons
- **Shape**: Rounded with multiple size options (xs, sm, default, lg, icon variants)
- **Color Variants**:
    - Default: `bg-primary text-primary-foreground hover:bg-primary/90`
    - Destructive: `bg-destructive text-white hover:bg-destructive/90`
    - Outline: `border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground`
    - Secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/80`
    - Ghost: `hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50`
    - Link: `text-primary underline-offset-4 hover:underline`
- **Sizes**:
    - xs: `h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5`
    - sm: `h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5`
    - default: `h-9 px-4 py-2 has-[>svg]:px-3`
    - lg: `h-10 rounded-md px-6 has-[>svg]:px-4`
    - icon: `size-9`
    - icon-xs: `size-6 rounded-md [&_svg:not([class*='size-'])]:size-3`
    - icon-sm: `size-8`
    - icon-lg: `size-10`
- **Effects**:
    - `transition-all` for smooth state changes
    - `focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]`
    - `disabled:pointer-events-none disabled:opacity-50`
    - SVG icons scale with button size (`[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`)

### Cards
- **MeetingCard**:
    - Container: `flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]`
    - Image container: Uses `next/image` with fixed dimensions
    - Content area: Flex column layout with gap spacing
    - Action buttons:
        - Primary: `Button` with `rounded bg-blue-1 px-6 gap-2`
        - Secondary: `Button` with `bg-dark-4 px-6`
- **HomeCard**:
    - Container: `button` with dynamic color (`{cardColor} px-4 py-6 flex flex-col justify-between w-full xl:max-w-67.5 min-h-65 rounded-lg cursor-pointer`)
    - Icon container: `flex-center glassmorphism size-12 rounded-lg`
    - Content: `flex flex-col items-start gap-2` with `text-2xl font-bold` title and `text-lg font-normal` description
    - Glassmorphism effect: `background: rgba(255, 255, 255, 0.25); backdrop-filter: blur(4px);`

### Navigation/Sidebar
- **Layout**: Vertical sidebar on left (`sticky left-0 top-0 flex h-screen w-fit flex-col justify-between`)
- **Colors**:
    - Background: `bg-dark-1` (navbar/sidebar)
    - Text: `text-white`
    - Active item: `bg-blue-1` background
- **Spacing**:
    - Padding: `p-6 pt-28` (top padding for logo/branding space)
    - Gap between items: `gap-6`
    - Item padding: `p-4`
- **Typography**:
    - Label: `text-lg font-semibold max-lg:hidden`
    - Icons: Fixed size 24x24
- **States**:
    - Active: Background color change to `bg-blue-1`
    - Hover: Implicit via Tailwind's hover variants on link elements

### Modals/Dialogs
- **Overlay**:
    - `data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50`
- **Content**:
    - `bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg`
- **Close Button**:
    - `ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`
- **Header/Footer**: Flex layouts with appropriate spacing and alignment

### Badges/Pills
- No explicit badge component found in the codebase
- Badge-like elements appear to use button variants (particularly "outline" or "ghost") or simple text with background colors
- Example: In MeetingCard, the "+5" indicator uses: `flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-dark-3 bg-dark-4`

### Input Fields
- **Container**:
    - `file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`
- **Focus State**:
    - `focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]`
- **Error State**:
    - `aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`
- **Appearance**: Transparent background with border, rounded padding, subtle shadow

## Layout & Spacing

### Overall Layout Approach
- **Main Structure**: Sidebar navigation (246px width on lg+) + main content area
- **Header**: Fixed navbar at top (`fixed z-50 w-full`)
- **Responsive Design**:
    - Sidebar hidden on smaller screens (`max-sm:hidden lg:w-[246px]`)
    - Navbar adjusts padding on medium screens (`px-6 lg:px-10`)
    - Grid layouts adapt from single column to multiple columns (`grid-cols-1 md:grid-cols-2 xl:grid-cols-4`)

### Consistent Padding/Margin Patterns
- **Sections**: Often use `py-8` or `px-6` padding
- **Cards**:
    - MeetingCard: `px-5 py-8`
    - HomeCard: `px-4 py-6`
- **Form Elements**:
    - Inputs: `px-3 py-1` (h-9)
    - Textareas: Similar padding
- **Navigation**:
    - Sidebar: `p-6 pt-28`
    - Navbar: `px-6 py-4 lg:px-10`
- **Grid Gap**: Consistent use of `gap-4`, `gap-5`, `gap-6`, `gap-8`

### Max Width Containers
- **Content Width**: `max-w-[calc(100%-2rem)]` for dialogs, `xl:max-w-[568px]` for cards
- **Page Content**: Often uses `w-full` with max-width constraints on inner elements
- **Containers**:
    - `xl:max-w-67.5` (HomeCard)
    - `xl:max-w-[568px]` (MeetingCard)
    - `sm:max-w-lg` (Dialog content)

### Responsive Breakpoints
- **Tailwind Breakpoints Used**:
    - `sm`: 640px
    - `md`: 768px
    - `lg`: 1024px
    - `xl`: 1280px
- **Examples**:
    - Navbar padding: `px-6 lg:px-10`
    - Sidebar visibility: `max-sm:hidden lg:w-[246px]`
    - Grid columns: `grid-cols-1 md:grid-cols-2 xl:grid-cols-4`
    - Text sizes: `lg:text-7xl` (hero), `text-lg font-medium text-sky-1 lg:text-2xl` (hero date)

## Visual Style Keywords
Dark mode first · Glassmorphism effects · Purple and orange accents · Clean rounded corners · Subtle shadows and rings · Inter typography · Spacious layout · Responsive grid · Sidebar navigation · Fixed header · Minimalist design · Tech-focused aesthetic · Blue primary accent · Glass transparency effects · Smooth transitions and hover states · Consistent spacing system

## Landing Page Direction
Based on the Yoom codebase analysis, the landing page should embrace a dark-mode-first aesthetic with a sophisticated, tech-forward feel. The design should feature a prominent hero section with large, centered typography displaying time and date (similar to the current home page hero), utilizing the signature dark background with the hero background image.

The layout should follow a clean, structured approach with a potential sidebar navigation or top navigation bar, maintaining the signature rounded corners (14px radius) and subtle shadow effects throughout. Key sections to include:

1. **Hero Section**: Full-width section with dark background, prominent time/date display, and subtle glassmorphism elements
2. **Features Section**: Grid layout showcasing core features using the signature colored cards (orange, blue, purple, yellow) with glassmorphism icons and clean typography
3. **How It Works**: Simple numbered or step-by-step illustration of the video call process
4. **Technology Stack**: Subtle badges or icons highlighting WebRTC, WebSocket, and modern web technologies used
5. **Call-to-Action**: Prominent button using the primary blue color (#0E78F9 or oklch(0.205 0 0)) with hover effects

The design should avoid overly bright colors, excessive animations, or cluttered layouts. Instead, it should leverage the established visual language: dark backgrounds (#161925, #1c1f2e), accent colors from the defined palette, glassmorphism effects (`background: rgba(255, 255, 255, 0.25); backdrop-filter: blur(4px);`), and the Inter typeface throughout. Spacing should follow the consistent 4px/8px grid pattern seen in the application, with generous padding in sections and compact, touch-friendly controls.

Key visual elements to incorporate from the existing design:
- Border radius: 0.625rem (base) with derivatives (sm, md, lg, xl)
- Focus rings: oklch(0.708 0 0) / oklch(0.556 0 0)
- Glassmorphism: rgba(255, 255, 255, 0.25) with 4px blur
- Button variants: primary (blue), destructive, outline, secondary, ghost, link
- Card layouts with image + content + action button patterns