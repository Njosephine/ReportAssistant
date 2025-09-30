from pydantic import BaseModel
from typing import List

class ReportInput(BaseModel):
    report: str

class ReportOutput(BaseModel):
    drug: str
    adverse_events: List[str]
    severity: str
    outcome: str