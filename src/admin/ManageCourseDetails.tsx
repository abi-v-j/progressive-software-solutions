import React, { useState } from 'react';

const ManageCourseDetails: React.FC = () => {
  const [details, setDetails] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [level, setLevel] = useState('');

  const addDetail = () => {
    if (!title || !duration || !level) return;
    setDetails([...details, { id: Date.now(), title, duration, level }]);
    setTitle('');
    setDuration('');
    setLevel('');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Manage Course Details</h1>

      <div className="bg-white p-5 border rounded-lg space-y-3">
        <input className="w-full border p-2 rounded" placeholder="Course Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input className="w-full border p-2 rounded" placeholder="Duration" value={duration} onChange={e => setDuration(e.target.value)} />
        <input className="w-full border p-2 rounded" placeholder="Level" value={level} onChange={e => setLevel(e.target.value)} />

        <button onClick={addDetail} className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Details
        </button>
      </div>

      <div className="bg-white border rounded">
        {details.map(d => (
          <div key={d.id} className="p-4 border-b flex justify-between">
            <span>{d.title} | {d.duration} | {d.level}</span>
            <button onClick={() => setDetails(details.filter(x => x.id !== d.id))} className="text-red-600">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCourseDetails;
