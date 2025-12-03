import React, { useState } from 'react';
import { Bell, Search, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      
      {/* Search */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        <input
          className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Search..."
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
        </button>

        <button onClick={() => setOpen(!open)} className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-600 rounded-full grid place-items-center text-white text-sm font-bold">
            AJ
          </div>
          <ChevronDown size={16} />
        </button>

        {open && (
          <div className="absolute top-16 right-6 w-52 bg-white border border-gray-200 rounded-md shadow-md overflow-hidden">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">Profile</button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">Settings</button>
            <button className="w-full text-left px-4 py-2 hover:bg-red-50 text-sm text-red-500">Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};
