from pydantic import BaseModel
from typing import List
from pydantic import Field
class ProblemAnalysis(BaseModel):
    domain: str
    target_users: List[str] = Field(min_items=1)
    core_problem: str
    pain_points: List[str]
    constraints: List[str]
    severity_level: int = Field(ge=1, le=5)
