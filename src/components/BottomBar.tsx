import React, { useState } from "react";
import { Home, Users, ShoppingBag, Settings } from "lucide-react";

const BottomBar = () => {
  const [activePath, setActivePath] = useState("/admin");

  const links = [
    { to: "/admin", icon: Home, label: "Home" },
    { to: "/admin/users", icon: Users, label: "Users" },
    { to: "/admin/orders", icon: ShoppingBag, label: "Orders" },
    { to: "/admin/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E9F2] z-50">
      <div className="grid grid-cols-4 h-16">
        {links.map(({ to, icon: Icon, label }) => (
          <button
            key={to}
            onClick={() => setActivePath(to)}
            className={`flex flex-col items-center justify-center gap-1 transition-all
              ${
                activePath === to
                  ? "text-[#0B3C8A]"
                  : "text-[#64748B] hover:text-[#0F172A]"
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
