// All icons as inline SVG React components — no image files needed

export const IconDashboard = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor" opacity=".9"/>
    <rect x="14" y="3" width="7" height="7" rx="1.5" fill="currentColor" opacity=".6"/>
    <rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor" opacity=".6"/>
    <rect x="14" y="14" width="7" height="7" rx="1.5" fill="currentColor" opacity=".9"/>
  </svg>
)

export const IconStudents = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="7" r="4" fill="currentColor" opacity=".7"/>
    <circle cx="17" cy="8" r="3" fill="currentColor" opacity=".5"/>
    <path d="M1 20c0-4 3.6-7 8-7s8 3 8 7" fill="currentColor" opacity=".7"/>
    <path d="M17 13c2.8 0 5 2 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity=".5"/>
  </svg>
)

export const IconOperator = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" fill="currentColor" opacity=".8"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="currentColor" opacity=".6"/>
    <path d="M18 3l2 2-6 6-2-2 6-6z" fill="currentColor" opacity=".9"/>
  </svg>
)

export const IconCourse = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M9 7h6M9 11h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

export const IconBatch = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="7" width="20" height="13" rx="2" fill="currentColor" opacity=".3"/>
    <rect x="5" y="4" width="14" height="13" rx="2" fill="currentColor" opacity=".5"/>
    <rect x="8" y="2" width="8" height="12" rx="2" fill="currentColor" opacity=".9"/>
  </svg>
)

export const IconCertificate = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="12" cy="11" r="3" fill="currentColor" opacity=".7"/>
    <path d="M9 20l3-3 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 8h2M16 8h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

export const IconPayments = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M2 10h20" stroke="currentColor" strokeWidth="1.8"/>
    <rect x="5" y="14" width="4" height="2" rx="0.5" fill="currentColor"/>
  </svg>
)

export const IconPromo = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M7 7h.01M17 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 12L12 3l9 9-9 9-9-9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M8.5 15.5l7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

export const IconEnquiry = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M12 8v4M12 14h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const IconReports = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const IconNotifications = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

export const IconFeedback = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
)

export const IconSettings = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

export const IconWebsite = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" strokeWidth="1.8"/>
  </svg>
)

export const IconChevron = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const IconMenu = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const IconClose = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const IconBell = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

export const IconSearch = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Harvest Logo mark
export const HarvestLogo = ({ className = 'w-8 h-8' }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="white"/>
    <path d="M20 8L28 16V24L20 32L12 24V16L20 8Z" fill="#1a1a2e" opacity="0.9"/>
    <path d="M20 12L26 18V22L20 28L14 22V18L20 12Z" fill="#14b8a6"/>
    <circle cx="20" cy="20" r="3" fill="white"/>
  </svg>
)
