import React, { useState } from 'react';

interface InputSectionProps {
  reportText: string;
  onReportChange: (text: string) => void;
  onFileUpload: (file: File) => void;
  onProcess: () => void;
  onClear: () => void;
  loading: boolean;
  error: string | null;
}

export default function InputSection({
  reportText,
  onReportChange,
  onFileUpload,
  onProcess,
  onClear,
  loading,
  error
}: InputSectionProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileUpload(file);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="mb-6">
        <label htmlFor="reportInput" className="block text-sm font-medium text-gray-700 mb-2">
          Medical Report
        </label>
        <textarea
          id="reportInput"
          value={reportText}
          onChange={(e) => onReportChange(e.target.value)}
          placeholder="Enter or paste your medical report here..."
          className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          disabled={loading}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Or upload a file
          </label>
          <div className="flex items-center">
            <label className="flex-1 cursor-pointer">
              <div className="flex items-center justify-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors">
                <span className="text-sm text-gray-600">
                  {selectedFile ? selectedFile.name : 'Choose file (.txt)'}
                </span>
              </div>
              <input
                type="file"
                accept=".txt,.text"
                onChange={handleFileChange}
                className="hidden"
                disabled={loading}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onProcess}
          disabled={loading || !reportText.trim()}
          className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          {loading ? 'Processing...' : 'Process Report'}
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          Clear
        </button>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 border border-red-200 rounded-lg">
          {error}
        </div>
      )}
    </div>
  );
}