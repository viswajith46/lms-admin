import React from 'react'

const ProfileMenuPlaceholderPage = ({ title, description }) => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">Admin menu</p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">{title}</h1>
      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  </div>
)

export const MyProfilePage = () => (
  <ProfileMenuPlaceholderPage
    title="My Profile"
    description="Profile details and account information will be available here."
  />
)

export const PrivacyPolicyPage = () => (
  <ProfileMenuPlaceholderPage
    title="Privacy Policy"
    description="Privacy policy content can be added here when the page is ready."
  />
)

export const ShareFeedbackPage = () => (
  <ProfileMenuPlaceholderPage
    title="Share Feedback"
    description="Feedback tools and contact options can be added here next."
  />
)
