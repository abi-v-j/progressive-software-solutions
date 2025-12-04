import React, { useState, useMemo } from 'react';
import { User } from '../types';

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: 'Alex Johnson', email: 'alex@mail.com', role: 'Admin', status: 'Active' },
        { id: 2, name: 'Maria Garcia', email: 'maria@mail.com', role: 'User', status: 'Active' },
        { id: 3, name: 'David Wilson', email: 'david@mail.com', role: 'User', status: 'Blocked' },
    ]);

    const [search, setSearch] = useState('');

    const filteredUsers = useMemo(() => {
        return users.filter(u =>
            u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase())
        );
    }, [users, search]);

    const toggleStatus = (id: number) => {
        setUsers(prev =>
            prev.map(u =>
                u.id === id
                    ? { ...u, status: u.status === 'Active' ? 'Blocked' : 'Active' }
                    : u
            )
        );
    };

    const deleteUser = (id: number) => {
        if (!confirm('Delete this user?')) return;
        setUsers(prev => prev.filter(u => u.id !== id));
    };

    const exportCSV = () => {
        if (!filteredUsers.length) {
            alert('No users to export');
            return;
        }

        const headers = ['ID', 'Name', 'Email', 'Role', 'Status'];

        const rows = filteredUsers.map(user => [
            user.id,
            `"${user.name}"`,
            `"${user.email}"`,
            user.role,
            user.status
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map(r => r.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `users_${Date.now()}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h1 className="text-xl font-semibold">Users</h1>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search users..."
                        className="border px-3 py-2 rounded-md text-sm w-full md:w-64"
                    />

                    <button
                        onClick={exportCSV}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                    >
                        Export CSV
                    </button>
                </div>
            </div>


            {/* ===================== DESKTOP TABLE ===================== */}
            <div className="hidden md:block bg-white border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="text-left px-4 py-3">Name</th>
                            <th className="text-left px-4 py-3">Email</th>
                            <th className="text-left px-4 py-3">Role</th>
                            <th className="text-left px-4 py-3">Status</th>
                            <th className="text-left px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user.id} className="border-t">
                                <td className="px-4 py-3">{user.name}</td>
                                <td className="px-4 py-3">{user.email}</td>
                                <td className="px-4 py-3">{user.role}</td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium
                    ${user.status === 'Active'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-700'
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 flex gap-2">
                                    <button
                                        onClick={() => toggleStatus(user.id)}
                                        className="px-3 py-1 text-xs rounded border"
                                    >
                                        Toggle
                                    </button>
                                    <button
                                        onClick={() => deleteUser(user.id)}
                                        className="px-3 py-1 text-xs rounded border border-red-500 text-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {filteredUsers.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-center py-6 text-gray-500">
                                    No users found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* ===================== MOBILE CARD VIEW ===================== */}
            <div className="md:hidden space-y-4">
                {filteredUsers.map(user => (
                    <div key={user.id} className="bg-white border rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                            <div>
                                <p className="font-semibold">{user.name}</p>
                                <p className="text-xs text-gray-500">{user.email}</p>
                            </div>
                            <span
                                className={`px-2 py-0.5 h-fit rounded-full text-xs font-medium
                ${user.status === 'Active'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                    }`}
                            >
                                {user.status}
                            </span>
                        </div>

                        <div className="flex justify-between text-sm text-gray-700">
                            <span>Role: {user.role}</span>
                        </div>

                        <div className="flex gap-2 pt-2">
                            <button
                                onClick={() => toggleStatus(user.id)}
                                className="flex-1 px-3 py-2 text-xs rounded border"
                            >
                                Toggle
                            </button>
                            <button
                                onClick={() => deleteUser(user.id)}
                                className="flex-1 px-3 py-2 text-xs rounded border border-red-500 text-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}

                {filteredUsers.length === 0 && (
                    <div className="text-center py-6 text-gray-500">
                        No users found
                    </div>
                )}
            </div>
        </div>
    );
};

export default Users;
