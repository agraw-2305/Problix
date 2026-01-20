from pathlib import Path
import os
import json
from dotenv import load_dotenv

from schemas.feature_schema import FeatureBreakdown
from ai.mock_features import mock_feature_breakdown

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
DEFAULT_PROMPT_PATH: Path = BASE_DIR / "prompts" / "feature_breakdown.txt"
ENV_PROMPT_DIR = os.getenv("PROMPT_DIR")
PROMPT_PATH: Path = (
    Path(ENV_PROMPT_DIR) / "feature_breakdown.txt"
    if ENV_PROMPT_DIR and (Path(ENV_PROMPT_DIR) / "feature_breakdown.txt").exists()
    else DEFAULT_PROMPT_PATH
)

# -------------------------------------------------
# Main function
# -------------------------------------------------

def generate_feature_breakdown(product_idea: dict) -> FeatureBreakdown:
    """
    Generate feature breakdown for a product idea.
    Uses mock data if AI_MODE=mock, otherwise calls Gemini.
    """

    # 🧠 MOCK MODE
    if AI_MODE == "mock":
        return mock_feature_breakdown()

    # 🔥 LIVE MODE (Gemini)
    from google import genai

    client = genai.Client(api_key=API_KEY) if API_KEY else genai.Client()

    prompt_template: str = PROMPT_PATH.read_text(encoding="utf-8")

    prompt: str = prompt_template.replace(
        "{{product_json}}",
        json.dumps(product_idea, indent=2)
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

    return FeatureBreakdown(**data)
