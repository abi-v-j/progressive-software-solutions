import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Bell, Search, ChevronDown, User, Settings,
  LogOut, Menu, X,
  Home, Users, BarChart3, FileText,
  BookOpen, Layers, Image, Camera,
  MessageSquare, Star
} from "lucide-react";

/* ======================= */
/* ✅ Helper Components */
/* ======================= */

const Section = ({ title, children }) => (
  <div>
    <p className="text-xs font-bold text-[#94A3B8] mb-2 tracking-wider">
      {title}
    </p>
    <div className="space-y-1">{children}</div>
  </div>
);

const DrawerLink = ({ to, icon: Icon, label, close }) => (
  <NavLink
    onClick={() => close(false)}
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all
       ${isActive
         ? "bg-[#0B3C8A] text-white"
         : "text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]"}`
    }
  >
    <Icon size={18} />
    {label}
  </NavLink>
);

/* ======================= */
/* ✅ Main Navbar */
/* ======================= */

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="h-16 bg-white border-b border-[#E5E9F2] flex items-center justify-between px-4 sm:px-6">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDrawer(true)}
            className="lg:hidden p-2 hover:bg-[#F1F5F9] rounded-lg"
          >
            <Menu size={22} />
          </button>

          <div className="relative w-64 hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B] w-5 h-5" />
            <input
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F6F9FF] border border-[#E5E9F2] rounded-lg focus:ring-2 focus:ring-[#0B3C8A] outline-none"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 relative">
          <button className="relative p-2 hover:bg-[#F1F5F9] rounded-lg">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF4D1C] rounded-full" />
          </button>

          <button
            onClick={() => setOpen(v => !v)}
            className="flex items-center gap-3 hover:bg-[#F1F5F9] px-3 py-2 rounded-lg"
          >
            <div className="w-9 h-9 bg-[#0B3C8A] rounded-full grid place-items-center text-white text-sm font-bold">
              AJ
            </div>
            <ChevronDown size={16} />
          </button>

          {open && (
            <div className="absolute right-0 top-14 w-56 bg-white border border-[#E5E9F2] rounded-xl shadow-lg z-50">
              <NavLink
                to="/admin/settings"
                onClick={() => setOpen(false)}
                className="px-4 py-3 flex gap-3 hover:bg-[#F1F5F9] w-full"
              >
                <Settings size={16} /> Settings
              </NavLink>

              <button className="px-4 py-3 flex gap-3 text-[#FF4D1C] hover:bg-[#FFF1EB] w-full">
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      {drawer && (
        <div className="fixed inset-0 bg-black/40 z-50 lg:hidden">
          <div className="absolute left-0 top-0 h-full w-72 bg-white flex flex-col">

            {/* HEADER */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-[#E5E9F2]">
              <img src="/logo.png" className="h-8 object-contain" />
              <button
                onClick={() => setDrawer(false)}
                className="p-2 hover:bg-[#F1F5F9] rounded-lg"
              >
                <X size={20} />
              </button>
            </div>

            {/* MENU */}
            <nav className="flex-1 p-4 space-y-6 overflow-y-auto">

              <Section title="CORE">
                <DrawerLink to="/admin/dashboard" icon={Home} label="Dashboard" close={setDrawer} />
                <DrawerLink to="/admin/users" icon={Users} label="Users" close={setDrawer} />
              </Section>

              <Section title="ANALYTICS">
                <DrawerLink to="/admin/analytics" icon={BarChart3} label="Analytics" close={setDrawer} />
                <DrawerLink to="/admin/reports" icon={FileText} label="Reports" close={setDrawer} />
              </Section>

              <Section title="CONTENT">
                <DrawerLink to="/admin/blog" icon={BookOpen} label="Blogs" close={setDrawer} />
                <DrawerLink to="/admin/courses" icon={Layers} label="Courses" close={setDrawer} />
              </Section>

              <Section title="MEDIA">
                <DrawerLink to="/admin/gallery" icon={Image} label="Gallery" close={setDrawer} />
                <DrawerLink to="/admin/posters" icon={Image} label="Posters" close={setDrawer} />
                <DrawerLink to="/admin/training-gallery" icon={Camera} label="Training Gallery" close={setDrawer} />
              </Section>

              <Section title="SOCIAL PROOF">
                <DrawerLink to="/admin/testimonials" icon={MessageSquare} label="Testimonials" close={setDrawer} />
                <DrawerLink to="/admin/reviews" icon={Star} label="Reviews" close={setDrawer} />
              </Section>

              <Section title="SYSTEM">
                <DrawerLink to="/admin/settings" icon={Settings} label="Settings" close={setDrawer} />
              </Section>

            </nav>

            {/* LOGOUT */}
            <div className="p-4 border-t border-[#E5E9F2]">
              <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm text-[#FF4D1C] hover:bg-[#FFF1EB]">
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
