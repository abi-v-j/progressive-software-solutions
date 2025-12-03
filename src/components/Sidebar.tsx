
import React, { useState, useEffect } from 'react';
import { 
  Home, Users, ShoppingBag, MessageSquare, BarChart3, FileText, Settings, 
  ChevronLeft, ChevronRight, LogOut, LayoutDashboard, Bell, Search, ChevronDown, 
  User, TrendingUp, AlertCircle, ArrowUpRight, ArrowDownRight, ShoppingCart
} from 'lucide-react';

// ============= SIDEBAR COMPONENT =============
const Sidebar = ({ collapsed, setCollapsed }) => {
  const toggle = () => {
    localStorage.setItem('sidebar', String(!collapsed));
    setCollapsed(v => !v);
  };

  const menu = [
    { icon: Home, label: 'Dashboard', path: '/admin' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: ShoppingBag, label: 'Orders', path: '/admin/orders' },
    { icon: MessageSquare, label: 'Messages', path: '/admin/messages' },
    { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
    { icon: FileText, label: 'Reports', path: '/admin/reports' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  const [activePath, setActivePath] = useState('/admin');

  return (
    <aside className={`hidden lg:flex h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex-col transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'} shadow-xl`}>
      
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-700">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <LayoutDashboard size={18} />
            </div>
            <span className="text-lg font-bold">AdminPro</span>
          </div>
        )}
        <button 
          onClick={toggle} 
          className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {menu.map(i => (
          <button
            key={i.path}
            onClick={() => setActivePath(i.path)}
            title={collapsed ? i.label : undefined}
            className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-all duration-200 group w-full
               ${activePath === i.path
                 ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50' 
                 : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
          >
            <i.icon size={20} className="flex-shrink-0" />
            {!collapsed && <span className="font-medium">{i.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-3 border-t border-slate-700">
        <button className="flex items-center gap-3 w-full px-3 py-3 text-sm rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200">
          <LogOut size={20} className="flex-shrink-0" />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar 