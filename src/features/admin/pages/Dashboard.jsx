import React from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts'

// ── Sample data ──────────────────────────────────────────────────
const chartData = [
  { month: 'Oct', students: 0 },
  { month: 'Nov', students: 0 },
  { month: 'Dec', students: 0 },
  { month: 'Jan', students: 0 },
  { month: 'Feb', students: 2 },
  { month: 'Mar', students: 1 },
]

const latestStudents = [
  { id: '#STD0001', name: 'Anagha', date: '27 Feb 2026', course: 'course3', avatar: 'AN' },
]

const batches = [
  { id: '#BTCH0001', name: 'b11', course: 'course1', date: '28 Feb 2026', students: 1 },
  { id: '#BTCH0002', name: 'b131', course: 'course3', date: '28 Feb 2026', students: 1 },
]

// ── Stat Card ─────────────────────────────────────────────────────
const StatCard = ({ label, value, icon, gradient }) => (
  <div className={`rounded-2xl p-5 flex items-center gap-4 text-white ${gradient} shadow-lg`}>
    <div className="text-4xl">{icon}</div>
    <div>
      <p className="text-3xl font-extrabold leading-none">{value}</p>
      <p className="text-sm font-medium opacity-85 mt-1">{label}</p>
    </div>
  </div>
)

// ── Dashboard ─────────────────────────────────────────────────────
const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* ── Stat cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <StatCard
          label="Total Students"
          value="1"
          icon="🎓"
          gradient="bg-gradient-to-br from-blue-500 to-blue-700"
        />
        <StatCard
          label="Course Offered"
          value="3"
          icon="📚"
          gradient="bg-gradient-to-br from-teal-400 to-emerald-600"
        />
        <StatCard
          label="Total Batches"
          value="2"
          icon="⭐"
          gradient="bg-gradient-to-br from-purple-500 to-purple-800"
        />
      </div>

      {/* ── Bottom section: Tables + Chart ── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

        {/* Latest Student Registrations */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
          <h2 className="text-base font-bold text-slate-800 mb-4">Latest Student Registrations</h2>
          <div className="space-y-3">
            {latestStudents.map((s) => (
              <div key={s.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition group cursor-pointer">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {s.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-700">{s.name}</p>
                  <p className="text-xs text-teal-500 font-medium">{s.id}</p>
                  <p className="text-xs text-slate-400">{s.course}</p>
                </div>
                <div className="text-slate-300 group-hover:text-teal-500 transition">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-sm text-teal-600 font-semibold flex items-center justify-end gap-1 hover:gap-2 transition-all">
            View all
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Batches */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
          <h2 className="text-base font-bold text-slate-800 mb-4">Batches</h2>
          <div className="space-y-3">
            {batches.map((b) => (
              <div key={b.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition group cursor-pointer">
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-400">{b.date}</p>
                  <p className="text-teal-600 text-sm font-bold">{b.id} | {b.name}</p>
                  <p className="text-sm text-slate-700 font-medium">{b.course}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-slate-500">{b.students} Students</p>
                  <div className="text-slate-300 group-hover:text-teal-500 transition mt-1">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-sm text-teal-600 font-semibold flex items-center justify-end gap-1 hover:gap-2 transition-all">
            View all
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Student Registration Chart */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-slate-800">Student Registration</h2>
            <button className="flex items-center gap-1 text-xs text-teal-600 font-semibold border border-teal-200 rounded-lg px-2 py-1 hover:bg-teal-50 transition">
              Last 6 months
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontSize: 12 }}
              />
              <Area
                type="monotone"
                dataKey="students"
                stroke="#14b8a6"
                strokeWidth={2.5}
                fill="url(#colorStudents)"
                dot={{ fill: '#14b8a6', strokeWidth: 2, r: 3 }}
                activeDot={{ r: 5, fill: '#14b8a6' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
