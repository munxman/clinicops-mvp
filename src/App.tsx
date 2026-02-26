import { useState } from 'react'
import './App.css'

type Task = {
  id: number
  title: string
  category: string
  status: 'pending' | 'automated' | 'done'
  timeSaved: string
}

const initialTasks: Task[] = [
  { id: 1, title: 'Patient intake forms processing', category: 'Admin', status: 'automated', timeSaved: '2h/day' },
  { id: 2, title: 'Appointment reminder calls', category: 'Scheduling', status: 'automated', timeSaved: '1.5h/day' },
  { id: 3, title: 'Insurance verification', category: 'Billing', status: 'automated', timeSaved: '3h/day' },
  { id: 4, title: 'Lab result follow-up notifications', category: 'Clinical', status: 'automated', timeSaved: '1h/day' },
  { id: 5, title: 'Staff schedule optimization', category: 'Operations', status: 'automated', timeSaved: '45min/day' },
  { id: 6, title: 'Prescription refill requests', category: 'Clinical', status: 'pending', timeSaved: '1h/day' },
  { id: 7, title: 'Patient satisfaction surveys', category: 'Quality', status: 'pending', timeSaved: '30min/day' },
  { id: 8, title: 'Vendor invoice reconciliation', category: 'Billing', status: 'pending', timeSaved: '1h/day' },
]

function App() {
  const [tasks] = useState<Task[]>(initialTasks)
  const [activeTab, setActiveTab] = useState<'dashboard' | 'tasks' | 'roi' | 'about'>('dashboard')

  const automated = tasks.filter(t => t.status === 'automated')
  const pending = tasks.filter(t => t.status === 'pending')

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <h1>ClinicOps AI</h1>
        </div>
        <p className="tagline">Automate the mundane. Focus on patients.</p>
      </header>

      <nav className="nav">
        {(['dashboard', 'tasks', 'roi', 'about'] as const).map(tab => (
          <button
            key={tab}
            className={`nav-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'dashboard' ? '📊 Dashboard' : tab === 'tasks' ? '✅ Tasks' : tab === 'roi' ? '💰 ROI' : '📋 About'}
          </button>
        ))}
      </nav>

      <main className="main">
        {activeTab === 'dashboard' && (
          <div className="dashboard">
            <div className="stats-grid">
              <div className="stat-card highlight">
                <div className="stat-number">9.25h</div>
                <div className="stat-label">Hours Saved Daily</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{automated.length}</div>
                <div className="stat-label">Tasks Automated</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{pending.length}</div>
                <div className="stat-label">Ready to Automate</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">$4,200</div>
                <div className="stat-label">Monthly Savings</div>
              </div>
            </div>

            <div className="section">
              <h2>🎯 Your Clinic at a Glance</h2>
              <p>As a clinic leader, you spend <strong>60% of your day on tasks that don't require a medical degree</strong>. ClinicOps AI identifies and automates those tasks so you can focus on what matters: your patients and your team.</p>
            </div>

            <div className="section">
              <h2>🔥 Top Pain Points We Solve</h2>
              <div className="pain-points">
                <div className="pain-card">
                  <h3>📋 Endless Paperwork</h3>
                  <p>Intake forms, insurance verification, referral letters — automated end-to-end.</p>
                </div>
                <div className="pain-card">
                  <h3>📞 No-Show Patients</h3>
                  <p>Smart reminders via SMS, email, and voice reduce no-shows by up to 40%.</p>
                </div>
                <div className="pain-card">
                  <h3>💸 Revenue Leakage</h3>
                  <p>Catch missed charges, optimize coding, and automate collections follow-up.</p>
                </div>
                <div className="pain-card">
                  <h3>😰 Staff Burnout</h3>
                  <p>Remove repetitive tasks from your team's plate. Happier staff = better care.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="tasks">
            <h2>✅ Automated Tasks</h2>
            <div className="task-list">
              {automated.map(task => (
                <div key={task.id} className="task-item automated">
                  <span className="task-status">🟢</span>
                  <div className="task-info">
                    <strong>{task.title}</strong>
                    <span className="task-category">{task.category}</span>
                  </div>
                  <span className="task-time">Saving {task.timeSaved}</span>
                </div>
              ))}
            </div>

            <h2>⏳ Ready to Automate</h2>
            <div className="task-list">
              {pending.map(task => (
                <div key={task.id} className="task-item pending">
                  <span className="task-status">🟡</span>
                  <div className="task-info">
                    <strong>{task.title}</strong>
                    <span className="task-category">{task.category}</span>
                  </div>
                  <span className="task-time">Could save {task.timeSaved}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'roi' && (
          <div className="roi">
            <h2>💰 ROI Calculator</h2>
            <div className="roi-grid">
              <div className="roi-card">
                <h3>Daily Time Saved</h3>
                <div className="roi-value">9.25 hours</div>
                <p>Across all automated tasks</p>
              </div>
              <div className="roi-card">
                <h3>Monthly Cost Savings</h3>
                <div className="roi-value">$4,200</div>
                <p>Based on avg. admin salary $22/hr</p>
              </div>
              <div className="roi-card">
                <h3>Annual Impact</h3>
                <div className="roi-value">$50,400</div>
                <p>Direct labor cost reduction</p>
              </div>
              <div className="roi-card">
                <h3>Additional Revenue</h3>
                <div className="roi-value">$18,000/yr</div>
                <p>From reduced no-shows & better collections</p>
              </div>
            </div>
            <div className="section">
              <h2>📈 12-Month Projection</h2>
              <p><strong>Total annual value: ~$68,400</strong> — combining direct savings ($50,400) with revenue recovery ($18,000). Most clinics see ROI within the first 30 days.</p>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="about">
            <h2>📋 About ClinicOps AI</h2>
            <div className="section">
              <p><strong>ClinicOps AI</strong> is built by physicians who understand the daily grind of running a clinic. We've been there — drowning in admin, missing family dinners, burning out.</p>
              <p>Our mission: <strong>give clinic leaders their time back</strong> by automating every task that doesn't require a medical license.</p>
            </div>
            <div className="section">
              <h3>How It Works</h3>
              <ol>
                <li><strong>Audit:</strong> We analyze your clinic's workflow and identify automation opportunities.</li>
                <li><strong>Prioritize:</strong> We rank tasks by time saved and implementation ease.</li>
                <li><strong>Automate:</strong> We deploy AI agents that handle each task end-to-end.</li>
                <li><strong>Monitor:</strong> Real-time dashboard shows savings, performance, and ROI.</li>
              </ol>
            </div>
            <div className="cta-section">
              <h3>Ready to reclaim your time?</h3>
              <button className="cta-btn" onClick={() => window.open('mailto:hello@clinicops.ai?subject=Demo Request', '_blank')}>
                Book a Free Clinic Audit →
              </button>
              <p className="cta-note">15-minute call. No commitment. See your savings estimate.</p>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© 2026 ClinicOps AI — Built by physicians, for physicians.</p>
      </footer>
    </div>
  )
}

export default App
