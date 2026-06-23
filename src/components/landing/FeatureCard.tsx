import { Zap, Calendar, Video, BarChart3 } from "lucide-react"

type IconName = "Zap" | "Calendar" | "Video" | "BarChart3"

interface FeatureCardProps {
  title: string
  description: string
  icon: IconName
  color: string
}

const iconMap: Record<IconName, React.ElementType> = {
  Zap,
  Calendar,
  Video,
  BarChart3,
}

export function FeatureCard({ title, description, icon, color }: FeatureCardProps) {
  const Icon = iconMap[icon]
  
  return (
    <div className="bg-card border border-white/5 rounded-xl p-6 hover:border-blue-1/30 transition-colors duration-200">
      <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 mb-4 ${color}`}>
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}