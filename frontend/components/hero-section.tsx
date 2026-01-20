"use client"

import { ArrowRight, Zap, Brain, Rocket } from "lucide-react"

interface HeroSectionProps {
  onViewDemo: () => void
}

export default function HeroSection({ onViewDemo }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden px-4 py-32 sm:px-6 sm:py-40 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute top-20 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 backdrop-blur-md hover:bg-primary/15 hover:border-primary/60 transition-all duration-300">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Next-Gen AI Technology</span>
        </div>

        <h1 className="mb-10 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
          <span className="block text-foreground">Every Problem is</span>
          <span className="block bg-gradient-to-r from-primary via-accent to-primary/60 bg-clip-text text-transparent py-2">
            A Product Waiting
          </span>
          <span className="block text-foreground">to Be Born</span>
        </h1>

        <p className="mb-10 text-xl sm:text-2xl font-semibold text-foreground/90">
          Problix — <span className="text-muted-foreground/90">Where problems turn into powerful ideas.</span>
        </p>

        <div className="mx-auto mb-14 max-w-2xl space-y-5">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
            Stop spinning on ideas. Let AI analyze your challenge and generate a complete product strategy—from market insights to implementation roadmap—instantly.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed">
           Built to support thoughtful problem-solving and product thinking.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-3 p-5 rounded-xl border border-primary/20 bg-primary/8 hover:bg-primary/12 transition-all duration-300">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/40">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground text-center">Market Intelligence</span>
            <p className="text-xs text-muted-foreground/70 text-center leading-tight">AI-powered analysis</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-5 rounded-xl border border-accent/20 bg-accent/8 hover:bg-accent/12 transition-all duration-300">
            <div className="p-3 rounded-lg bg-accent/20 border border-accent/40">
              <Zap className="h-6 w-6 text-accent" />
            </div>
            <span className="text-sm font-semibold text-foreground text-center">Instant Ideas</span>
            <p className="text-xs text-muted-foreground/70 text-center leading-tight">Creative solutions</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-5 rounded-xl border border-primary/20 bg-primary/8 hover:bg-primary/12 transition-all duration-300">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/40">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground text-center">Launch Ready</span>
            <p className="text-xs text-muted-foreground/70 text-center leading-tight">Complete roadmap</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              const element = document.querySelector("textarea")
              element?.focus()
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group relative inline-flex items-center justify-center px-8 py-5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2 text-base">
              Get Started
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>

          <button
            onClick={onViewDemo}
            className="group px-8 py-5 rounded-full border-2 border-primary/40 text-foreground font-bold hover:bg-primary/10 hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 active:scale-95 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              See Demo
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
