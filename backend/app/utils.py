from typing import List, Tuple

def extract_fields(report_text: str) -> Tuple[str, List[str], str, str]:
    # Extract drug
    if "Drug X" in report_text:
        drug = "Drug X"
    else:
        drug = "Unknown"

    # Extract adverse events
    possible_events = ["nausea", "headache", "dizziness", "fatigue", "rash"]
    adverse_events = [event for event in possible_events if event in report_text.lower()]

    # Extract severity
    if "severe" in report_text.lower():
        severity = "severe"
    elif "moderate" in report_text.lower():
        severity = "moderate"
    else:
        severity = "mild"

    # Extract outcome
    if "recovered" in report_text.lower():
        outcome = "recovered"
    elif "fatal" in report_text.lower():
        outcome = "fatal"
    else:
        outcome = "ongoing"

    return drug, adverse_events, severity, outcome
