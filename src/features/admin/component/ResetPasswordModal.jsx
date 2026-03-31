

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

export default function ResetPasswordModal({ isOpen, onClose }) {
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">

      <DialogBackdrop className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />


      <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
        <DialogPanel className="w-full max-w-[625px] rounded-[24px] bg-white px-8 py-10 shadow-2xl sm:px-10 sm:py-11">
          <DialogTitle className="text-[26px] font-extrabold text-slate-800">
            Reset Password
          </DialogTitle>
          <div className="mt-8 space-y-7">
            <div>
              <label className="mb-3 block text-[18px] font-medium text-slate-700">
                New Password
              </label>
              <div className="flex h-[50px] items-center rounded-2xl bg-slate-50 px-5">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  className="h-full flex-1 bg-transparent text-[16px] text-slate-700 outline-none placeholder:text-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(v => !v)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  {showNewPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <label className="mb-3 block text-[18px] font-medium text-slate-700">
                Confirm Password
              </label>
              <div className="flex h-[50px] items-center rounded-2xl bg-slate-50 px-5">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  className="h-full flex-1 bg-transparent text-[16px] text-slate-700 outline-none placeholder:text-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(v => !v)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  {showConfirmPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center gap-5">
            <button type="button" onClick={onClose} className="min-w-[166px] rounded-2xl bg-slate-200 px-8 py-4 text-[17px] font-medium text-slate-600 hover:bg-slate-300"
            > Cancel </button>

            <button type="button" className="min-w-[166px] rounded-2xl bg-emerald-500 px-8 py-4 text-[17px] font-bold text-white hover:bg-emerald-600"
            > Reset</button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}