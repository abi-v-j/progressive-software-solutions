import React, { useMemo, useState } from 'react';

type ReportRow = {
  id: number;
  type: 'User' | 'Order' | 'Course';
  reference: string;
  amount?: number;
  status: string;
  date: string;
};

const RAW_REPORTS: ReportRow[] = [
  { id: 1, type: 'Order', reference: 'ORD-10021', amount: 2499, status: 'Paid', date: '2025-12-01' },
  { id: 2, type: 'User', reference: 'alex@mail.com', status: 'Registered', date: '2025-12-01' },
  { id: 3, type: 'Course', reference: 'MERN Stack', status: 'Published', date: '2025-11-28' },
  { id: 4, type: 'Order', reference: 'ORD-10022', amount: 1199, status: 'Refunded', date: '2025-11-27' },
  { id: 5, type: 'User', reference: 'maria@mail.com', status: 'Blocked', date: '2025-11-26' },
];

const Reports: React.FC = () => {
  const [type, setType] = useState<'All' | ReportRow['type']>('All');
  const [search, setSearch] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const filtered = useMemo(() => {
    return RAW_REPORTS.filter(r => {
      if (type !== 'All' && r.type !== type) return false;
      if (from && r.date < from) return false;
      if (to && r.date > to) return false;
      if (
        search &&
        !r.reference.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [type, search, from, to]);

  const exportCSV = () => {
    if (!filtered.length) {
      alert('No records to export');
      return;
    }

    const headers = ['ID', 'Type', 'Reference', 'Amount', 'Status', 'Date'];

    const rows = filtered.map(r => [
      r.id,
      r.type,
      `"${r.reference}"`,
      r.amount ?? '',
      r.status,
      r.date,
    ]);

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reports_${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
        <h1 className="text-xl font-semibold">Reports</h1>

        <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
          <select
            value={type}
            onChange={e => setType(e.target.value as any)}
            className="border px-3 py-2 rounded-md text-sm"
          >
            <option value="All">All</option>
            <option value="User">Users</option>
            <option value="Order">Orders</option>
            <option value="Course">Courses</option>
          </select>

          <input
            type="date"
            value={from}
            onChange={e => setFrom(e.target.value)}
            className="border px-3 py-2 rounded-md text-sm"
          />

          <input
            type="date"
            value={to}
            onChange={e => setTo(e.target.value)}
            className="border px-3 py-2 rounded-md text-sm"
          />

          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search..."
            className="border px-3 py-2 rounded-md text-sm w-full sm:w-56"
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
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3">ID</th>
              <th className="text-left px-4 py-3">Type</th>
              <th className="text-left px-4 py-3">Reference</th>
              <th className="text-left px-4 py-3">Amount</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <tr key={r.id} className="border-t">
                <td className="px-4 py-3">{r.id}</td>
                <td className="px-4 py-3">{r.type}</td>
                <td className="px-4 py-3">{r.reference}</td>
                <td className="px-4 py-3">
                  {r.amount ? `₹${r.amount}` : '—'}
                </td>
                <td className="px-4 py-3">{r.status}</td>
                <td className="px-4 py-3">{r.date}</td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-500">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ===================== MOBILE CARDS ===================== */}
      <div className="md:hidden space-y-4">
        {filtered.map(r => (
          <div key={r.id} className="bg-white border rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{r.type}</span>
              <span>{r.date}</span>
            </div>
            <p className="text-sm">{r.reference}</p>
            <p className="text-xs text-gray-600">
              Status: {r.status}
            </p>
            {r.amount && (
              <p className="text-sm font-semibold text-emerald-700">
                ₹{r.amount}
              </p>
            )}
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No records found
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
