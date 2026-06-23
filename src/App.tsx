import {
  Navbar,
  Hero,
  FeaturesGrid,
  HowItWorks,
  Capabilities,
  Footer,
} from "@/components/landing"

export function App() {
  return (
    <div className="min-h-screen bg-dark-2">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FeaturesGrid />
        <HowItWorks />
        <Capabilities />
      </main>
      <Footer />
    </div>
  )
}

export default App