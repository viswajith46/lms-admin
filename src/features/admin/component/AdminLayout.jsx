import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

const AdminLayout = () => {
  // Controls mobile sidebar open/close state
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">

      {/* ── Sidebar ── */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* ── Main content area ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* ── Top Header ── */}
        <Header setOpen={setSidebarOpen} />

        {/* ── Page content (scrollable) ── */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {/* React Router renders the matched child page here */}
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
