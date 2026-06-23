import { Button } from "@/components/ui/button"
import { Video, Calendar, FileVideo } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-16">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 size-1/2 rounded-full bg-blue-1/10 blur-3xl" />
        <div className="absolute top-1/4 -right-1/4 size-1/2 rounded-full bg-purple-1/10 blur-3xl" />
        <div className="bg-orange-1/05 absolute -bottom-1/4 left-1/4 size-1/2 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-10">
        <div className="flex flex-col items-center gap-6">
          {/* Live Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-sky-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-1 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-1"></span>
            </span>
            Now available for your meetings
          </div>

          <h1 className="text-5xl leading-[1.1] font-extrabold tracking-tight text-foreground lg:text-7xl">
            Meetings made <br />
            <span className="text-gradient">effortlessly simple</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Professional video conferencing that just works. Schedule, host, and
            record your meetings with zero friction.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-12 cursor-pointer gap-2 bg-blue-1 px-8 text-lg font-semibold text-primary-foreground hover:bg-blue-1/90"
            >
              <Video className="size-5" />
              <a
                href="https://u-yoom.netlify.app/sign-in"
                className="flex h-full w-full items-center"
              >
                Start a Meeting
              </a>
            </Button>
          </div>

          {/* Preview Cards - cleaner, less padding */}
          <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { title: "New Meeting", icon: Video, color: "text-orange-1" },
              { title: "Schedule", icon: Calendar, color: "text-blue-1" },
              { title: "Recordings", icon: FileVideo, color: "text-purple-1" },
            ].map((card) => (
              <div
                key={card.title}
                className="group cursor-pointer rounded-xl border border-white/5 bg-card p-4 text-left transition-colors duration-200 hover:border-blue-1/30"
              >
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ${card.color}`}
                >
                  <card.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-blue-1">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Quick access to {card.title.toLowerCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
