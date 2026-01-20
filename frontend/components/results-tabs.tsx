"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import {
  CheckCircle2,
  Lightbulb,
  Map,
  TrendingUp,
  Zap,
  Clock,
  Wrench,
  Cpu,
} from "lucide-react"

/* ---------- Helpers ---------- */
const safeArray = (value: any) => (Array.isArray(value) ? value : [])

/* ---------- Props ---------- */
interface ResultsTabsProps {
  results: any
  activeTab: string
  setActiveTab: (value: string) => void
}

export default function ResultsTabs({
  results,
  activeTab,
  setActiveTab,
}: ResultsTabsProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="mb-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">
          Your AI-Generated Insights
        </h2>
        <p className="text-base text-muted-foreground/90">
          Comprehensive analysis to guide your product strategy
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* ---------------- TABS LIST ---------------- */}
        <TabsList className="grid w-full grid-cols-5 mb-12 bg-gradient-to-r from-secondary/40 via-secondary/30 to-secondary/40 border border-primary/30 rounded-xl p-2 gap-2">
          <TabsTrigger value="analysis">
            <CheckCircle2 className="h-4 w-4 mr-2" /> Analysis
          </TabsTrigger>
          <TabsTrigger value="ideas">
            <Lightbulb className="h-4 w-4 mr-2" /> Ideas
          </TabsTrigger>
          <TabsTrigger value="features">
            <Wrench className="h-4 w-4 mr-2" /> Features
          </TabsTrigger>
          <TabsTrigger value="techstack">
            <Cpu className="h-4 w-4 mr-2" /> Tech Stack
          </TabsTrigger>
          <TabsTrigger value="roadmap">
            <Map className="h-4 w-4 mr-2" /> Roadmap
          </TabsTrigger>
        </TabsList>

        {/* ---------------- ANALYSIS ---------------- */}
        <TabsContent value="analysis">
          <Card className="p-10">
            <h3 className="text-3xl font-bold mb-4">
              {results.analysis?.title ?? "Problem Analysis"}
            </h3>

            <p className="italic mb-8">
              "{results.analysis?.content ?? ""}"
            </p>

            <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Key Findings
            </h4>

            <ul className="list-disc pl-6 space-y-2">
              {safeArray(results.analysis?.keyPoints).map(
                (point: string, index: number) => (
                  <li key={index} className="leading-relaxed">{point}</li>
                )
              )}
            </ul>
          </Card>
        </TabsContent>

        {/* ---------------- IDEAS ---------------- */}
        <TabsContent value="ideas">
          <Card className="p-10">
            <h3 className="text-3xl font-bold mb-4">
              {results.idea?.title ?? "Product Ideas"}
            </h3>

            <p className="italic mb-8">
              "{results.idea?.content ?? ""}"
            </p>

            <ul className="list-disc pl-6 space-y-2">
              {safeArray(results.idea?.items).map(
                (item: string, index: number) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                )
              )}
            </ul>
          </Card>
        </TabsContent>

        {/* ---------------- FEATURES ---------------- */}
        <TabsContent value="features">
          <Card className="p-10">
            <h3 className="text-3xl font-bold mb-4">
              {results.features?.title ?? "MVP Features"}
            </h3>

            <p className="italic mb-8">
              "{results.features?.content ?? ""}"
            </p>

            <ul className="list-disc pl-6 space-y-2">
              {safeArray(results.features?.items).map(
                (item: string, index: number) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                )
              )}
            </ul>
          </Card>
        </TabsContent>

        {/* ---------------- TECH STACK ---------------- */}
        <TabsContent value="techstack">
          <Card className="p-10">
            <h3 className="text-3xl font-bold mb-4">
              {results.tech_stack?.title ?? "Recommended Tech Stack"}
            </h3>

            <p className="italic mb-8">
              "{results.tech_stack?.content ?? ""}"
            </p>

            {safeArray(results.tech_stack?.recommendations).map(
              (rec: any, index: number) => (
                <div key={index} className="mb-4 p-4 border rounded-lg">
                  <strong>{rec.category}</strong>
                  <div className="text-sm">{rec.tech}</div>
                </div>
              )
            )}
          </Card>
        </TabsContent>

        {/* ---------------- ROADMAP ---------------- */}
        <TabsContent value="roadmap">
          <Card className="p-10">
            <h3 className="text-3xl font-bold mb-4">
              {results.roadmap?.title ?? "MVP Roadmap"}
            </h3>

            <p className="italic mb-8">
              "{results.roadmap?.content ?? ""}"
            </p>

            <ol className="list-decimal pl-6 space-y-4">
              {safeArray(results.roadmap?.phases).map(
                (phase: any, index: number) => (
                  <li key={index}>
                    <div className="font-semibold">{phase.name}</div>
                    <div className="text-sm text-muted-foreground">
                      <Clock className="inline h-3 w-3 mr-1" />
                      {phase.timeline}
                    </div>
                    <p className="mt-2 leading-relaxed">{phase.focus}</p>
                  </li>
                )
              )}
            </ol>
  
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
