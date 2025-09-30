from typing import List
from app.processing.extractors import (
    extract_drug,
    extract_adverse_events,
    extract_severity,
    extract_outcome
)
from app.schemas import ReportOutput

def process_adr_report(report_text: str) -> ReportOutput:
    """
    Main processing function that orchestrates all extraction steps.
    """
    if not report_text or not report_text.strip():
        raise ValueError("Report text cannot be empty")

    report_text = report_text.strip()

    # Extract all fields
    drug = extract_drug(report_text)
    adverse_events = extract_adverse_events(report_text)
    severity = extract_severity(report_text)
    outcome = extract_outcome(report_text)

    # Handle edge cases
    if not adverse_events:
        adverse_events = ["unspecified adverse event"]

    return ReportOutput(
        drug=drug,
        adverse_events=adverse_events,
        severity=severity,
        outcome=outcome
    )