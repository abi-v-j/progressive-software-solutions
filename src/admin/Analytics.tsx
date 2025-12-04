import React from 'react';
import {
  ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
  BarChart, Bar
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 12000 },
  { month: 'Feb', revenue: 18500 },
  { month: 'Mar', revenue: 16200 },
  { month: 'Apr', revenue: 21000 },
  { month: 'May', revenue: 24300 },
  { month: 'Jun', revenue: 22800 },
];

const usersData = [
  { month: 'Jan', users: 300 },
  { month: 'Feb', users: 620 },
  { month: 'Mar', users: 910 },
  { month: 'Apr', users: 1280 },
  { month: 'May', users: 1560 },
  { month: 'Jun', users: 1920 },
];

const ordersByCategory = [
  { name: 'Web Dev', orders: 420 },
  { name: 'Mobile', orders: 310 },
  { name: 'AI / ML', orders: 180 },
  { name: 'Cloud', orders: 140 },
];

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8">

      {/* ================= KPI ROW ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPI title="Total Revenue" value="₹12,45,000" sub="+18.2% MoM" />
        <KPI title="Active Users" value="1,920" sub="+22% MoM" />
        <KPI title="Total Orders" value="1,050" sub="+14% MoM" />
        <KPI title="Conversion Rate" value="3.9%" sub="+0.6%" />
      </div>

      {/* ================= CHARTS GRID ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Revenue Trend */}
        <div className="bg-white border rounded-lg p-5">
          <h2 className="text-sm font-semibold mb-4">Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* User Growth */}
        <div className="bg-white border rounded-lg p-5">
          <h2 className="text-sm font-semibold mb-4">User Growth</h2>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={usersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Orders by Category */}
        <div className="bg-white border rounded-lg p-5 xl:col-span-2">
          <h2 className="text-sm font-semibold mb-4">Orders by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ordersByCategory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

/* ================= KPI COMPONENT ================= */

const KPI = ({ title, value, sub }: { title: string; value: string; sub: string }) => {
  return (
    <div className="bg-white border rounded-lg p-5">
      <p className="text-xs text-gray-500">{title}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
      <p className="text-xs text-emerald-600 mt-1">{sub}</p>
    </div>
  );
};

export default Analytics;
