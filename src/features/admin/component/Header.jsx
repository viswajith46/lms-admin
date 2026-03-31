import React, { useState } from 'react'
import { IconMenu } from './Icons'
import { useNavigate } from 'react-router-dom'

const Header = ({ setOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
 
  const navigate = useNavigate()
  const handleLogout = () => {
    sessionStorage.removeItem('isAdminAuthenticated')
    navigate('/login', { replace: true })
  }
  return (
    <header className="sticky top-0 z-30 bg-black border-b border-slate-100 shadow-sm">
      <div className="flex items-center justify-between h-14 px-4 lg:px-6">

        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition text-slate-600"
          >
            <IconMenu className="w-5 h-5" />
          </button>
        </div>

        <div className="relative flex items-center gap-2">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2.5 pl-1 pr-3 py-1 rounded-xl hover:bg-slate-800 transition"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
              A
            </div>
            <span className="hidden sm:block text-sm font-semibold text-white">
              admin
            </span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 top-10  rounded-sm w-44 bg-white  shadow-lg border border-slate-200 overflow-hidden">
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-slate-100">
                Chnage Password
              </button>
              <button type='button' onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-slate-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
