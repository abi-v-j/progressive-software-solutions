import React, { useMemo, useState } from 'react';
import { Poster } from '../types';


const ManagePosters: React.FC = () => {
  const [posters, setPosters] = useState<Poster[]>([]);
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [search, setSearch] = useState('');
  const [editId, setEditId] = useState<string | null>(null);

  const filteredPosters = useMemo(() => {
    return posters.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [posters, search]);

  const resetForm = () => {
    setTitle('');
    setImageUrl('');
    setEditId(null);
  };

  const handleSubmit = () => {
    if (!title.trim() || !imageUrl.trim()) {
      alert('Title and image URL are required');
      return;
    }

    if (editId) {
      setPosters(prev =>
        prev.map(p =>
          p.id === editId ? { ...p, title, imageUrl } : p
        )
      );
    } else {
      const newPoster: Poster = {
        id: crypto.randomUUID(),
        title,
        imageUrl,
      };

      setPosters(prev => [newPoster, ...prev]);
    }

    resetForm();
  };

  const handleEdit = (poster: Poster) => {
    setEditId(poster.id);
    setTitle(poster.title);
    setImageUrl(poster.imageUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
    if (!confirm('Delete this poster?')) return;
    setPosters(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-lg sm:text-xl font-semibold">Manage Posters</h1>

        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search posters..."
          className="border px-3 py-2 rounded-md text-sm w-full sm:w-64"
        />
      </div>

      {/* ================= FORM ================= */}
      <div className="bg-white p-4 sm:p-5 rounded-lg border space-y-3">
        <h2 className="text-sm font-medium">
          {editId ? 'Edit Poster' : 'Add Poster'}
        </h2>

        <input
          className="border p-2 rounded w-full text-sm"
          placeholder="Poster Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          className="border p-2 rounded w-full text-sm"
          placeholder="Poster Image URL"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
        />

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
          >
            {editId ? 'Update Poster' : 'Add Poster'}
          </button>

          {editId && (
            <button
              onClick={resetForm}
              className="border px-4 py-2 rounded text-sm"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosters.map(poster => (
          <div
            key={poster.id}
            className="relative border rounded-xl overflow-hidden bg-white shadow-sm"
          >
            {/* Aspect-ratio safe image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
              <img
                src={poster.imageUrl}
                alt={poster.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-3 space-y-2">
              <p className="text-sm font-medium line-clamp-1">
                {poster.title}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(poster)}
                  className="flex-1 border py-1.5 rounded text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(poster.id)}
                  className="flex-1 bg-red-600 text-white py-1.5 rounded text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredPosters.length === 0 && (
          <div className="col-span-full text-center py-6 text-gray-500 text-sm">
            No posters found
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagePosters;
