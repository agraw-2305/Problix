from pathlib import Path
import os
import json
from dotenv import load_dotenv

from schemas.mvp_roadmap_schema import MVPRoadmap
from ai.mock_mvp_roadmap import mock_mvp_roadmap

# -------------------------------------------------
# Environment setup
# -------------------------------------------------

load_dotenv()
AI_MODE: str = os.getenv("AI_MODE", "mock")
API_KEY: str | None = os.getenv("GOOGLE_API_KEY") or os.getenv("GEMINI_API_KEY")
GEMINI_MODEL: str = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")

# -------------------------------------------------
# Prompt path (absolute & safe) with optional PROMPT_DIR override
# -------------------------------------------------

BASE_DIR: Path = Path(__file__).resolve().parent.parent
DEFAULT_PROMPT_PATH: Path = BASE_DIR / "prompts" / "mvp_roadmap.txt"
ENV_PROMPT_DIR = os.getenv("PROMPT_DIR")
PROMPT_PATH: Path = (
    Path(ENV_PROMPT_DIR) / "mvp_roadmap.txt"
    if ENV_PROMPT_DIR and (Path(ENV_PROMPT_DIR) / "mvp_roadmap.txt").exists()
    else DEFAULT_PROMPT_PATH
)

# -------------------------------------------------
# Main function
# -------------------------------------------------

def generate_mvp_roadmap(context: dict) -> MVPRoadmap:
    """
    Generate an MVP roadmap.
    Uses mock data if AI_MODE=mock, otherwise calls Gemini.
    """

    # 🧠 MOCK MODE
    if AI_MODE == "mock":
        return mock_mvp_roadmap()

    # 🔥 LIVE MODE (Gemini)
    from google import genai
    client = genai.Client(api_key=API_KEY) if API_KEY else genai.Client()

    prompt_template: str = PROMPT_PATH.read_text(encoding="utf-8")

    prompt: str = prompt_template.replace(
        "{{context_json}}",
        json.dumps(context, indent=2)
    )

    response = client.models.generate_content(
        model=GEMINI_MODEL,
        contents=prompt
    )

    if not response.text:
        raise ValueError("Gemini returned empty response")

    raw: str = response.text.strip()

    if raw.startswith("```"):
        raw = raw.replace("```json", "").replace("```", "").strip()

    data: dict = json.loads(raw)

    return MVPRoadmap(**data)
