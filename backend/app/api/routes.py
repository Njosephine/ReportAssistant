from fastapi import APIRouter
from app.schemas import ReportInput, ReportOutput
from app.processing.processor import process_adr_report

router = APIRouter()

@router.post("/process-report", response_model=ReportOutput)
async def process_report(report_input: ReportInput):
    """
    Process an adverse drug reaction report and extract structured information.
    """
    return process_adr_report(report_input.report)