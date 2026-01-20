from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from ai.problem_parser import analyze_problem
from ai.idea_generator import generate_product_idea
from ai.feature_generator import generate_feature_breakdown
from ai.tech_stack_generator import generate_tech_stack
from ai.mvp_roadmap_generator import generate_mvp_roadmap

from ai.mock_data import mock_problem_analysis
from ai.mock_product_idea import mock_product_idea
from ai.mock_features import mock_feature_breakdown
from ai.mock_tech_stack import mock_tech_stack
from ai.mock_mvp_roadmap import mock_mvp_roadmap

from schemas.product_schema import ProductIdea
from schemas.feature_schema import FeatureBreakdown
from schemas.tech_stack_schema import TechStack
from schemas.mvp_roadmap_schema import MVPRoadmap
from schemas.problem_schema import ProblemAnalysis


# ---------------- APP ----------------
app = FastAPI(title="Problix")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:3001",
        "http://127.0.0.1:3001",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------- REQUEST MODELS ----------------
class ProblemRequest(BaseModel):
    problem: str


# ---------------- ROUTES ----------------

@app.post("/analyze-problem")
def analyze(request: ProblemRequest):
    try:
        analysis: ProblemAnalysis = analyze_problem(request.problem)
    except Exception:
        analysis = mock_problem_analysis()

    return {
        "title": f"Problem Analysis ({analysis.domain})",
        "content": analysis.core_problem,
        "keyPoints": analysis.pain_points + analysis.constraints,
    }


@app.post("/generate-idea")
def generate_idea(request: ProblemRequest):
    try:
        idea: ProductIdea = generate_product_idea(request.problem)
    except Exception:
        idea = mock_product_idea()

    return {
        "title": idea.product_name,
        "content": idea.one_liner_pitch,
        "items": [
            f"Value Proposition: {idea.value_proposition}",
            f"Key Differentiator: {idea.key_differentiator}",
            f"Target Impact: {idea.target_impact}",
        ],
    }


@app.post("/generate-features")
def generate_features(request: ProblemRequest):
    try:
        features: FeatureBreakdown = generate_feature_breakdown(request.problem)
    except Exception:
        features = mock_feature_breakdown()

    return {
        "title": "MVP Feature Breakdown",
        "content": (
            "A structured breakdown of core, advanced, and AI-powered features "
            "required to build a scalable and intelligent MVP."
        ),
        "items": (
            features.core_features
            + features.advanced_features
            + features.ai_features
        ),
    }

@app.post("/generate-tech-stack")
def tech_stack(request: ProblemRequest):
    try:
        stack: TechStack = generate_tech_stack(request.problem)
    except Exception:
        stack = mock_tech_stack()

    return {
        "title": "Recommended Tech Stack",
        "content": stack.architecture_overview,
        "recommendations": [
            {
                "category": "Frontend",
                "tech": ", ".join(stack.frontend),
            },
            {
                "category": "Backend",
                "tech": ", ".join(stack.backend),
            },
            {
                "category": "AI",
                "tech": ", ".join(stack.ai),
            },
            {
                "category": "Database",
                "tech": ", ".join(stack.database),
            },
            {
                "category": "Deployment",
                "tech": ", ".join(stack.deployment),
            },
        ],
    }



@app.post("/generate-mvp-roadmap")
def mvp_roadmap(request: ProblemRequest):
    try:
        roadmap: MVPRoadmap = generate_mvp_roadmap(request.problem)
    except Exception:
        roadmap = mock_mvp_roadmap()

    phases = []

    for step in roadmap.roadmap:
        phases.append({
            "name": step.day,
            "timeline": step.day,
            "focus": (
                "Goals: "
                + "; ".join(step.goals)
                + " | Deliverables: "
                + "; ".join(step.deliverables)
            )
        })

    return {
        "title": "MVP Roadmap",
        "content": roadmap.demo_focus,
        "phases": phases,
    }



@app.get("/")
def root():
    return {
        "status": "ok",
        "message": "FastAPI backend is running"
    }
