import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home, Users, ShoppingBag, MessageSquare,
  BarChart3, FileText, Settings, ChevronLeft, ChevronRight, LogOut
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    { icon: Home, label: 'Dashboard', path: '/admin' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: ShoppingBag, label: 'Orders', path: '/admin/orders' },
    { icon: MessageSquare, label: 'Messages', path: '/admin/messages' },
    { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
    { icon: FileText, label: 'Reports', path: '/admin/reports' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <aside className={`h-screen bg-slate-900 text-slate-100 border-r border-slate-800 flex flex-col transition-all ${collapsed ? 'w-20' : 'w-64'}`}>
      
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
        {!collapsed && <span className="text-lg font-semibold">Admin Panel</span>}
        <button onClick={() => setCollapsed(!collapsed)} className="p-2 hover:bg-slate-800 rounded">
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-3 space-y-2">
        {menu.map(i => (
          <NavLink
            key={i.path}
            to={i.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition 
               ${isActive ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`
            }
          >
            <i.icon size={18} />
            {!collapsed && <span>{i.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-slate-800">
        <button className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-md text-red-400 hover:bg-slate-800">
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};
