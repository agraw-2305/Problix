"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProblemInput from "@/components/problem-input"
import ResultsTabs from "@/components/results-tabs"
import { API_BASE } from "@/lib/api"

// Using API_BASE from lib/api

export default function Home() {
  const [problem, setProblem] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("analysis")

const handleAnalyze = async () => {
  if (!problem.trim()) return;

  setIsAnalyzing(true);
  setActiveTab("analysis");

  try {
    /* 1️⃣ ANALYSIS */
    const analysis = await fetch(`${API_BASE}/analyze-problem`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ problem }),
    }).then((r) => r.json());

    /* 2️⃣ IDEA */
    const idea = await fetch(`${API_BASE}/generate-idea`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ problem }),
    }).then((r) => r.json());

    /* 3️⃣ FEATURES */
    const features = await fetch(`${API_BASE}/generate-features`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ problem }),
    }).then((r) => r.json());

    /* 4️⃣ TECH STACK */
    const techStack = await fetch(`${API_BASE}/generate-tech-stack`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ problem }),
    }).then((r) => r.json());

    /* 5️⃣ ROADMAP */
    const roadmap = await fetch(`${API_BASE}/generate-mvp-roadmap`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ problem }),
    }).then((r) => r.json());

    /* 6️⃣ SHAPE DATA FOR UI (align keys with ResultsTabs) */
    setResults({
      analysis: {
        title: analysis.title,
        content: analysis.content,
        keyPoints: analysis.keyPoints ?? [],
      },

      idea: {
        title: idea.title,
        content: idea.content,
        items: idea.items ?? [],
      },

      features: {
        title: features.title,
        content: features.content,
        items: features.items ?? [],
      },

      tech_stack: {
        title: techStack.title,
        content: techStack.content,
        recommendations: techStack.recommendations ?? [],
      },

      roadmap: {
        title: roadmap.title,
        content: roadmap.content,
        phases: roadmap.phases ?? [],
      },
    });
  } catch (error) {
    console.error("Failed to generate insights:", error);
  } finally {
    setIsAnalyzing(false);
  }
};


  const handleViewDemo = () => {
    setProblem(
      "Our SaaS platform targets small businesses, but we're struggling with customer retention. We experience high churn in the first month due to complex onboarding. We need to make the experience seamless and intuitive for non-technical users."
    )

    setTimeout(() => {
      handleAnalyze()
    }, 100)
  }

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div
        className="fixed inset-0 opacity-25 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/images/cube.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <HeroSection onViewDemo={handleViewDemo} />

        <main className="flex-grow mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <ProblemInput
            problem={problem}
            setProblem={setProblem}
            onAnalyze={handleAnalyze}
            isAnalyzing={isAnalyzing}
          />

          {results && (
            <ResultsTabs
              results={results}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}
        </main>

        <footer className="border-t border-primary/15 bg-background/60 backdrop-blur-sm py-8 mt-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <p className="text-sm text-muted-foreground/70">
              © 2026 Problix — Where problems turn into powerful ideas.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
