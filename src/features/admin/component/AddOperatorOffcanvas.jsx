export default function AddOperatorOffcanvas({ isOpen, onClose }) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Offcanvas */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-slate-200 sticky top-0 bg-white">
          <h2 className="text-xl font-bold text-slate-800">Add Operator</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-100 rounded-lg transition"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <form className="p-6 space-y-5">
          {/* Trainer ID (Read-only) */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Trainer ID
            </label>
            <input
              type="text"
              value="TRN0008"
              readOnly
              className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-600"
            />
          </div>

          {/* Operator Name & Gender */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Operator Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Gender <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200">
                <option>Select any</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Mobile Number (Primary) */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <select className="px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-sky-400">
                <option>+91</option>
                <option>+1</option>
              </select>
              <input
                type="text"
                placeholder="Enter number"
                className="col-span-2 px-4 py-2.5 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
            />
          </div>

          {/* Alternative Contact Person */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Alternative Contact Person
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
            />
          </div>

          {/* Mobile Number (Alternative) */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Mobile Number
            </label>
            <div className="grid grid-cols-3 gap-2">
              <select className="px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-sky-400">
                <option>+91</option>
                <option>+1</option>
              </select>
              <input
                type="text"
                placeholder="Enter number"
                className="col-span-2 px-4 py-2.5 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
              />
            </div>
          </div>

          {/* Course & Salary */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Course <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200">
                <option>Select any</option>
                <option>Python</option>
                <option>Web Development</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Salary
              </label>
              <input
                type="text"
                placeholder="Enter Salary"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
              />
            </div>
          </div>

          {/* Profile Image */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Profile Image
            </label>
            <input
              type="file"
              className="hidden"
              id="profileImage"
              accept="image/*"
            />
            <label
              htmlFor="profileImage"
              className="inline-flex items-center px-4 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg cursor-pointer hover:bg-slate-800 transition"
            >
              Choose File
            </label>
            <span className="ml-3 text-sm text-slate-400">No file chosen</span>
          </div>

          {/* Country, State, City */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Country
            </label>
            <select className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200">
              <option>Select Country</option>
              <option>India</option>
              <option>USA</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                State
              </label>
              <select className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200">
                <option>Select State</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                City
              </label>
              <select className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200">
                <option>Select City</option>
              </select>
            </div>
          </div>

          {/* Username & Password */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter user name"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-6 border-t border-slate-200 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border border-slate-200 rounded-lg text-slate-700 font-semibold hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}