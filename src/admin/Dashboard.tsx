import React, { useState, useEffect } from 'react';
import { 
  Home, Users, ShoppingBag, MessageSquare, BarChart3, FileText, Settings, 
  ChevronLeft, ChevronRight, LogOut, LayoutDashboard, Bell, Search, ChevronDown, 
  User, TrendingUp, AlertCircle, ArrowUpRight, ArrowDownRight, ShoppingCart
} from 'lucide-react';



// ============= DASHBOARD PAGE =============
const DashboardPage = () => {
  const stats = [
    { label: 'Total Revenue', value: '$48,200', change: '+12.5%', trend: 'up', icon: TrendingUp, color: 'blue' },
    { label: 'Active Users', value: '12,403', change: '+8.2%', trend: 'up', icon: Users, color: 'green' },
    { label: 'Total Orders', value: '892', change: '+23.1%', trend: 'up', icon: ShoppingCart, color: 'purple' },
    { label: 'Refund Rate', value: '3.6%', change: '-2.4%', trend: 'down', icon: AlertCircle, color: 'orange' },
  ];

  const activities = [
    { user: 'Sarah Johnson', action: 'New user registered', time: '2 minutes ago', type: 'user' },
    { user: 'Order #8492', action: 'Payment completed', time: '5 minutes ago', type: 'success' },
    { user: 'Mike Chen', action: 'Updated profile settings', time: '12 minutes ago', type: 'update' },
    { user: 'Order #8491', action: 'Payment failed - requires attention', time: '18 minutes ago', type: 'error' },
    { user: 'Emma Wilson', action: 'New user registered', time: '24 minutes ago', type: 'user' },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      purple: 'bg-purple-50 text-purple-600',
      orange: 'bg-orange-50 text-orange-600',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-sm text-gray-500">Welcome back! Here's what's happening today.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, change, trend, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">{label}</p>
                <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
                <div className="flex items-center gap-1">
                  {trend === 'up' ? <ArrowUpRight className="w-4 h-4 text-green-600" /> : <ArrowDownRight className="w-4 h-4 text-red-600" />}
                  <span className={`text-sm font-semibold ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>{change}</span>
                  <span className="text-xs text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <div className={`w-12 h-12 rounded-lg ${getColorClasses(color)} flex items-center justify-center`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <p className="text-sm text-gray-500 mt-0.5">Real-time updates from your system</p>
          </div>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View all</button>
        </div>
        <ul className="divide-y divide-gray-100">
          {activities.map((activity, idx) => (
            <li key={idx} className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'success' ? 'bg-green-500' :
                  activity.type === 'error' ? 'bg-red-500' :
                  activity.type === 'user' ? 'bg-blue-500' : 'bg-gray-400'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{activity.action}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default DashboardPage;