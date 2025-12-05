import { NavLink } from "react-router-dom";
import {
  Home, Users, ShoppingBag, MessageSquare,
  BarChart3, FileText, Settings, Image,
  BookOpen, Layers,
  ChevronLeft, ChevronRight, LogOut,
  Camera,
  Star,
  Images
} from "lucide-react";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const toggle = () => {
    const next = !collapsed;
    localStorage.setItem("sidebar", String(next));
    setCollapsed(next);
  };

  
  const menu = [
    // ================= CORE =================
    { icon: Home, label: "Dashboard", path: "/admin/dashboard" },
    { icon: Users, label: "Users", path: "/admin/users" },

    // ================= ANALYTICS =================
    { icon: BarChart3, label: "Analytics", path: "/admin/analytics" },
    { icon: FileText, label: "Reports", path: "/admin/reports" },

    // ================= CONTENT =================
    { icon: BookOpen, label: "Blogs", path: "/admin/blog" },
    { icon: Layers, label: "Courses", path: "/admin/courses" },
    { icon: Images, label: "Course Images", path: "/admin/course-images" },
    { icon: Layers, label: "Course Sections", path: "/admin/course-sections" },

    // ================= MEDIA =================
    { icon: Image, label: "Gallery", path: "/admin/gallery" },
    { icon: Camera, label: "Training Gallery", path: "/admin/training-gallery" },
    { icon: Image, label: "Event Gallery", path: "/admin/event-gallery" },
    { icon: Image, label: "Posters", path: "/admin/posters" },

    // ================= SOCIAL PROOF =================
    { icon: MessageSquare, label: "Testimonials", path: "/admin/testimonials" },
    { icon: Star, label: "Reviews", path: "/admin/reviews" },

    // ================= SYSTEM =================
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ];
  return (
    <aside
      className={`hidden lg:flex h-screen flex-col transition-all duration-300
      ${collapsed ? "w-20" : "w-64"}
      bg-white border-r border-[#E5E9F2] text-[#0F172A]`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-[#E5E9F2]">
        {!collapsed && (
          <img src="/logo.png" className="h-9 w-auto object-contain" />
        )}
        <button onClick={toggle} className="p-2 rounded-lg hover:bg-[#F1F5F9]">
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {menu.map(i => (
          <NavLink
            key={i.path}
            to={i.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-3 rounded-lg text-sm w-full transition-all
              ${isActive
                ? "bg-[#0B3C8A] text-white border-l-4 border-[#FF4D1C]"
                : "text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]"}`
            }
          >
            <i.icon size={20} />
            {!collapsed && i.label}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-[#E5E9F2]">
        <button className="flex items-center gap-3 w-full px-3 py-3 text-sm rounded-lg text-[#FF4D1C] hover:bg-[#FFF1EB]">
          <LogOut size={20} />
          {!collapsed && "Logout"}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
