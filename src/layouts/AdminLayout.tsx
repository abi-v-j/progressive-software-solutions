import React, { useState, useEffect } from 'react';
import { 
  Home, Users, ShoppingBag, MessageSquare, BarChart3, FileText, Settings, 
  ChevronLeft, ChevronRight, LogOut, LayoutDashboard, Bell, Search, ChevronDown, 
  User, TrendingUp, AlertCircle, ArrowUpRight, ArrowDownRight, ShoppingCart
} from 'lucide-react';
import  Sidebar  from '../components/Sidebar';
import  Navbar  from '../components/Navbar';
import  BottomBar  from '../components/BottomBar';
import DashboardPage from '../admin/Dashboard';

// ============= ADMIN LAYOUT =============
export const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('sidebar');
    if (saved) setCollapsed(saved === 'true');
  }, []);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6 pb-20 lg:pb-6">
          <DashboardPage />
        </main>

        <BottomBar />
      </div>
    </div>
  );
};

