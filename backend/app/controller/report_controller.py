from app.models import ReportRequest, ReportResponse
from app.utils import extract_fields

def process_report_logic(request: ReportRequest) -> ReportResponse:
    drug, adverse_events, severity, outcome = extract_fields(request.report)
    return ReportResponse(
        drug=drug,
        adverse_events=adverse_events,
        severity=severity,
        outcome=outcome
    )
