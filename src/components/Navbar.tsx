import React, { useState, useEffect } from 'react';
import { 
  Home, Users, ShoppingBag, MessageSquare, BarChart3, FileText, Settings, 
  ChevronLeft, ChevronRight, LogOut, LayoutDashboard, Bell, Search, ChevronDown, 
  User, TrendingUp, AlertCircle, ArrowUpRight, ArrowDownRight, ShoppingCart
} from 'lucide-react';

// ============= NAVBAR COMPONENT =============
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [notifCount] = useState(3);

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 relative z-20 shadow-sm">
      
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Search anything..."
        />
      </div>

      <div className="flex items-center gap-3 relative">
        <button 
          aria-label="Notifications"
          className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Bell size={20} className="text-gray-600" />
          {notifCount > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          )}
        </button>

        <div className="h-8 w-px bg-gray-200" />

        <button
          onClick={() => setOpen(v => !v)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          className="flex items-center gap-3 hover:bg-gray-50 rounded-lg px-2 py-1.5 transition-colors"
        >
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full grid place-items-center text-white text-sm font-semibold shadow-sm">
            AJ
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-semibold text-gray-900">Admin User</p>
            <p className="text-xs text-gray-500">admin@company.com</p>
          </div>
          <ChevronDown size={16} className="text-gray-500" />
        </button>

        {open && (
          <div className="absolute right-0 top-14 w-56 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
            {[
              { icon: User, label: 'Profile', color: 'text-gray-700' },
              { icon: Settings, label: 'Settings', color: 'text-gray-700' },
              { icon: LogOut, label: 'Logout', color: 'text-red-600' }
            ].map(({ icon: Icon, label, color }) => (
              <button
                key={label}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 flex items-center gap-3 ${color} transition-colors`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;