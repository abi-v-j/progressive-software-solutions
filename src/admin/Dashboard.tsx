import React from "react";
import {
  TrendingUp, Users, ShoppingCart,
  AlertCircle, ArrowUpRight, ArrowDownRight
} from "lucide-react";

const DashboardPage = () => {
  const stats = [
    { label: "Total Revenue", value: "$48,200", change: "+12.5%", trend: "up", icon: TrendingUp },
    { label: "Active Users", value: "12,403", change: "+8.2%", trend: "up", icon: Users },
    { label: "Total Orders", value: "892", change: "+23.1%", trend: "up", icon: ShoppingCart },
    { label: "Refund Rate", value: "3.6%", change: "-2.4%", trend: "down", icon: AlertCircle },
  ];

  return (
    <div className="space-y-6 max-w-7xl text-[#0F172A]">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map(({ label, value, change, trend, icon: Icon }) => (
          <div key={label} className="bg-white p-6 rounded-xl border border-[#E5E9F2]">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-[#64748B]">{label}</p>
                <p className="text-2xl font-bold">{value}</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#0B3C8A]/10 text-[#0B3C8A] flex items-center justify-center">
                <Icon size={20} />
              </div>
            </div>

            <div className="flex items-center mt-2 text-sm">
              {trend === "up"
                ? <ArrowUpRight className="text-emerald-600" />
                : <ArrowDownRight className="text-red-600" />}
              <span className="ml-1">{change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
