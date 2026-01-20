import { API_BASE } from "./api"

/* ======================================================
   STEP 1: ANALYZE PROBLEM
====================================================== */

export async function analyzeProblem(problem: string) {
  const res = await fetch(`${API_BASE}/analyze-problem`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ problem }),
  })

  const raw = await res.json()

  return {
    domain: raw.domain,
    core_problem: raw.core_problem,
    pain_points: raw.pain_points ?? [],
    constraints: raw.constraints ?? [],
    target_users: raw.target_users ?? [],
  }
}

/* ======================================================
   STEP 2–5: FULL PRODUCT PIPELINE
====================================================== */

export async function generateFullProduct(problem: string) {
  /* ---------- 1️⃣ ANALYSIS ---------- */
  const analysis = await analyzeProblem(problem)

  const analysisUI = {
    title: `Problem Analysis (${analysis.domain})`,
    content: analysis.core_problem,
    keyPoints: [
      ...analysis.pain_points,
      ...analysis.constraints,
    ],
  }

  /* ---------- 2️⃣ IDEA ---------- */
  const ideaRes = await fetch(`${API_BASE}/generate-idea`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(analysis),
  }).then(r => r.json())

  const ideasUI = {
    title: ideaRes.product_name,
    content: ideaRes.one_liner_pitch,
    items: [
      ideaRes.value_proposition,
      ideaRes.key_differentiator,
      ideaRes.target_impact,
    ],
  }

  /* ---------- 3️⃣ FEATURES ---------- */
  const featureRes = await fetch(`${API_BASE}/generate-features`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ideaRes),
  }).then(r => r.json())

  const featuresUI = {
    title: "Feature Breakdown",
    content: "Core and advanced features required for MVP",
    items: [
      ...(featureRes.core_features ?? []),
      ...(featureRes.advanced_features ?? []),
      ...(featureRes.ai_features ?? []),
    ],
  }

  /* ---------- 4️⃣ TECH STACK ---------- */
  const techRes = await fetch(`${API_BASE}/generate-tech-stack`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      analysis,
      idea: ideaRes,
      features: featureRes,
    }),
  }).then(r => r.json())

  const techStackUI = {
    title: "Recommended Tech Stack",
    content: techRes.architecture_overview,
    recommendations: [
      { category: "Frontend", tech: techRes.frontend?.join(", ") },
      { category: "Backend", tech: techRes.backend?.join(", ") },
      { category: "AI", tech: techRes.ai?.join(", ") },
      { category: "Database", tech: techRes.database?.join(", ") },
      { category: "Deployment", tech: techRes.deployment?.join(", ") },
    ],
  }

  /* ---------- 5️⃣ ROADMAP ---------- */
  const roadmapRes = await fetch(`${API_BASE}/generate-mvp-roadmap`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      analysis,
      idea: ideaRes,
      features: featureRes,
      techStack: techRes,
    }),
  }).then(r => r.json())

  const roadmapUI = {
    title: "MVP Roadmap",
    content: roadmapRes.demo_focus,
    phases: (roadmapRes.roadmap ?? []).map((r: any) => ({
    name: r.day,
    timeline: r.day,
    focus: (r.goals ?? []).join(", "),
})),

  }

  /* ---------- FINAL OBJECT ---------- */
  return {
    analysis: analysisUI,
    ideas: ideasUI,
    features: featuresUI,
    techStack: techStackUI,
    roadmap: roadmapUI,
  }
}
