import React, { useState } from 'react'
// React Router's NavLink for active link styling and useLocation to determine current path
import { NavLink, useLocation } from 'react-router-dom'
import {
  HarvestLogo, IconDashboard, IconStudents, IconOperator,
  IconCourse, IconBatch,IconEnquiry, IconNotifications,
  IconSettings, IconWebsite, IconChevron, IconClose,
} from './Icons'

// ─── Menu configuration ────────────────────────────────────────────
const menuItems = [
  {
    id: 1,
    name: 'Dashboard',
    icon: IconDashboard,
    link: '/admin/dashboard',
  },
  {
    id: 2,
    name: 'Student Management',
    icon: IconStudents,
    link: '/admin/students',
  },
  {
    id: 3,
    name: 'Operator Management',
    icon: IconOperator,
    link: '/admin/operators',
  },
  {
    id: 4,
    name: 'Course Management',
    icon: IconCourse,
    expandable: true,
    subItems: [
      { name: 'All Courses', link: '/admin/courses' },
      { name: 'Add Course', link: '/admin/courses/add' },
      { name: 'Categories', link: '/admin/courses/categories' },
    ],
  },
  {
    id: 5,
    name: 'Batch Management',
    icon: IconBatch,
    link: '/admin/batches',
  },
  {
    id: 6,
    name: 'Enquiry',
    icon: IconEnquiry,
    link: '/admin/enquiry',
  },

  {
    id: 7,
    name: 'Notifications',
    icon: IconNotifications,
    link: '/admin/notifications',
  },

  {
    id: 8,
    name: 'Website',
    icon: IconWebsite,
    expandable: true,
    subItems: [
      { name: 'Pages', link: '/admin/website/pages' },
      { name: 'Banners', link: '/admin/website/banners' },
    ],
  },
  {
    id: 9,
    name: 'Settings',
    icon: IconSettings,
    link: '/admin/settings',
  },
]

// ─── Sidebar Component ─────────────────────────────────────────────
const Sidebar = ({ open, setOpen }) => {
  // State to track which expandable menu is open (by id)
  const [expandedMenu, setExpandedMenu] = useState(null)
  const location = useLocation()

  const closeSidebar = () => setOpen(false)

  const toggleExpand = (id) => {
    setExpandedMenu(prev => (prev === id ? null : id))
  }

  // Check if any subitem is active (to keep parent expanded)
  const isSubActive = (subItems = []) =>
    subItems.some(sub => location.pathname === sub.link)

  return (
    <>
      {/* ── Dark overlay for mobile ── */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* ════════════════════════════
          SIDEBAR
          Mobile: hidden off-screen, slides in when open=true
          Desktop (lg): always visible, fixed width 240px
         ════════════════════════════ */}
      <aside
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        className={`
          fixed top-0 left-0 z-50
          h-screen w-60
          flex flex-col
          bg-black text-white
          transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto
          overflow-hidden
        `}
      >
        {/* ── Logo ── */}
        <div className="flex items-center justify-between px-4 py-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <HarvestLogo className="w-9 h-9 shrink-0" />
            <div className="leading-tight">
              <span className="text-lg font-extrabold tracking-tight text-white">harvest</span>
              <p className="text-[9px] text-slate-400 tracking-widest uppercase font-medium -mt-0.5">
                learning app
              </p>
            </div>
          </div>
          {/* Close — mobile only */}
          <button
            onClick={closeSidebar}
            className="lg:hidden p-1.5 rounded-lg hover:bg-white/10 transition text-slate-300"
            aria-label="Close sidebar"
          >
            <IconClose className="w-5 h-5" />
          </button>
        </div>

        {/* ── Navigation ── */}
        <nav className="flex-1 overflow-y-auto py-3 px-2.5">
          <ul className="space-y-0.5">
            {menuItems.map((item) => {
              const Icon = item.icon
              // Determine if this item should be expanded: either it's already expanded or one of its sub-items is active
              const isExpanded = expandedMenu === item.id || isSubActive(item.subItems)

              return (
                // Use item.id as key since it's unique, instead of index which can cause issues if the list changes
                <li key={item.id}>
                  {/* ── Regular link ── */}
                  {/* // If the item has a direct link and is not expandable, render it as a NavLink */}
                  {item.link && !item.expandable && (
                    // NavLink provides an isActive prop to conditionally style the active link
                    <NavLink
                    // Use item.link as the key for NavLink to ensure it correctly identifies the active route, instead of index which can cause issues if the list changes
                      to={item.link}
                      onClick={closeSidebar}
                      className={({ isActive }) =>
                        // Base styles for all links
                        `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ` +
                        (isActive
                          // Active link styles: teal background, white text, and a subtle shadow
                          ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/20'
                          : 'text-slate-300 hover:bg-white/8 hover:text-white')
                      }
                    >
                      {/* Icon and text for the link */}
                      {({ isActive }) => (
                        <>
                        {/* Icon and text for the link */}
                          <Icon className={`w-[18px] h-[18px] shrink-0 transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
                          <span className="text-[13px] font-medium">{item.name}</span>
                        </>
                      )}
                    </NavLink>
                  )}

                  {/* ── Expandable menu ── */}
                  {item.expandable && (
                    <>
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className={`
                          w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
                          transition-all duration-200 group
                          ${isExpanded ? 'text-white bg-white/8' : 'text-slate-300 hover:bg-white/8 hover:text-white'}
                        `}
                      >
                        <Icon className={`w-[18px] h-[18px] shrink-0 ${isExpanded ? 'text-teal-400' : 'text-slate-400 group-hover:text-white'}`} />
                        <span className="flex-1 text-[13px] font-medium text-left">{item.name}</span>
                        <IconChevron
                          className={`w-3.5 h-3.5 shrink-0 text-slate-500 transition-transform duration-200 ${isExpanded ? 'rotate-90 text-teal-400' : ''}`}
                        />
                      </button>

                      {/* Sub-items */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <ul className="ml-3 mt-1 pl-4 border-l border-white/10 space-y-0.5 pb-1">
                          {(item.subItems || []).map((sub) => (
                            <li key={sub.link}>
                              <NavLink
                                to={sub.link}
                                onClick={closeSidebar}
                                className={({ isActive }) =>
                                  `block px-2 py-2 rounded-lg text-[12px] font-medium transition-all duration-150 ` +
                                  (isActive
                                      ? 'text-teal-400 bg-teal-500/10'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5')
                                }
                              >
                                {sub.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>


      </aside>
    </>
  )
}

export default Sidebar
