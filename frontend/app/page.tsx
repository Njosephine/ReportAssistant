'use client'
import './pages.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReportForm from '../components/reportform'
import ReportCard from '../components/reportcard'

interface Report {
  id: number
  raw: string
  drug?: string
  adverse_events?: string[]
  severity?: string
  outcome?: string
}

export default function Home() {
  const [reports, setReports] = useState<Report[]>([])

  const fetchReports = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/reports')
      setReports(res.data)
    } catch (err) {
      console.error('Error fetching reports:', err)
    }
  }

  useEffect(() => {
    fetchReports()
  }, [])

   return (
    <div className="home-container">
      <h1 className="home-title">Mini Regulatory Report Assistant</h1>
      <ReportForm onSaved={fetchReports} />

      <h2 className="home-subtitle">History</h2>
      <div className="report-cards-grid">
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>
    </div>
  )
}
