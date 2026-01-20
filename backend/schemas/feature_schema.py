from pydantic import BaseModel, Field
from typing import List

class FeatureBreakdown(BaseModel):
    core_features: List[str] = Field(min_items=1)
    advanced_features: List[str]
    ai_features: List[str]
