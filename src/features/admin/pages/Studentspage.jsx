import React, { useState, useRef, useEffect } from 'react'

// ─── Sample Data ─────────────────────────────────────────────────
const ALL_STUDENTS = [
  {
    id: 1, regNo: 'STD0001', name: 'Anagha Haridas', avatar: null, avatarBg: '#f59e0b',
    contact: '+91 8943127202', email: 'anagha@gmail.com',
    courses: ['course3', 'course1'], batches: ['b131', 'b11'],
    status: 'Active', tab: 'ongoing', joinDate: '2026-02-27',
  },
  {
    id: 2, regNo: 'STD0002', name: 'Rahul Menon', avatar: null, avatarBg: '#6366f1',
    contact: '+91 9876543210', email: 'rahul@gmail.com',
    courses: ['course2'], batches: ['b21'],
    status: 'Active', tab: 'ongoing', joinDate: '2026-01-15',
  },
  {
    id: 3, regNo: 'STD0003', name: 'Priya Nair', avatar: null, avatarBg: '#ec4899',
    contact: '+91 9123456789', email: 'priya@gmail.com',
    courses: ['course1', 'course3'], batches: [],
    status: 'Inactive', tab: 'unassigned', joinDate: '2026-03-01',
  },
  {
    id: 4, regNo: 'STD0004', name: 'Arjun Kumar', avatar: null, avatarBg: '#14b8a6',
    contact: '+91 9988776655', email: 'arjun@gmail.com',
    courses: ['course2'], batches: ['b11'],
    status: 'Active', tab: 'all', joinDate: '2025-12-10',
  },
]

// ─── Avatar ───────────────────────────────────────────────────────
const Avatar = ({ name, bg }) => {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  return (
    <div
      className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold shrink-0"
      style={{ background: bg || '#f59e0b' }}
    >
      {initials}
    </div>
  )
}

// ─── Advanced Date Range Picker ────────────────────────────────────
const MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December']
const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa']

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}
function getFirstDay(year, month) {
  return new Date(year, month, 1).getDay()
}
function isSameDay(a, b) {
  return a && b && a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate()
}
function isBetween(d, start, end) {
  if (!start || !end) return false
  const t = d.getTime()
  return t > Math.min(start.getTime(), end.getTime()) && t < Math.max(start.getTime(), end.getTime())
}

