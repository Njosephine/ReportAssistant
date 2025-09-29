
from pydantic import BaseModel
from typing import List

# Input model
class ReportRequest(BaseModel):
    report: str

# Output model
class ReportResponse(BaseModel):
    drug: str
    adverse_events: List[str]
    severity: str
    outcome: str
