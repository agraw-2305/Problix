from pydantic import BaseModel

class ProductIdea(BaseModel):
    product_name: str
    one_liner_pitch: str
    value_proposition: str
    key_differentiator: str
    target_impact: str
