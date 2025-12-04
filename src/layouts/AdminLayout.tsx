import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BottomBar from "../components/BottomBar";
import DashboardPage from "../admin/Dashboard";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("sidebar");
    if (saved) setCollapsed(saved === "true");
  }, []);

  return (
    <div className="flex h-screen bg-[#F6F9FF] overflow-hidden">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
        <BottomBar />
      </div>
    </div>
  );
};
