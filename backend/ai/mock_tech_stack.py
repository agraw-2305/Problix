from schemas.tech_stack_schema import TechStack

def mock_tech_stack() -> TechStack:
    return TechStack(
        frontend=["Next.js", "Tailwind CSS"],
        backend=["FastAPI", "Python"],
        ai=["Gemini API", "Prompt engineering templates"],
        database=["Supabase (PostgreSQL)", "Row-level security for multi-tenant use"],
        deployment=["Vercel (Frontend)", "Render (Backend)", "GitHub Actions CI"],
        architecture_overview=(
            "The frontend collects the problem statement and sends it to the backend API. "
            "FastAPI orchestrates the AI pipeline, calling analysis, ideation, and feature modules. "
            "Structured outputs are returned to the frontend and optionally stored in Supabase for later review, "
            "team collaboration, and iteration."
        )
    )
