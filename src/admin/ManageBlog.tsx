import React, { useMemo, useState } from 'react';
import { BlogPost } from '../types';

const slugify = (text: string) =>
  text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');

const ManageBlog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [search, setSearch] = useState('');
  const [editId, setEditId] = useState<string | null>(null);

  const filteredBlogs = useMemo(
    () => blogs.filter(b => b.title.toLowerCase().includes(search.toLowerCase())),
    [blogs, search]
  );

  const resetForm = () => {
    setTitle('');
    setExcerpt('');
    setAuthor('');
    setImageUrl('');
    setEditId(null);
  };

  const handleSubmit = () => {
    if (!title || !excerpt || !author || !imageUrl) {
      alert('All fields are required');
      return;
    }

    if (editId) {
      setBlogs(prev =>
        prev.map(b =>
          b.id === editId
            ? { ...b, title, excerpt, author, imageUrl, slug: slugify(title) }
            : b
        )
      );
    } else {
      const newBlog: BlogPost = {
        id: crypto.randomUUID(),
        title,
        slug: slugify(title),
        excerpt,
        author,
        imageUrl,
        date: new Date().toISOString().split('T')[0],
      };

      setBlogs(prev => [newBlog, ...prev]);
    }

    resetForm();
  };

  const handleEdit = (blog: BlogPost) => {
    setEditId(blog.id);
    setTitle(blog.title);
    setExcerpt(blog.excerpt);
    setAuthor(blog.author);
    setImageUrl(blog.imageUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
    if (!confirm('Delete this blog?')) return;
    setBlogs(prev => prev.filter(b => b.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <h1 className="text-xl font-semibold">Manage Blog</h1>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search blogs..."
          className="border px-3 py-2 rounded-md text-sm md:w-64"
        />
      </div>

      {/* FORM */}
      <div className="bg-white p-5 rounded-lg border space-y-3">
        <input className="border p-2 rounded w-full" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea className="border p-2 rounded w-full h-24" placeholder="Excerpt" value={excerpt} onChange={e => setExcerpt(e.target.value)} />
        <input className="border p-2 rounded w-full" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
        <input className="border p-2 rounded w-full" placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />

        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
          {editId ? 'Update Blog' : 'Add Blog'}
        </button>
      </div>

      {/* LIST */}
      <div className="bg-white border rounded-lg">
        {filteredBlogs.map(blog => (
          <div key={blog.id} className="p-4 border-b flex justify-between items-center">
            <div>
              <p className="font-medium">{blog.title}</p>
              <p className="text-xs text-gray-500">{blog.author} • {blog.date}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(blog)} className="text-blue-600 text-sm">Edit</button>
              <button onClick={() => handleDelete(blog.id)} className="text-red-600 text-sm">Delete</button>
            </div>
          </div>
        ))}

        {filteredBlogs.length === 0 && (
          <p className="text-center py-6 text-gray-500">No blogs found</p>
        )}
      </div>
    </div>
  );
};

export default ManageBlog;
