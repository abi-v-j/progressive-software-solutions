import React, { useState } from "react";
import { Bell, Search, ChevronDown, User, Settings, LogOut } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-[#E5E9F2] flex items-center justify-between px-6">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B] w-5 h-5" />
        <input
          className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F6F9FF] border border-[#E5E9F2] rounded-lg focus:ring-2 focus:ring-[#0B3C8A] outline-none"
          placeholder="Search..."
        />
      </div>

      <div className="flex items-center gap-4 relative">
        <button className="relative p-2 hover:bg-[#F1F5F9] rounded-lg">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF4D1C] rounded-full" />
        </button>

        <button onClick={() => setOpen(v => !v)} className="flex items-center gap-3 hover:bg-[#F1F5F9] px-3 py-2 rounded-lg">
          <div className="w-9 h-9 bg-[#0B3C8A] rounded-full grid place-items-center text-white">
            AJ
          </div>
          <ChevronDown size={16} />
        </button>

        {open && (
          <div className="absolute right-0 top-14 w-56 bg-white border border-[#E5E9F2] rounded-xl shadow-lg">
            {[{ icon: User, label: "Profile" }, { icon: Settings, label: "Settings" }].map(({ icon: Icon, label }) => (
              <button key={label} className="px-4 py-3 flex gap-3 hover:bg-[#F1F5F9] w-full">
                <Icon size={16} /> {label}
              </button>
            ))}
            <button className="px-4 py-3 flex gap-3 text-[#FF4D1C] hover:bg-[#FFF1EB] w-full">
              <LogOut size={16} /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
