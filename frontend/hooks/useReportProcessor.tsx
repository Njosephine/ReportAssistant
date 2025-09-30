import { useState } from 'react';
import { processReport, ReportOutput } from '../lib/api';

export function useReportProcessor() {
  const [result, setResult] = useState<ReportOutput | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const process = async (reportText: string) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data: ReportOutput = await processReport(reportText);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setResult(null);
    setLoading(false);
    setError(null);
  };

  return { result, loading, error, process, clear };
}