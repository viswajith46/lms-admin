import React from 'react'

// Reusable placeholder for pages not yet built
const PlaceholderPage = ({ title, icon = '🔧' }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <div className="text-6xl mb-4">{icon}</div>
    <h1 className="text-2xl font-bold text-slate-700 mb-2">{title}</h1>
    <p className="text-slate-400 text-sm">This page is coming soon. Build it step by step!</p>
  </div>
)

export const OperatorsPage      = () => <PlaceholderPage title="Operator Management" icon="👨‍💼" />
export const CoursesPage        = () => <PlaceholderPage title="Course Management" icon="📚" />
export const BatchesPage        = () => <PlaceholderPage title="Batch Management" icon="📦" />
export const EnquiryPage        = () => <PlaceholderPage title="Enquiry" icon="❓" />
export const NotificationsPage  = () => <PlaceholderPage title="Notifications" icon="🔔" />
export const WebsitePage        = () => <PlaceholderPage title="Website" icon="🌐" />
export const SettingsPage       = () => <PlaceholderPage title="Settings" icon="⚙️" />
