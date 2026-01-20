from pathlib import Path
import os
import json
from dotenv import load_dotenv
from google import genai
from schemas.problem_schema import ProblemAnalysis
from ai.mock_data import mock_problem_analysis

# 1️⃣ Load env FIRST
load_dotenv()

# 2️⃣ Read AI_MODE
AI_MODE = os.getenv("AI_MODE", "mock")

# 3️⃣ Paths
BASE_DIR = Path(__file__).resolve().parent.parent
DEFAULT_PROMPT_PATH = BASE_DIR / "prompts" / "problem_analysis.txt"
ENV_PROMPT_DIR = os.getenv("PROMPT_DIR")
PROMPT_PATH = (
    Path(ENV_PROMPT_DIR) / "problem_analysis.txt"
    if ENV_PROMPT_DIR and (Path(ENV_PROMPT_DIR) / "problem_analysis.txt").exists()
    else DEFAULT_PROMPT_PATH
)

# 4️⃣ Gemini client (reads GOOGLE_API_KEY or GEMINI_API_KEY)
API_KEY = os.getenv("GOOGLE_API_KEY") or os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=API_KEY) if API_KEY else genai.Client()

# 5️⃣ Model (configurable via env)
GEMINI_MODEL = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")


def analyze_problem(problem_text: str) -> ProblemAnalysis:
    # 🧠 MOCK MODE
    if AI_MODE == "mock":
        return mock_problem_analysis()

    # 🔥 LIVE MODE
    prompt_template = PROMPT_PATH.read_text(encoding="utf-8")
    prompt = prompt_template.replace("{{problem}}", problem_text)

    response = client.models.generate_content(
        model=GEMINI_MODEL,
        contents=prompt
    )

    if not response.text:
        raise ValueError("Gemini returned empty response")

    raw = response.text.strip()

    if raw.startswith("```"):
        raw = raw.strip("```").replace("json", "").strip()

    data = json.loads(raw)

    # --- NORMALIZE AI OUTPUT (CRITICAL) ---

    if isinstance(data.get("target_users"), str):
        data["target_users"] = [
            u.strip() for u in data["target_users"].split(",") if u.strip()
        ]

    if isinstance(data.get("pain_points"), str):
        data["pain_points"] = [
            p.strip() for p in data["pain_points"].split(",") if p.strip()
        ]

    if isinstance(data.get("constraints"), str):
        data["constraints"] = [
            c.strip() for c in data["constraints"].split(",") if c.strip()
        ]

    return ProblemAnalysis(**data)
