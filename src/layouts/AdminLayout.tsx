import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';

export const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

        <footer className="h-12 bg-white border-t flex items-center justify-between px-6 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Admin Dashboard</span>
          <span>Privacy • Terms • Support</span>
        </footer>
      </div>
    </div>
  );
};
