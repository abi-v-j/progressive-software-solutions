import React from 'react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Revenue', value: '$48,200' },
    { label: 'Users', value: '12,403' },
    { label: 'Orders', value: '892' },
    { label: 'Refunds', value: '32' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="text-sm text-gray-500">{s.label}</p>
            <h2 className="text-2xl font-semibold mt-2">{s.value}</h2>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="p-4 border-b">
          <h3 className="font-semibold">Recent Activity</h3>
        </div>
        <div className="divide-y">
          {['User registered', 'Order created', 'Payment failed'].map((a, i) => (
            <div key={i} className="p-4 text-sm text-gray-700">{a}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
