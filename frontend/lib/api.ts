export interface ReportOutput {
  drug: string;
  adverse_events: string[];
  severity: string;
  outcome: string;
}

export interface ProcessingResult {
   result:ReportOutput | null;
  loading: boolean;
  error: string | null;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export async function processReport(reportText: string): Promise<ReportOutput> {
  if (!reportText.trim()) {
    throw new Error('Please enter or upload a report');
  }

  const response = await fetch(`${API_BASE_URL}/process-report`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ report: reportText }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || 'Failed to process report');
  }

  return response.json();
}