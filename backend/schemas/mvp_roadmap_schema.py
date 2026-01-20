from pydantic import BaseModel
from typing import List

class MVPDayPlan(BaseModel):
    day: str
    goals: List[str]
    deliverables: List[str]

class MVPRoadmap(BaseModel):
    mvp_scope: List[str]
    roadmap: List[MVPDayPlan]
    demo_focus: str
    future_scope: List[str]
