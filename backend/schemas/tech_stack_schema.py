from pydantic import BaseModel
from typing import List

class TechStack(BaseModel):
    frontend: List[str]
    backend: List[str]
    ai: List[str]
    database: List[str]
    deployment: List[str]
    architecture_overview: str
