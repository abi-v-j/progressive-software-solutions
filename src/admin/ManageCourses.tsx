import React, { useMemo, useState } from 'react';
import { Course, CourseLevel } from '../types';

const slugify = (text: string) =>
  text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');

const ManageCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
const [level, setLevel] = useState<CourseLevel>(CourseLevel.Beginner);
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLiveProject, setIsLiveProject] = useState(false);
  const [hasCertification, setHasCertification] = useState(false);
  const [outcomes, setOutcomes] = useState('');
  const [search, setSearch] = useState('');
  const [editId, setEditId] = useState<string | null>(null);

  const filteredCourses = useMemo(
    () => courses.filter(c => c.title.toLowerCase().includes(search.toLowerCase())),
    [courses, search]
  );

  const resetForm = () => {
    setTitle('');
    setSummary('');
    setDescription('');
    setCategory('');
    setDuration('');
    setPrice('');
    setImageUrl('');
    setOutcomes('');
    setIsLiveProject(false);
    setHasCertification(false);
    setEditId(null);
  };

  const handleSubmit = () => {
    if (!title || !summary || !description || !category || !duration || !imageUrl) {
      alert('Missing required fields');
      return;
    }

    const newCourse: Course = {
      id: editId ?? crypto.randomUUID(),
      slug: slugify(title),
      title,
      summary,
      description,
      category,
      duration,
      level,
      price: price || undefined,
      imageUrl,
      modules: [],
      outcomes: outcomes.split(',').map(o => o.trim()),
      isLiveProject,
      hasCertification,
    };

    setCourses(prev =>
      editId
        ? prev.map(c => (c.id === editId ? newCourse : c))
        : [newCourse, ...prev]
    );

    resetForm();
  };

  const handleEdit = (course: Course) => {
    setEditId(course.id);
    setTitle(course.title);
    setSummary(course.summary);
    setDescription(course.description);
    setCategory(course.category);
    setDuration(course.duration);
    setLevel(course.level);
    setPrice(course.price || '');
    setImageUrl(course.imageUrl);
    setIsLiveProject(course.isLiveProject);
    setHasCertification(course.hasCertification);
    setOutcomes(course.outcomes.join(', '));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
    if (!confirm('Delete this course?')) return;
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <h1 className="text-xl font-semibold">Manage Courses</h1>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search courses..."
          className="border px-3 py-2 rounded-md text-sm md:w-64"
        />
      </div>

      {/* FORM */}
      <div className="bg-white p-5 border rounded-lg space-y-3">
        <input className="border p-2 rounded w-full" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input className="border p-2 rounded w-full" placeholder="Summary" value={summary} onChange={e => setSummary(e.target.value)} />
        <textarea className="border p-2 rounded w-full h-28" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <input className="border p-2 rounded w-full" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
        <input className="border p-2 rounded w-full" placeholder="Duration" value={duration} onChange={e => setDuration(e.target.value)} />
        <input className="border p-2 rounded w-full" placeholder="Price (optional)" value={price} onChange={e => setPrice(e.target.value)} />
        <input className="border p-2 rounded w-full" placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />

        <select value={level} onChange={e => setLevel(e.target.value as CourseLevel)} className="border p-2 rounded w-full">
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <input className="border p-2 rounded w-full" placeholder="Outcomes (comma separated)" value={outcomes} onChange={e => setOutcomes(e.target.value)} />

        <div className="flex gap-4 text-sm">
          <label className="flex gap-2 items-center">
            <input type="checkbox" checked={isLiveProject} onChange={e => setIsLiveProject(e.target.checked)} />
            Live Project
          </label>
          <label className="flex gap-2 items-center">
            <input type="checkbox" checked={hasCertification} onChange={e => setHasCertification(e.target.checked)} />
            Certification
          </label>
        </div>

        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
          {editId ? 'Update Course' : 'Add Course'}
        </button>
      </div>

      {/* LIST */}
      <div className="bg-white border rounded-lg">
        {filteredCourses.map(course => (
          <div key={course.id} className="p-4 border-b flex justify-between items-center">
            <div>
              <p className="font-medium">{course.title}</p>
              <p className="text-xs text-gray-500">{course.category} • {course.level} • {course.duration}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(course)} className="text-blue-600 text-sm">Edit</button>
              <button onClick={() => handleDelete(course.id)} className="text-red-600 text-sm">Delete</button>
            </div>
          </div>
        ))}
        {filteredCourses.length === 0 && (
          <p className="text-center py-6 text-gray-500">No courses found</p>
        )}
      </div>
    </div>
  );
};

export default ManageCourses;
