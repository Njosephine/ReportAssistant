from fastapi import APIRouter
from app.models import ReportRequest, ReportResponse
from app.controller.report_controller import process_report_logic

router = APIRouter()

@router.post("/process-report", response_model=ReportResponse)
def process_report(request: ReportRequest):
    return process_report_logic(request)
