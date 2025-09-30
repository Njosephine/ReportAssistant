interface ReportOutput {
  drug: string;
  adverse_events: string[];
  severity: string;
  outcome: string;
}

interface ResultsSectionProps {
  data: ReportOutput;
}

export default function ResultsSection({ data }: ResultsSectionProps) {
  const getSeverityColor = (severity: string): string => {
    switch (severity.toLowerCase()) {
      case 'severe':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'moderate':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'mild':
        return 'text-green-600 bg-green-50 border-green-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getOutcomeColor = (outcome: string): string => {
    switch (outcome.toLowerCase()) {
      case 'recovered':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'ongoing':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'fatal':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Processing Results</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Drug Card */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Drug Name</h3>
          <p className="text-lg font-semibold text-gray-800">{data.drug}</p>
        </div>

        {/* Severity Card */}
        <div className={`border rounded-lg p-4 ${getSeverityColor(data.severity)}`}>
          <h3 className="text-sm font-medium mb-1">Severity</h3>
          <p className="text-lg font-semibold capitalize">{data.severity}</p>
        </div>

        {/* Outcome Card */}
        <div className={`border rounded-lg p-4 ${getOutcomeColor(data.outcome)}`}>
          <h3 className="text-sm font-medium mb-1">Outcome</h3>
          <p className="text-lg font-semibold capitalize">{data.outcome}</p>
        </div>

        {/* Adverse Events Card */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Adverse Events</h3>
          {data.adverse_events.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {data.adverse_events.map((event, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                >
                  {event}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No adverse events detected</p>
          )}
        </div>
      </div>

      {/* Summary Table */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Structured Data</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Field
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Drug Name
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {data.drug}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Adverse Events
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {data.adverse_events.join(', ') || 'None detected'}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Severity
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(data.severity)}`}>
                    {data.severity}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Outcome
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getOutcomeColor(data.outcome)}`}>
                    {data.outcome}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}