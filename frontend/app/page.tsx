'use client';

import { useState, useCallback } from 'react';
import { useReportProcessor } from '../hooks/useReportProcessor';
import InputSection from '../components/InputSection';
import ResultsSection from '../components/ResultsSection';

export default function Home() {
  const [reportText, setReportText] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const { result, loading, error, process, clear } = useReportProcessor();

  const handleFileUpload = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setReportText(content);
    };
    reader.readAsText(file);
  }, []);

  const handleProcess = useCallback(() => {
    process(reportText);
  }, [process, reportText]);

  const handleClear = useCallback(() => {
    setReportText('');
    setFile(null);
    clear();
  }, [clear]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Mini Regulatory Report Assistant
          </h1>
          <p className="text-gray-600">
            Extract structured information from medical reports
          </p>
        </div>

        {/* Input Section */}
        <InputSection
          reportText={reportText}
          onReportChange={setReportText}
          onFileUpload={handleFileUpload}
          onProcess={handleProcess}
          onClear={handleClear}
          loading={loading}
          error={error}
        />

        {/* Results Section */}
        {result && <ResultsSection data={result} />}
      </div>
    </div>
  );
}