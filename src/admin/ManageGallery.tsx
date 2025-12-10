import React, { useMemo, useState, useEffect } from 'react';
import { GalleryItem, GalleryCategory } from '../types';
import { GalleryService } from '../services/gallery';

const ManageGallery: React.FC = () => {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [title, setTitle] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);
  const [category, setCategory] = useState<GalleryCategory>('Event');
  const [search, setSearch] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    GalleryService.getAll().then(res => {
      setImages(Array.isArray(res.data.data) ? res.data.data : []);
    });
  }, []);

  const filteredImages = useMemo(() => {
    return images.filter(img =>
      img.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [images, search]);

  const resetForm = () => {
    setTitle('');
    setFiles(null);
    setCategory('Event');
    setEditId(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(e.target.files);
  };

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert('Title required');
      return;
    }

    let uploadedUrls: string[] = [];

    if (files && files.length > 0) {
      const res = await GalleryService.uploadImages(files);
      uploadedUrls = res.data.data;
    }

    if (editId) {
      await GalleryService.update(editId, {
        title,
        imageUrl: uploadedUrls[0], // only first image on edit
        category,
      });

      const fresh = await GalleryService.getAll();
      setImages(fresh.data.data);
    } else {
      const payloads = uploadedUrls.map(url => ({
        title,
        imageUrl: url,
        category,
      }));

      for (const p of payloads) {
        await GalleryService.create(p);
      }

      const fresh = await GalleryService.getAll();
      setImages(fresh.data.data);
    }

    resetForm();
  };

  const handleEdit = (item: GalleryItem) => {
    setEditId(item.id);
    setTitle(item.title);
    setCategory(item.category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this gallery item?')) return;
    await GalleryService.remove(id);
    setImages(prev => prev.filter(img => img.id !== id));
  };

  return (
    <div className="space-y-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-xl font-semibold">Manage Gallery</h1>

        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search images..."
          className="border px-3 py-2 rounded-md text-sm w-full md:w-64"
        />
      </div>

      <div className="bg-white p-5 rounded-lg border space-y-3">
        <h2 className="text-sm font-medium">
          {editId ? 'Edit Image' : 'Add Images'}
        </h2>

        <input
          className="w-full border p-2 rounded"
          placeholder="Image Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="w-full border p-2 rounded"
        />

        <select
          value={category}
          onChange={e => setCategory(e.target.value as GalleryCategory)}
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
            {editId ? 'Update Image' : 'Upload Images'}
          </button>

          {editId && (
            <button onClick={resetForm} className="border px-4 py-2 rounded">
              Cancel
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map(item => (
          <div key={item.id} className="relative border rounded overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-2 text-xs">
              <p className="font-medium">{item.title}</p>
              <p>{item.category}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="flex-1 bg-gray-200 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="flex-1 bg-red-600 text-white py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ManageGallery;
