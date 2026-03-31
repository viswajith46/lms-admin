import { useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddOperatorOffcanvas from '../component/AddOperatorOffcanvas'

/* ─── Yellow Avatar ─────────────────────────────────────────────── */
const YellowAvatar = () => (
  <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-200 shrink-0">
    <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
      <rect width="40" height="40" fill="#f59e0b" rx="10"/>
      <circle cx="20" cy="14" r="7" fill="#1e40af" opacity=".85"/>
      <path d="M6 36c0-8 6-13 14-13s14 5 14 13" fill="#1e40af" opacity=".85"/>
      <circle cx="20" cy="13" r="4" fill="#bfdbfe"/>
      <rect x="16" y="19" width="8" height="10" rx="2" fill="#3b82f6"/>
    </svg>
  </div>
)

/* ─── Grey Avatar ───────────────────────────────────────────────── */
const GreyAvatar = () => (
  <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-200 shrink-0">
    <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
      <rect width="40" height="40" fill="#e2e8f0" rx="10"/>
      <circle cx="20" cy="15" r="7" fill="#94a3b8"/>
      <path d="M6 36c0-8 6-13 14-13s14 5 14 13" fill="#94a3b8"/>
    </svg>
  </div>
)

/* ─── Active Badge ──────────────────────────────────────────────── */
const ActiveBadge = () => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200">
    Active
  </span>
)

/* ─── FilterSelect ──────────────────────────────────────────────── */
const FilterSelect = ({ label, options }) => (
  <div className="relative">
    <select className="appearance-none text-[13px] font-medium text-slate-500 bg-white border border-slate-200 rounded-xl pl-3.5 pr-8 py-2.5 cursor-pointer outline-none hover:border-slate-300 focus:border-sky-400 transition min-w-[120px]">
      <option value="">{label}</option>
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
    <svg className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
)

/* ─── Tooltip — one item per line, dark box, matches screenshot ──── */
const Tooltip = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false)
  const tooltipId = useId()
  const content = items.join(', ')

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      onClick={event => event.stopPropagation()}
    >
      <button
        type="button"
        aria-describedby={isOpen ? tooltipId : undefined}
        className="text-[12px] font-semibold text-sky-500 cursor-pointer hover:text-sky-700 leading-loose select-none"
      >
        {label}
      </button>

      {isOpen && (
        <span
          id={tooltipId}
          role="tooltip"
          className="absolute left-1/2 top-full z-20 mt-2 w-max max-w-[220px] -translate-x-1/2 rounded-xl bg-slate-900 px-3 py-2 text-left text-[12px] font-medium leading-5 text-white shadow-lg"
        >
          {content}
        </span>
      )}
    </span>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════════ */
const OperatorsPage = () => {
  const navigate = useNavigate()
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false)
  const batches = ['ADR1', 'ADR2', 'ADR3', 'ADR4', 'ADR5', 'ADR6', 'ADR7']
  const primaryBatch = batches[0]
  const hiddenBatches = batches.slice(1)

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-visible">

      {/* ══ HEADER ══ */}
      <div className="flex items-center justify-between px-6 py-[18px] border-b border-slate-200">
        <h1 className="text-[20px] font-extrabold text-slate-800">Operator Management</h1>
        <button onClick={() => setIsOffcanvasOpen(true)} className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 active:scale-95 text-white text-[13px] font-bold px-5 py-2.5 rounded-xl shadow-md shadow-sky-200 transition-all">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
          </svg>
          Add Operator
        </button>
      </div>

      {/* ══ FILTERS ══ */}
      <div className="flex flex-wrap items-center gap-2.5 px-6 py-3.5">
        <FilterSelect label="Batch"  options={['AM1','Cmy2','EDB1','ADR1','CSE1','HTB12']} />
        <FilterSelect label="Course" options={['The Delhi Sultans','Class 9 chemistry atoms and molecules','Metals and Non-Metals','Class 7 – English Course (CBSE)','Cyber Security-1','Physics']} />
        <FilterSelect label="Status" options={['Active','Inactive']} />
        <div className="flex-1" />

        {/* Search */}
        <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-3.5 py-2.5 bg-white min-w-[200px] focus-within:border-sky-400 transition">
          <input type="text" placeholder="Search"
            className="text-[13px] outline-none bg-transparent text-slate-600 placeholder-slate-400 w-full" />
          <svg className="w-4 h-4 text-slate-400 shrink-0" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Print */}
        <button className="w-9 h-9 flex items-center justify-center border border-slate-200 rounded-xl bg-white text-sky-500 hover:bg-sky-50 hover:border-sky-300 transition">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <path d="M6 9V2h12v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <rect x="2" y="9" width="20" height="9" rx="2" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M6 18v4h12v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <circle cx="18" cy="13" r="1" fill="currentColor"/>
          </svg>
        </button>

        {/* Export */}
        <button className="w-9 h-9 flex items-center justify-center border border-slate-200 rounded-xl bg-white text-sky-500 hover:bg-sky-50 hover:border-sky-300 transition">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* ══ TABLE ══ */}
      <div className="overflow-x-auto min-h-[460px]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="pl-6 pr-4 py-3 text-left text-[12px] font-bold text-slate-400 w-10">#</th>
              <th className="px-4 py-3 text-left text-[12px] font-bold text-slate-400">Trainer</th>
              <th className="px-4 py-3 text-left text-[12px] font-bold text-slate-400">Contact</th>
              <th className="px-4 py-3 text-left text-[12px] font-bold text-slate-400">Email</th>
              <th className="px-4 py-3 text-left text-[12px] font-bold text-slate-400">Batch</th>
              <th className="px-4 py-3 text-left text-[12px] font-bold text-slate-400">Course</th>
              <th className="px-4 py-3 text-left text-[12px] font-bold text-slate-400">Salary</th>
              <th className="px-4 py-3 text-left text-[12px] font-bold text-slate-400">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => navigate("/admin/operators/view")} className="border-b border-slate-55 hover:bg-slate-50/60 transition cursor-pointer">
              <td className="pl-6 pr-4 py-4 text-[13px] text-slate-400 font-semibold">1</td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <YellowAvatar />
                  <div>
                    <p className="text-[13px] font-semibold text-slate-800">Nadish</p>
                    <p className="text-[11px] font-semibold text-sky-500">#TRN0003</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-[13px] text-slate-600 whitespace-nowrap">+91 7591992732</td>
              <td className="px-4 py-4 text-[13px] text-slate-600">nadish@codesap.com</td>
              <td className="px-4 py-4">
                <p className="text-[13px] text-slate-700 font-medium">{primaryBatch}</p>
                {hiddenBatches.length > 0 && (
                  <Tooltip
                    label={`& ${hiddenBatches.length} more`}
                    items={hiddenBatches}
                  />
                )}
              </td>
              <td className="px-4 py-4 text-[13px] text-slate-600">The Delhi Sultans</td>
              <td className="px-4 py-4 text-[13px] text-slate-700 font-medium whitespace-nowrap">Rs. 500.00</td>
              <td className="px-4 py-4"><ActiveBadge /></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ══ FOOTER ══ */}
      <div className="flex items-center justify-between px-6 py-3 border-t border-slate-100">
        <span className="text-[12px] text-slate-400">Showing 1 to 7 of 7 entries</span>
        <span className="text-[12px] text-slate-400">Page 1 of 1</span>
      </div>

      <AddOperatorOffcanvas isOpen={isOffcanvasOpen} onClose={() => setIsOffcanvasOpen(false)} />

    </div>
  )
}

export default OperatorsPage
