import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { 
  Video, 
  Monitor, 
  Cloud, 
  MessageSquare, 
  Shield, 
  Calendar 
} from "lucide-react"

const capabilities = [
  {
    title: "HD Video & Audio",
    description: "Crystal-clear 1080p video with adaptive bitrate. Noise suppression and echo cancellation for professional audio quality.",
    icon: Video,
    details: [
      "Up to 1080p @ 30fps",
      "Adaptive bitrate streaming",
      "Background noise removal",
      "Echo cancellation",
      "Low-light enhancement",
    ],
  },
  {
    title: "Screen Sharing",
    description: "Share your entire screen, a specific window, or a browser tab. Includes remote control for seamless collaboration.",
    icon: Monitor,
    details: [
      "Full screen or window share",
      "Browser tab sharing",
      "Remote control request",
      "Multiple simultaneous shares",
      "Annotation tools",
    ],
  },
  {
    title: "Cloud Recording",
    description: "Automatic cloud recording with unlimited storage. Searchable transcripts, smart chapters, and easy sharing.",
    icon: Cloud,
    details: [
      "Auto-record option",
      "Searchable transcripts",
      "AI-generated chapters",
      "Trim & clip recordings",
      "Password-protected links",
    ],
  },
  {
    title: "In-Meeting Chat",
    description: "Real-time messaging with file sharing, reactions, and threaded replies. Messages persist after the meeting ends.",
    icon: MessageSquare,
    details: [
      "Public & private chat",
      "File drag & drop",
      "Emoji reactions",
      "Threaded replies",
      "Export chat history",
    ],
  },
  {
    title: "End-to-End Encryption",
    description: "Enterprise-grade security with AES-256 encryption. SOC 2 certified, GDPR compliant, and HIPAA ready.",
    icon: Shield,
    details: [
      "AES-256 encryption",
      "SOC 2 Type II certified",
      "GDPR & CCPA compliant",
      "HIPAA BAA available",
      "SSO & SCIM support",
    ],
  },
  {
    title: "Calendar Integrations",
    description: "Native Google Calendar and Outlook integration. One-click scheduling, automatic invites, and timezone detection.",
    icon: Calendar,
    details: [
      "Google Calendar sync",
      "Outlook/Office 365 sync",
      "Auto-add video links",
      "Timezone detection",
      "Recurring meetings",
    ],
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Built for <span className="text-gradient">modern teams</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Powerful features that scale with your organization. Hover to explore each capability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((capability) => (
            <HoverCard key={capability.title}>
              <HoverCardTrigger asChild>
                <div className="bg-card border border-white/5 rounded-xl p-5 hover:border-blue-1/30 transition-colors duration-200 cursor-pointer group">
                  <div className="text-blue-1 mb-3">
                    <capability.icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-blue-1 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="bg-card border border-white/10 p-5 rounded-xl w-72 max-w-[90vw] shadow-2xl" side="top" align="center" sideOffset={10}>
                <h4 className="font-semibold text-foreground mb-3">{capability.title} — Details</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {capability.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-blue-1">→</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  )
}