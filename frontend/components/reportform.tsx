'use client'

import React, { useState } from 'react'
import axios from 'axios'
import './ReportForm.css'

interface ReportFormProps {
  onSaved: () => void
}

export default function ReportForm({ onSaved }: ReportFormProps) {
  const [reportText, setReportText] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedText = reportText.trim()
    if (!trimmedText) {
      alert('Please enter a report.')
      return
    }

    setLoading(true)
    try {
      await axios.post('http://127.0.0.1:8000/process-report', { report: trimmedText })
      setReportText('')
      onSaved()
    } catch (err: any) {
      console.error('Error processing report:', err.response || err)
      alert('There was an error processing the report. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="report-text" className="form-label">
        Medical Report
      </label>
      <textarea
        id="report-text"
        className="form-textarea"
        value={reportText}
        onChange={(e) => setReportText(e.target.value)}
        placeholder="Enter medical report here..."
        rows={5}
        disabled={loading}
        aria-disabled={loading}
      />
      <button type="submit" disabled={loading} className="form-button">
        {loading ? 'Processing...' : 'Process Report'}
      </button>
    </form>
  )
}
