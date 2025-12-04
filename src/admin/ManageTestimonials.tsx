import React, { useMemo, useState } from 'react';
import { Testimonial } from '../types';

const ManageTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [search, setSearch] = useState('');

  const [editId, setEditId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [quote, setQuote] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const filteredTestimonials = useMemo(() => {
    return testimonials.filter(t =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.company.toLowerCase().includes(search.toLowerCase()) ||
      t.quote.toLowerCase().includes(search.toLowerCase())
    );
  }, [testimonials, search]);

  const resetForm = () => {
    setEditId(null);
    setName('');
    setRole('');
    setCompany('');
    setQuote('');
    setPhotoUrl('');
  };

  const handleSubmit = () => {
    if (!name || !role || !company || !quote || !photoUrl) {
      alert('All fields are required');
      return;
    }

    if (editId) {
      setTestimonials(prev =>
        prev.map(t =>
          t.id === editId
            ? { ...t, name, role, company, quote, photoUrl }
            : t
        )
      );
    } else {
      const newTestimonial: Testimonial = {
        id: crypto.randomUUID(),
        name,
        role,
        company,
        quote,
        photoUrl,
      };

      setTestimonials(prev => [newTestimonial, ...prev]);
    }

    resetForm();
  };

  const handleEdit = (t: Testimonial) => {
    setEditId(t.id);
    setName(t.name);
    setRole(t.role);
    setCompany(t.company);
    setQuote(t.quote);
    setPhotoUrl(t.photoUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
    if (!confirm('Delete this testimonial?')) return;
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-lg sm:text-xl font-semibold">Manage Testimonials</h1>

        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search testimonials..."
          className="border px-3 py-2 rounded-md text-sm w-full sm:w-64"
        />
      </div>

      {/* ================= FORM ================= */}
      <div className="bg-white p-4 sm:p-5 rounded-lg border space-y-3">
        <h2 className="text-sm font-medium">
          {editId ? 'Edit Testimonial' : 'Add Testimonial'}
        </h2>

        <input
          className="border p-2 rounded w-full text-sm"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <div className="grid sm:grid-cols-2 gap-3">
          <input
            className="border p-2 rounded w-full text-sm"
            placeholder="Role"
            value={role}
            onChange={e => setRole(e.target.value)}
          />

          <input
            className="border p-2 rounded w-full text-sm"
            placeholder="Company"
            value={company}
            onChange={e => setCompany(e.target.value)}
          />
        </div>

        <input
          className="border p-2 rounded w-full text-sm"
          placeholder="Photo URL"
          value={photoUrl}
          onChange={e => setPhotoUrl(e.target.value)}
        />

        {photoUrl && (
          <img
            src={photoUrl}
            alt="Preview"
            className="h-20 w-20 object-cover rounded-full border"
          />
        )}

        <textarea
          className="border p-2 rounded w-full text-sm h-24"
          placeholder="Testimonial Quote"
          value={quote}
          onChange={e => setQuote(e.target.value)}
        />

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
          >
            {editId ? 'Update Testimonial' : 'Add Testimonial'}
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
        {filteredTestimonials.map(t => (
          <div
            key={t.id}
            className="bg-white border rounded-xl p-4 shadow-sm space-y-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={t.photoUrl}
                className="w-12 h-12 rounded-full object-cover border"
              />
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-semibold truncate">{t.name}</p>
                <p className="text-xs text-gray-500 truncate">
                  {t.role} • {t.company}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 line-clamp-3">
              “{t.quote}”
            </p>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => handleEdit(t)}
                className="flex-1 border py-1.5 rounded text-xs"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(t.id)}
                className="flex-1 bg-red-600 text-white py-1.5 rounded text-xs"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {filteredTestimonials.length === 0 && (
          <div className="col-span-full text-center py-6 text-gray-500 text-sm">
            No testimonials found
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageTestimonials;
