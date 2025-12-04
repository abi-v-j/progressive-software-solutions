import React, { useMemo, useState } from 'react';
import { GalleryItem } from '../types';

const ManageGallery: React.FC = () => {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState<GalleryItem['category']>('Event');
  const [search, setSearch] = useState('');
  const [editId, setEditId] = useState<string | null>(null);

  const filteredImages = useMemo(() => {
    return images.filter(img =>
      img.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [images, search]);

  const resetForm = () => {
    setTitle('');
    setImageUrl('');
    setCategory('Event');
    setEditId(null);
  };

  const handleSubmit = () => {
    if (!title.trim() || !imageUrl.trim()) {
      alert('Title and Image URL are required');
      return;
    }

    if (editId) {
      setImages(prev =>
        prev.map(img =>
          img.id === editId
            ? { ...img, title, imageUrl, category }
            : img
        )
      );
    } else {
      const newItem: GalleryItem = {
        id: crypto.randomUUID(),
        title,
        imageUrl,
        category,
      };

      setImages(prev => [newItem, ...prev]);
    }

    resetForm();
  };

  const handleEdit = (item: GalleryItem) => {
    setEditId(item.id);
    setTitle(item.title);
    setImageUrl(item.imageUrl);
    setCategory(item.category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
    if (!confirm('Delete this gallery item?')) return;
    setImages(prev => prev.filter(img => img.id !== id));
  };

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-xl font-semibold">Manage Gallery</h1>

        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search images..."
          className="border px-3 py-2 rounded-md text-sm w-full md:w-64"
        />
      </div>

      {/* ================= FORM ================= */}
      <div className="bg-white p-5 rounded-lg border space-y-3">
        <h2 className="text-sm font-medium">
          {editId ? 'Edit Image' : 'Add Image'}
        </h2>

        <input
          className="w-full border p-2 rounded"
          placeholder="Image Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Image URL"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
        />

        <select
          value={category}
          onChange={e => setCategory(e.target.value as GalleryItem['category'])}
          className="w-full border p-2 rounded"
        >
          <option value="Event">Event</option>
          <option value="Training">Training</option>
          <option value="Students">Students</option>
        </select>

        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {editId ? 'Update Image' : 'Add Image'}
          </button>

          {editId && (
            <button
              onClick={resetForm}
              className="border px-4 py-2 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* ================= GALLERY GRID ================= */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map(item => (
          <div
            key={item.id}
            className="relative border rounded overflow-hidden group"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-40 object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end">
              <div className="p-3 text-white text-xs space-y-1">
                <p className="font-medium">{item.title}</p>
                <p className="opacity-80">{item.category}</p>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="flex-1 bg-white text-black py-1 rounded text-xs"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex-1 bg-red-600 text-white py-1 rounded text-xs"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredImages.length === 0 && (
          <div className="col-span-full text-center py-6 text-gray-500">
            No images found
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageGallery;
