import { Plus, Link2, Users } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Create",
    description: "Start an instant meeting or schedule one for later. Set your preferences — video, audio, recording — in seconds.",
    icon: Plus,
  },
  {
    number: "02",
    title: "Invite",
    description: "Share a link, send calendar invites, or add guests by email. No accounts required for participants.",
    icon: Link2,
  },
  {
    number: "03",
    title: "Collaborate",
    description: "HD video, screen sharing, chat, reactions, and recording. Everything you need to work together seamlessly.",
    icon: Users,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get started in <span className="text-gradient">three simple steps</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No complex setup. No learning curve. Just create, invite, and collaborate.
          </p>
        </div>

        <div className="relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-px h-[calc(100%-6rem)] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Number Circle */}
                  <div className="bg-card border border-white/5 flex items-center justify-center w-12 h-12 rounded-xl mb-4 text-lg font-bold text-foreground relative z-10">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-blue-1 mb-4">
                    <step.icon className="size-8" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between steps on mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-8 text-muted-foreground">
                    <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}