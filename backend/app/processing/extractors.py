import re
from typing import List

from app.processing.nlp_utils import preprocess_text, lemmatize_word

from app.processing.constants import (
    SEVERITY_KEYWORDS,
    OUTCOME_KEYWORDS,
    ADVERSE_EVENTS
)


def extract_drug(text: str) -> str:
    """Extract drug name using pattern matching"""
    drug_patterns = [
        r'drug\s+([A-Za-z0-9\s]+?)(?:\.|,|;|\s+|$)',
        r'medication\s+([A-Za-z0-9\s]+?)(?:\.|,|;|\s+|$)',
        r'the\s+drug\s+([A-Za-z0-9\s]+?)(?:\.|,|;|\s+|$)',
        r'([A-Za-z0-9\s]+?)\s+caused',
        r'after\s+taking\s+([A-Za-z0-9\s]+?)(?:\.|,|;|\s+|$)',
        r'following\s+administration\s+of\s+([A-Za-z0-9\s]+?)(?:\.|,|;|\s+|$)'
    ]

    for pattern in drug_patterns:
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            drug = match.group(1).strip()
            if drug.lower() not in ['the', 'a', 'an', '']:
                return drug

    return "Unknown Drug"


def extract_adverse_events(text: str) -> List[str]:
    """Extract adverse events using keyword matching and NLP preprocessing"""
    text_lower = text.lower()
    processed_tokens = preprocess_text(text_lower)
    processed_text = ' '.join(processed_tokens)

    found_events = []

    for event in ADVERSE_EVENTS:
        event_lemma = lemmatize_word(event)
        # Check both original and lemmatized forms
        if (event in text_lower or
                event_lemma in processed_text or
                event in processed_tokens):
            found_events.append(event)

    # Remove duplicates while preserving order
    return list(dict.fromkeys(found_events))


def extract_severity(text: str) -> str:
    """Extract severity level using keyword matching"""
    text_lower = text.lower()

    for severity, keywords in SEVERITY_KEYWORDS.items():
        for keyword in keywords:
            if keyword in text_lower:
                return severity

    return "moderate"


def extract_outcome(text: str) -> str:
    """Extract outcome using keyword matching"""
    text_lower = text.lower()

    for outcome, keywords in OUTCOME_KEYWORDS.items():
        for keyword in keywords:
            if keyword in text_lower:
                return outcome

    return "ongoing"