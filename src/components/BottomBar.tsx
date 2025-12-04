import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home, Users, BarChart3, Settings
} from "lucide-react";

const BottomBar = () => {
  const links = [
    { to: "/admin/dashboard", icon: Home, label: "Home" },
    { to: "/admin/users", icon: Users, label: "Users" },
    { to: "/admin/analytics", icon: BarChart3, label: "Stats" },
    { to: "/admin/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E9F2] z-50">
      <div className="grid grid-cols-4 h-16">
        {links.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 transition-all
              ${isActive
                ? "text-[#0B3C8A]"
                : "text-[#64748B] hover:text-[#0F172A]"}`
            }
          >
            <Icon size={20} />
            <span className="text-xs font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomBar;
