import { Bot } from "lucide-react"

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "How It Works", href: "#how-it-works" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="mb-8 grid grid-cols-2 gap-8 lg:gap-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-3 font-medium text-foreground">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 md:flex-row">
          <a
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-foreground"
            aria-label="Yoom Home"
          >
            <svg
              className="size-6 text-blue-1"
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

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yoom. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Bot className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}