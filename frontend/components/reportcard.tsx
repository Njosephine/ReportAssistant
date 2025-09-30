'use client'

import React from 'react'

interface Report {
  id: number
  raw: string
  drug?: string
  adverse_events?: string[]
  severity?: string
  outcome?: string
}

interface ReportCardProps {
  report: Report
}

export default function ReportCard({ report }: ReportCardProps) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 12, borderRadius: 6 }}>
      <div><strong>Report #{report.id}</strong></div>
      <div><em>{report.raw}</em></div>
      <div>Drug: {report.drug || '—'}</div>
      <div>
        Adverse events: {report.adverse_events?.length ? report.adverse_events.join(', ') : '—'}
      </div>
      <div>Severity: {report.severity || '—'}</div>
      <div>Outcome: {report.outcome || '—'}</div>
    </div>
  )
}