const DateRangePicker = ({ value, onChange }) => {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(null)
  const today = new Date()
  const [leftYear, setLeftYear] = useState(today.getFullYear())
  const [leftMonth, setLeftMonth] = useState(today.getMonth() === 0 ? 11 : today.getMonth() - 1)
  const [leftYearBase, setLeftYearBase] = useState(today.getMonth() === 0 ? today.getFullYear() - 1 : today.getFullYear())
  const [rightYear, setRightYear] = useState(today.getFullYear())
  const [rightMonth, setRightMonth] = useState(today.getMonth())
  const [rightYearBase, setRightYearBase] = useState(today.getFullYear())
  const [selecting, setSelecting] = useState(null) // first clicked date
  const ref = useRef()

  // Sync right panel to be one month ahead of left
  useEffect(() => {
    let rm = leftMonth + 1, ry = leftYearBase
    if (rm > 11) { rm = 0; ry += 1 }
    setRightMonth(rm); setRightYear(ry); setRightYearBase(ry)
  }, [leftMonth, leftYearBase])

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleDayClick = (d) => {
    if (!selecting) {
      setSelecting(d)
      onChange({ start: d, end: null })
    } else {
      const start = selecting < d ? selecting : d
      const end = selecting < d ? d : selecting
      onChange({ start, end })
      setSelecting(null)
      setOpen(false)
    }
  }

  const formatLabel = () => {
    if (!value.start) return 'Start date – End date'
    const fmt = (d) => `${d.getDate()} ${MONTHS[d.getMonth()].slice(0,3)} ${d.getFullYear()}`
    if (!value.end) return `${fmt(value.start)} – End date`
    return `${fmt(value.start)} – ${fmt(value.end)}`
  }

  const renderCalendar = (year, month, yearBase, setMonth, setYearBase) => {
    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = getFirstDay(year, month)
    const cells = []
    for (let i = 0; i < firstDay; i++) cells.push(null)
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d))

    return (
      <div className="w-64">
        {/* Month/Year header */}
        <div className="flex items-center justify-between mb-3">
          <button onClick={() => {
            let m = month - 1, y = yearBase
            if (m < 0) { m = 11; y-- }
            setMonth(m); setYearBase(y)
          }} className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="flex items-center gap-1">
            {/* Month selector */}
            <select
              value={month}
              onChange={e => setMonth(Number(e.target.value))}
              className="text-sm font-semibold text-slate-800 bg-transparent cursor-pointer outline-none pr-1"
            >
              {MONTHS.map((m, i) => <option key={m} value={i}>{m}</option>)}
            </select>
            {/* Year selector */}
            <select
              value={yearBase}
              onChange={e => setYearBase(Number(e.target.value))}
              className="text-sm font-semibold text-slate-800 bg-transparent cursor-pointer outline-none"
            >
              {Array.from({ length: 30 }, (_, i) => today.getFullYear() - 10 + i).map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          <button onClick={() => {
            let m = month + 1, y = yearBase
            if (m > 11) { m = 0; y++ }
            setMonth(m); setYearBase(y)
          }} className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 mb-1">
          {DAYS.map(d => (
            <div key={d} className="text-center text-[11px] font-semibold text-slate-400 py-1">{d}</div>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7 gap-y-0.5">
          {cells.map((date, i) => {
            if (!date) return <div key={`e-${i}`} />
            const isStart = isSameDay(date, value.start)
            const isEnd = isSameDay(date, value.end)
            const isHoverEnd = selecting && isSameDay(date, hovered)
            const inRange = isBetween(date, value.start, value.end) ||
              (selecting && hovered && isBetween(date, selecting, hovered))
            const isToday = isSameDay(date, today)

            return (
              <button
                key={date.toISOString()}
                onClick={() => handleDayClick(date)}
                onMouseEnter={() => setHovered(date)}
                onMouseLeave={() => setHovered(null)}
                className={`
                  relative h-8 text-[12px] font-medium transition-all duration-100
                  ${isStart || isEnd || isHoverEnd
                    ? 'bg-emerald-500 text-white rounded-lg z-10 shadow-md'
                    : inRange
                    ? 'bg-emerald-50 text-emerald-700'
                    : isToday
                    ? 'text-emerald-600 font-bold'
                    : 'text-slate-700 hover:bg-slate-100 rounded-lg'}
                `}
              >
                {date.getDate()}
                {isToday && !isStart && !isEnd && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full" />
                )}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  const quickRanges = [
    { label: 'Today', action: () => { const d = new Date(); onChange({ start: d, end: d }); setOpen(false) }},
    { label: 'This Week', action: () => {
      const d = new Date(), day = d.getDay()
      const start = new Date(d); start.setDate(d.getDate() - day)
      const end = new Date(d); end.setDate(d.getDate() + (6 - day))
      onChange({ start, end }); setOpen(false)
    }},
    { label: 'This Month', action: () => {
      const d = new Date()
      onChange({ start: new Date(d.getFullYear(), d.getMonth(), 1), end: new Date(d.getFullYear(), d.getMonth()+1, 0) })
      setOpen(false)
    }},
    { label: 'Last 30 Days', action: () => {
      const end = new Date(), start = new Date(); start.setDate(end.getDate() - 30)
      onChange({ start, end }); setOpen(false)
    }},
    { label: 'Last 3 Months', action: () => {
      const end = new Date(), start = new Date(); start.setMonth(end.getMonth() - 3)
      onChange({ start, end }); setOpen(false)
    }},
    { label: 'This Year', action: () => {
      const d = new Date()
      onChange({ start: new Date(d.getFullYear(), 0, 1), end: new Date(d.getFullYear(), 11, 31) })
      setOpen(false)
    }},
  ]

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm text-slate-600 hover:border-emerald-400 hover:text-emerald-600 transition-all shadow-sm"
      >
        <svg className="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        <span className="text-[13px] font-medium whitespace-nowrap">{formatLabel()}</span>
        <svg className={`w-3.5 h-3.5 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 z-50 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
          style={{ minWidth: 580 }}>
          <div className="flex">
            {/* Quick ranges sidebar */}
            <div className="bg-slate-50 border-r border-slate-100 p-3 flex flex-col gap-1 min-w-[130px]">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Quick Select</p>
              {quickRanges.map(r => (
                <button key={r.label} onClick={r.action}
                  className="text-left px-3 py-1.5 text-[12px] font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition">
                  {r.label}
                </button>
              ))}
              {(value.start || value.end) && (
                <button onClick={() => { onChange({ start: null, end: null }); setSelecting(null) }}
                  className="text-left px-3 py-1.5 text-[12px] font-medium text-red-400 hover:bg-red-50 rounded-lg transition mt-2">
                  Clear
                </button>
              )}
            </div>

            {/* Dual calendars */}
            <div className="p-4 flex gap-6">
              {renderCalendar(leftYearBase, leftMonth, leftYearBase, setLeftMonth, setLeftYearBase)}
              <div className="w-px bg-slate-100" />
              {renderCalendar(rightYearBase, rightMonth, rightYearBase, setRightMonth, setRightYearBase)}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-100 px-4 py-2.5 flex items-center justify-between bg-white">
            <p className="text-[11px] text-slate-400">
              {selecting ? 'Click a second date to complete range' : value.start ? formatLabel() : 'Select start date'}
            </p>
            <button onClick={() => setOpen(false)}
              className="px-4 py-1.5 bg-emerald-500 text-white text-xs font-semibold rounded-lg hover:bg-emerald-600 transition">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Dropdown Filter ──────────────────────────────────────────────
const FilterDropdown = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm text-slate-500 hover:border-slate-300 transition min-w-[110px]">
        <span className="flex-1 text-left text-[13px]">{value || label}</span>
        <svg className={`w-3.5 h-3.5 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 z-40 bg-white rounded-xl shadow-lg border border-slate-100 py-1 min-w-[140px]">
          <button onClick={() => { onChange(''); setOpen(false) }}
            className="w-full text-left px-3 py-2 text-[12px] text-slate-400 hover:bg-slate-50">
            All {label}s
          </button>
          {options.map(o => (
            <button key={o} onClick={() => { onChange(o); setOpen(false) }}
              className={`w-full text-left px-3 py-2 text-[12px] transition hover:bg-emerald-50 hover:text-emerald-700 ${value === o ? 'text-emerald-600 font-semibold bg-emerald-50' : 'text-slate-600'}`}>
              {o}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────
const StudentsPage = () => {
  const [tab, setTab] = useState('ongoing')
  const [search, setSearch] = useState('')
  const [courseFilter, setCourseFilter] = useState('')
  const [batchFilter, setBatchFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [dateRange, setDateRange] = useState({ start: null, end: null })
  const [expandedRow, setExpandedRow] = useState(null)

  const tabs = [
    { key: 'ongoing', label: 'Ongoing' },
    { key: 'all', label: 'All Students' },
    { key: 'unassigned', label: 'Unassigned' },
  ]

  // Filter students
  const filtered = ALL_STUDENTS.filter(s => {
    if (tab !== 'all' && s.tab !== tab) return false
    if (search && !s.name.toLowerCase().includes(search.toLowerCase()) &&
        !s.regNo.toLowerCase().includes(search.toLowerCase()) &&
        !s.email.toLowerCase().includes(search.toLowerCase())) return false
    if (courseFilter && !s.courses.includes(courseFilter)) return false
    if (batchFilter && !s.batches.includes(batchFilter)) return false
    if (statusFilter && s.status !== statusFilter) return false
    if (dateRange.start && dateRange.end) {
      const d = new Date(s.joinDate)
      if (d < dateRange.start || d > dateRange.end) return false
    }
    return true
  })

  const allCourses = [...new Set(ALL_STUDENTS.flatMap(s => s.courses))]
  const allBatches = [...new Set(ALL_STUDENTS.flatMap(s => s.batches))]

  return (
    <div className="space-y-4">
      {/* ── Page header ── */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-5 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h1 className="text-xl font-bold text-slate-800">Student List</h1>

          <div className="flex flex-wrap items-center gap-2">
            {/* ── Tabs (pill style) ── */}
            <div className="flex items-center bg-slate-100 rounded-full p-1 gap-0.5">
              {tabs.map(t => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 whitespace-nowrap
                    ${tab === t.key
                      ? 'bg-emerald-500 text-white shadow-md shadow-emerald-200'
                      : 'text-slate-500 hover:text-slate-700'}`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* ── Date Range Picker ── */}
            <DateRangePicker value={dateRange} onChange={setDateRange} />
          </div>
        </div>
      </div>

      {/* ── Filters + Table card ── */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Filters row */}
        <div className="px-5 py-3 border-b border-slate-100 flex flex-wrap items-center gap-2">
          <FilterDropdown label="Course" options={allCourses} value={courseFilter} onChange={setCourseFilter} />
          <FilterDropdown label="Batch" options={allBatches} value={batchFilter} onChange={setBatchFilter} />
          <FilterDropdown label="Status" options={['Active', 'Inactive']} value={statusFilter} onChange={setStatusFilter} />

          <div className="flex-1" />

          {/* Search */}
          <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-3 py-2 bg-white min-w-[180px] focus-within:border-emerald-400 transition">
            <svg className="w-4 h-4 text-slate-400 shrink-0" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search"
              className="text-[13px] outline-none bg-transparent text-slate-600 placeholder:text-slate-400 w-full"
            />
          </div>

          {/* Print */}
          <button className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700 transition">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M6 9V2h12v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <rect x="2" y="9" width="20" height="9" rx="2" stroke="currentColor" strokeWidth="1.8"/>
              <path d="M6 18v4h12v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="18" cy="13" r="1" fill="currentColor"/>
            </svg>
          </button>

          {/* Export */}
          <button className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:border-emerald-400 hover:text-emerald-600 transition">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* ── Table ── */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="w-10 px-4 py-3" />
                <th className="px-3 py-3 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider w-8">#</th>
                <th className="px-3 py-3 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">Student</th>
                <th className="px-3 py-3 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">Reg No.</th>
                <th className="px-3 py-3 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">Contact</th>
                <th className="px-3 py-3 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email</th>
                <th className="px-3 py-3 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">Course</th>
                <th className="px-3 py-3 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">Batches</th>
                <th className="px-3 py-3 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-16 text-center text-slate-400 text-sm">
                    No students found
                  </td>
                </tr>
              ) : (
                filtered.map((student, idx) => (
                  <React.Fragment key={student.id}>
                    <tr className={`border-b border-slate-50 hover:bg-slate-50/80 transition group ${expandedRow === student.id ? 'bg-slate-50' : ''}`}>
                      {/* Expand toggle */}
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => setExpandedRow(expandedRow === student.id ? null : student.id)}
                          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all
                            ${expandedRow === student.id
                              ? 'border-emerald-400 bg-emerald-50 text-emerald-500 rotate-180'
                              : 'border-slate-300 text-slate-400 hover:border-emerald-400 hover:text-emerald-500'}`}
                        >
                          <svg className="w-3 h-3 transition-transform" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </td>

                      <td className="px-3 py-3 text-[13px] text-slate-500 font-medium">{idx + 1}</td>

                      {/* Student name + reg */}
                      <td className="px-3 py-3">
                        <div className="flex items-center gap-3">
                          <Avatar name={student.name} bg={student.avatarBg} />
                          <div>
                            <p className="text-[13px] font-semibold text-slate-800">{student.name}</p>
                            <p className="text-[11px] text-emerald-500 font-medium">#{student.regNo}</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-3 py-3 text-[13px] text-slate-600 font-medium">{student.regNo}</td>
                      <td className="px-3 py-3 text-[13px] text-slate-600 whitespace-nowrap">{student.contact}</td>
                      <td className="px-3 py-3 text-[13px] text-slate-600">{student.email}</td>

                      {/* Courses */}
                      <td className="px-3 py-3">
                        <p className="text-[13px] text-slate-700">{student.courses[0] || '—'}</p>
                        {student.courses.length > 1 && (
                          <p className="text-[11px] text-emerald-500 font-medium">& {student.courses.length - 1} more</p>
                        )}
                      </td>

                      {/* Batches */}
                      <td className="px-3 py-3">
                        <p className="text-[13px] text-slate-700">{student.batches[0] || '—'}</p>
                        {student.batches.length > 1 && (
                          <p className="text-[11px] text-emerald-500 font-medium">& {student.batches.length - 1} more</p>
                        )}
                      </td>

                      {/* Status badge */}
                      <td className="px-3 py-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold border
                          ${student.status === 'Active'
                            ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
                            : 'bg-slate-100 text-slate-500 border-slate-200'}`}>
                          {student.status}
                        </span>
                      </td>
                    </tr>

                    {/* ── Expanded detail row ── */}
                    {expandedRow === student.id && (
                      <tr className="bg-emerald-50/40">
                        <td colSpan={9} className="px-8 py-4">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">All Courses</p>
                              <div className="flex flex-wrap gap-1">
                                {student.courses.map(c => (
                                  <span key={c} className="px-2 py-0.5 bg-white text-emerald-700 border border-emerald-200 rounded-lg text-[11px] font-medium">{c}</span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">All Batches</p>
                              <div className="flex flex-wrap gap-1">
                                {student.batches.length ? student.batches.map(b => (
                                  <span key={b} className="px-2 py-0.5 bg-white text-blue-700 border border-blue-200 rounded-lg text-[11px] font-medium">{b}</span>
                                )) : <span className="text-[11px] text-slate-400">No batches</span>}
                              </div>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Join Date</p>
                              <p className="text-[12px] text-slate-600 font-medium">{student.joinDate}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Actions</p>
                              <div className="flex gap-2">
                                <button className="px-3 py-1 bg-emerald-500 text-white text-[11px] font-semibold rounded-lg hover:bg-emerald-600 transition">View</button>
                                <button className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold rounded-lg hover:bg-slate-50 transition">Edit</button>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* ── Pagination footer ── */}
        <div className="px-5 py-3 flex items-center justify-between border-t border-slate-100">
          <p className="text-[12px] text-slate-400">
            Showing 1 to {filtered.length} of {filtered.length} entries
          </p>
          <p className="text-[12px] text-slate-400">Page 1 of 1</p>
        </div>
      </div>
    </div>
  )
}

export default StudentsPage