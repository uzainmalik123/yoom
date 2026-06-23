import { FeatureCard } from "./FeatureCard"

const features = [
  {
    title: "New Meeting",
    description: "Start instant video calls with one click. No downloads, no wait time — just share the link and go.",
    icon: "Zap" as const,
    color: "text-orange-1",
  },
  {
    title: "Schedule Meeting",
    description: "Plan ahead with calendar integration. Send invites, set reminders, and sync with Google & Outlook.",
    icon: "Calendar" as const,
    color: "text-blue-1",
  },
  {
    title: "View Recordings",
    description: "Auto-record every meeting. Search transcripts, trim clips, and share securely with your team.",
    icon: "Video" as const,
    color: "text-purple-1",
  },
  {
    title: "Analytics",
    description: "Track attendance, engagement, and meeting health. Export reports and improve team collaboration.",
    icon: "BarChart3" as const,
    color: "text-yellow-1",
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything you need for <span className="text-gradient">better meetings</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Four powerful tools in one platform. From quick syncs to scheduled presentations — Yoom handles it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}