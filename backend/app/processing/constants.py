# Severity keywords mapping
SEVERITY_KEYWORDS = {
    'severe': [
        'severe', 'serious', 'critical', 'life-threatening', 'extreme',
        'grave', 'acute', 'intense', 'harsh', 'drastic'
    ],
    'moderate': [
        'moderate', 'medium', 'significant', 'considerable',
        'noticeable', 'appreciable', 'fair', 'average'
    ],
    'mild': [
        'mild', 'slight', 'minor', 'light', 'minimal',
        'gentle', 'soft', 'subtle', 'negligible'
    ]
}

# Outcome keywords mapping
OUTCOME_KEYWORDS = {
    'recovered': [
        'recovered', 'resolved', 'improved', 'healed', 'cured',
        'discharged', 'remission', 'relief', 'better', 'well'
    ],
    'ongoing': [
        'ongoing', 'continuing', 'persistent', 'chronic', 'current',
        'still experiencing', 'continues', 'remains', 'present', 'active'
    ],
    'fatal': [
        'fatal', 'death', 'died', 'deceased', 'passed away', 'expired',
        'mortality', 'lethal', 'deadly', 'terminal'
    ]
}

# Comprehensive list of adverse events
ADVERSE_EVENTS = [
    # Gastrointestinal
    'nausea', 'vomiting', 'diarrhea', 'constipation', 'abdominal pain',
    'heartburn', 'indigestion', 'bloating', 'gas', 'loss of appetite',

    # Neurological
    'headache', 'dizziness', 'fatigue', 'drowsiness', 'insomnia',
    'tremor', 'seizure', 'confusion', 'memory loss', 'numbness',

    # Dermatological
    'rash', 'itching', 'hives', 'swelling', 'redness',
    'bruising', 'hair loss', 'dry skin', 'acne', 'blistering',

    # Cardiovascular
    'chest pain', 'palpitations', 'high blood pressure', 'low blood pressure',
    'irregular heartbeat', 'shortness of breath', 'fainting',

    # Psychological
    'anxiety', 'depression', 'mood swings', 'irritability', 'hallucination',
    'panic attack', 'restlessness', 'agitation',

    # Other
    'fever', 'chills', 'sweating', 'weight gain', 'weight loss',
    'muscle pain', 'joint pain', 'back pain', 'bleeding', 'anemia',
    'allergic reaction', 'anaphylaxis', 'difficulty breathing'
]