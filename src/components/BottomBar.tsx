import React, { useState, useEffect } from 'react';
import { 
  Home, Users, ShoppingBag, MessageSquare, BarChart3, FileText, Settings, 
  ChevronLeft, ChevronRight, LogOut, LayoutDashboard, Bell, Search, ChevronDown, 
  User, TrendingUp, AlertCircle, ArrowUpRight, ArrowDownRight, ShoppingCart
} from 'lucide-react';


// ============= BOTTOM BAR COMPONENT =============
const BottomBar = () => {
  const [activePath, setActivePath] = useState('/admin');
  
  const links = [
    { to: '/admin', icon: Home, label: 'Home' },
    { to: '/admin/users', icon: Users, label: 'Users' },
    { to: '/admin/orders', icon: ShoppingBag, label: 'Orders' },
    { to: '/admin/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
      <div className="grid grid-cols-4 h-16">
        {links.map(({ to, icon: Icon, label }) => (
          <button
            key={to}
            onClick={() => setActivePath(to)}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              activePath === to ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Icon size={20} />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};


export default BottomBar;