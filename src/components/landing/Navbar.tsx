import { Button } from "@/components/ui/button"

export function Navbar() {
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#capabilities", label: "Capabilities" },
  ]

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-background/95 backdrop-blur-lg">
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-10"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-foreground"
              aria-label="Yoom Home"
            >
              <svg
                className="size-8 text-blue-1"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
              >
                <rect width="32" height="32" rx="8" fill="currentColor" />
                <path
                  d="M8 12h16M8 16h12M8 20h8"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <span>Yoom</span>
            </a>
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://u-yoom.netlify.app/sign-in"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
            >
              Sign In
            </a>
            <Button
              size="default"
              className="cursor-pointer bg-blue-1 text-primary-foreground hover:bg-blue-1/90"
            >
              <a
                href="https://u-yoom.netlify.app/sign-up"
                className="flex h-full w-full items-center"
              >
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
