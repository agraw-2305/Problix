"use client"


import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, ArrowRight, Lightbulb } from "lucide-react"



interface ProblemInputProps {
  problem: string
  setProblem: (value: string) => void
  onAnalyze: () => void
  isAnalyzing: boolean
}

export default function ProblemInput({ problem, setProblem, onAnalyze, isAnalyzing }: ProblemInputProps) {

  return (
    <div className="relative mb-16">
      <div className="absolute -top-40 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-60 h-60 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <Card className="relative border border-primary/20 bg-card/60 backdrop-blur-3xl shadow-xl shadow-primary/10 hover:border-primary/35 hover:shadow-primary/20 transition-all duration-500 overflow-hidden">

        <div className="relative p-12 sm:p-16">
          {/* Header Section */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-primary/15 border border-primary/30">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                What's Your Problem?
              </h2>
            </div>
            <p className="text-base text-muted-foreground/80 leading-relaxed font-medium">
              Share your biggest challenge. Describe the pain, the impact, and what's needed. Our AI will generate actionable insights.
            </p>
          </div>

          {/* Main Textarea */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-muted-foreground/90 block mb-3 uppercase tracking-wider">
              Tell us your story
            </label>
            <textarea
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="Example: We're a fintech startup struggling with user trust. Customers hesitate to link their bank accounts due to security concerns. This blocks 60% of sign-ups. We need innovative ways to build confidence..."
              className="w-full min-h-56 rounded-xl border border-primary/20 bg-secondary/30 px-6 py-5 text-foreground placeholder-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300 resize-none text-base leading-relaxed font-medium hover:border-primary/30"
              disabled={isAnalyzing}
            />
          </div>

          {/* Character Count and Tips */}
          <div className="flex items-center justify-between mb-8 text-xs text-muted-foreground/70">
            <div className="flex gap-4">
              <span>{problem.length} characters</span>
              <span className={problem.length < 50 ? "text-accent/60" : "text-primary/60"}>
                {problem.length < 50 ? "Tell us more..." : "Great detail!"}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={onAnalyze}
            disabled={!problem.trim() || isAnalyzing}
            className="w-full group relative h-auto bg-gradient-to-r from-primary to-accent hover:from-primary/95 hover:to-accent/95 text-primary-foreground font-bold py-6 px-8 rounded-xl transition-all duration-300 disabled:opacity-35 disabled:cursor-not-allowed shadow-lg shadow-primary/35 hover:shadow-2xl hover:shadow-primary/50 disabled:shadow-none hover:scale-[1.01] active:scale-98 text-lg overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {isAnalyzing ? (
              <span className="relative flex items-center gap-3 justify-center">
                <span className="inline-block animate-spin">
                  <Sparkles className="h-6 w-6" />
                </span>
                <span>Analyzing your opportunity...</span>
              </span>
            ) : (
              <span className="relative flex items-center gap-3 justify-center">
                <Sparkles className="h-6 w-6" />
                Generate Insights
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            )}
          </Button>
        </div>
      </Card>
    </div>
  )
}
