import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ResetPasswordModal from '../component/ResetPasswordModal'

const OperatorView = () => {
  const navigate = useNavigate()
  const [actionOpen, setActionOpen] = useState(false)
  const [resetModalOpen, setResetModalOpen] = useState(false)

  return (
    <div className="space-y-4">

      {/* ══ HEADER CARD ══ */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-5 py-4 flex items-center justify-between min-w-[70px]">

        {/* Left: back arrow + title */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition text-slate-500"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="text-[20px] font-extrabold text-slate-800">Operator View</h1>
        </div>

        {/* Right: Action dropdown */}
        <div className="relative">
          <button
            onClick={() => setActionOpen(v => !v)}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-[13px] font-bold px-5 py-2.5 rounded-xl shadow-md shadow-emerald-200 transition-all select-none"
          >
            Action
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {actionOpen && (
            <>
              {/* click-away overlay */}
              <div className="fixed inset-0 z-40" onClick={() => setActionOpen(false)} />
              <div className="absolute right-0 top-full mt-2 z-50 bg-white rounded-xl shadow-xl border border-slate-100 py-1 min-w-[150px]">
                {['Edit', 'Delete', 'Deactivate'].map(item => (
                  <button key={item} onClick={() => setActionOpen(false)}
                    className="w-full text-left px-4 py-2.5 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition">
                    {item}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ══ PROFILE CARD ══ */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-5 py-6 sm:px-7">

        {/* ── Top row: avatar + name/id  |  gender ── */}
        <div className="flex flex-col gap-5 pb-6 border-b border-slate-100 sm:flex-row sm:items-start sm:justify-between">

          {/* Avatar + Name */}
          <div className="flex items-center gap-5">

            {/* Yellow avatar — person illustration matching screenshot */}
            <div className="w-[90px] h-[90px] rounded-[14px] overflow-hidden shrink-0"
              style={{ background: '#f59e0b' }}>
              <svg viewBox="0 0 90 90" width="90" height="90" fill="none">
                {/* yellow bg */}
                <rect width="90" height="90" fill="#f59e0b" rx="14"/>
                {/* teal shirt / body */}
                <rect x="15" y="58" width="60" height="45" rx="8" fill="#14b8a6"/>
                {/* white collar V */}
                <polygon points="34,60 45,73 56,60" fill="white" opacity="0.95"/>
                {/* neck */}
                <rect x="38" y="50" width="14" height="12" rx="4" fill="#fcd9b0"/>
                {/* head */}
                <circle cx="45" cy="36" r="21" fill="#fcd9b0"/>
                {/* dark hair — covers top of head */}
                <path d="M24 33 Q24 13 45 13 Q66 13 66 33 Q66 20 56 17 Q45 13 34 17 Q26 20 24 33Z"
                  fill="#2d1a0e"/>
                {/* side hair */}
                <ellipse cx="24.5" cy="36" rx="3" ry="6" fill="#2d1a0e"/>
                <ellipse cx="65.5" cy="36" rx="3" ry="6" fill="#2d1a0e"/>
                {/* eyes */}
                <circle cx="38" cy="37" r="2.2" fill="#2d1a0e"/>
                <circle cx="52" cy="37" r="2.2" fill="#2d1a0e"/>
                {/* eyebrows */}
                <path d="M34 32 Q38 30 42 32" stroke="#2d1a0e" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M48 32 Q52 30 56 32" stroke="#2d1a0e" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                {/* nose */}
                <path d="M44 40 Q45 44 46 40" stroke="#e8a87c" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                {/* mouth / smile */}
                <path d="M39 47 Q45 52 51 47" stroke="#c0714a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
            </div>

            {/* Name + ID */}
            <div>
              <h2 className="text-[22px] font-extrabold text-slate-800 leading-tight">Athira</h2>
              <p className="text-[13px] text-slate-500 mt-1.5">
                ID :&nbsp;<span className="text-sky-500 font-semibold">TRN0007</span>
              </p>
            </div>
          </div>

          {/* Gender — top right */}
          <div>
            <p className="text-[12px] text-slate-400 font-medium mb-1">Gender</p>
            <p className="text-[15px] font-bold text-slate-800">Female</p>
          </div>
        </div>

        {/* ── Bottom row: contact  |  username box ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-6">

          {/* Left — phone + email */}
          <div className="flex flex-wrap items-center gap-7">

            {/* Phone */}
            <div className="flex items-center gap-2.5">
              {/* Teal ring phone icon — matches screenshot */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" stroke="#14b8a6" strokeWidth="1.5"/>
                <path d="M9.5 7h1l.5 2.5-1.5 1a7.07 7.07 0 003 3l1-1.5L16 12.5v1A6 6 0 019.5 7z"
                  fill="#14b8a6"/>
              </svg>
              <span className="text-[14px] font-semibold text-slate-700">+91 7034181924</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2.5">
              {/* Envelope icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="5" width="20" height="14" rx="2"
                  stroke="#94a3b8" strokeWidth="1.7"/>
                <path d="M2 7l10 7 10-7"
                  stroke="#94a3b8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[14px] font-semibold text-slate-700">athira@gmail.com</span>
            </div>
          </div>

          {/* Right — Username reset box */}
          <div
            className="w-full rounded-2xl px-5 py-3.5 sm:w-auto sm:min-w-[270px]"
            style={{
              border: '1.8px solid #7dd3fa',
              background: 'rgba(224, 242, 254, 0.45)',
            }}
          >
            <p className="text-[11px] text-slate-400 font-semibold tracking-wide mb-1">Username</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <span className="text-[16px] font-bold text-slate-800">athira</span>
              <button onClick={() => setResetModalOpen(true)} className="w-full bg-sky-500 hover:bg-sky-600 text-white text-[12px] font-bold px-5 py-2 rounded-xl shadow-sm shadow-sky-100 transition-all whitespace-nowrap sm:w-auto"
              >
                Reset
              </button>
            </div>
          </div>

        </div>
      </div>

      <ResetPasswordModal
        isOpen={resetModalOpen}
        onClose={() => setResetModalOpen(false)}
      />

    </div>
  )
}

export default OperatorView
