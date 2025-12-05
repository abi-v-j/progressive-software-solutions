import React, { useMemo, useState, useEffect } from 'react';
import { Course, CourseLevel } from '../types';
import { CourseService } from '../services/courses';
import { Link } from 'react-router-dom';

const slugify = (text: string) =>
  text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');

const ManageCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  // BASIC FIELDS
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [level, setLevel] = useState<CourseLevel>(CourseLevel.Beginner);

  // ADVANCED FIELDS
  const [images, setImages] = useState('');
  const [outcomes, setOutcomes] = useState('');
  const [certifications, setCertifications] = useState('');
  const [modules, setModules] = useState('');
  const [targetAudience, setTargetAudience] = useState('');

  // FLAGS
  const [eligibleForPSC, setEligibleForPSC] = useState(false);
  const [hasInternship, setHasInternship] = useState(false);

  // UI
  const [search, setSearch] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  // ✅ FETCH
  useEffect(() => {
    CourseService.getAll().then(res => {
      setCourses(res.data.data);
    });
  }, []);

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
    setImages('');
    setOutcomes('');
    setCertifications('');
    setModules('');
    setTargetAudience('');
    setEligibleForPSC(false);
    setHasInternship(false);
    setEditId(null);
  };

  // ✅ CREATE / UPDATE (MYSQL SAFE)
  const handleSubmit = async () => {
    if (!title || !summary || !description || !category || !duration || !images) {
      alert('Missing required fields');
      return;
    }

    const payload = {
      slug: slugify(title),
      title,
      summary,
      description,
      category,
      duration,
      level,
      images: images.split(',').map(i => i.trim()),
      outcomes: outcomes.split(',').map(o => o.trim()),
      certifications: certifications.split('|').filter(Boolean),
      modules: modules.split('|').filter(Boolean),
      eligibleForPSC,
      hasInternship,
      targetAudience: targetAudience.split(',').map(t => t.trim())
    };

    let response;

    if (editId !== null) {
      response = await CourseService.update(editId, payload);
      setCourses(prev =>
        prev.map(c => (c.id === editId ? response.data.data : c))
      );
    } else {
      response = await CourseService.create(payload);
      setCourses(prev => [response.data.data, ...prev]);
    }

    resetForm();
    setShowForm(false);
  };

  // ✅ EDIT
  const handleEdit = (course: Course) => {
    setShowForm(true);

    setEditId(course.id);
    setTitle(course.title);
    setSummary(course.summary);
    setDescription(course.description);
    setCategory(course.category);
    setDuration(course.duration);
    setLevel(course.level);

    setImages(
      Array.isArray(course.images)
        ? course.images.join(', ')
        : JSON.parse(course.images || '[]').join(', ')
    );

    setOutcomes(
      Array.isArray(course.outcomes)
        ? course.outcomes.join(', ')
        : JSON.parse(course.outcomes || '[]').join(', ')
    );

    setTargetAudience(
      Array.isArray(course.targetAudience)
        ? course.targetAudience.join(', ')
        : JSON.parse(course.targetAudience || '[]').join(', ')
    );
    const certs = Array.isArray(course.certifications)
      ? course.certifications
      : JSON.parse(course.certifications || '[]');

    const mods = Array.isArray(course.modules)
      ? course.modules
      : JSON.parse(course.modules || '[]');

    setCertifications(
      certs.map((c: any) => `${c.name}:${c.authority || ''}:${c.isGovernment}`).join('|')
    );

    setModules(
      mods.map((m: any) => `${m.title}:${m.description}`).join('|')
    );


    setEligibleForPSC(course.eligibleForPSC);
    setHasInternship(course.hasInternship);
  };

  // ✅ DELETE
  const handleDelete = async (id: number) => {
    if (!confirm('Delete this course?')) return;
    await CourseService.remove(id);
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
        <h1 className="text-xl font-semibold">Manage Courses</h1>

        <div className="flex gap-3">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="border px-3 py-2 rounded-md text-sm md:w-64"
          />

          <button
            onClick={() => setShowForm(prev => !prev)}
            className="bg-green-600 text-white px-4 py-2 rounded text-sm"
          >
            {showForm ? 'Close' : 'Add New Course'}
          </button>
        </div>
      </div>

      {/* ✅ FORM */}
      {showForm && (
        <div className="bg-white p-5 border rounded-lg space-y-3">
          <input className="border p-2 rounded w-full" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
          <input className="border p-2 rounded w-full" placeholder="Summary" value={summary} onChange={e => setSummary(e.target.value)} />
          <textarea className="border p-2 rounded w-full h-24" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
          <input className="border p-2 rounded w-full" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
          <input className="border p-2 rounded w-full" placeholder="Duration" value={duration} onChange={e => setDuration(e.target.value)} />

          <textarea className="border p-2 rounded w-full h-20" placeholder="Images (comma separated URLs)" value={images} onChange={e => setImages(e.target.value)} />
          <textarea className="border p-2 rounded w-full h-20" placeholder="Outcomes (comma separated)" value={outcomes} onChange={e => setOutcomes(e.target.value)} />
          <textarea className="border p-2 rounded w-full h-20" placeholder="Certifications (name:authority:true | ...)" value={certifications} onChange={e => setCertifications(e.target.value)} />
          <textarea className="border p-2 rounded w-full h-20" placeholder="Modules (title:description | ...)" value={modules} onChange={e => setModules(e.target.value)} />
          <textarea className="border p-2 rounded w-full h-20" placeholder="Target Audience (comma separated)" value={targetAudience} onChange={e => setTargetAudience(e.target.value)} />

          <select value={level} onChange={e => setLevel(e.target.value as CourseLevel)} className="border p-2 rounded w-full">
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <div className="flex gap-6 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={eligibleForPSC} onChange={e => setEligibleForPSC(e.target.checked)} />
              PSC Eligible
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" checked={hasInternship} onChange={e => setHasInternship(e.target.checked)} />
              Internship Available
            </label>
          </div>

          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
            {editId ? 'Update Course' : 'Add Course'}
          </button>
        </div>
      )}

      {/* ✅ LIST */}
      <div className="bg-white border rounded-lg">
        {filteredCourses.map(course => (
          <div key={course.id} className="p-4 border-b flex justify-between items-center">
            <div>
              <Link
                to={`/admin/courses/${course.id}`}
                className="font-medium text-blue-600 hover:underline"
              >
                {course.title}
              </Link>
              <p className="text-xs text-gray-500">
                {course.category} • {course.level} • {course.duration}
              </p>
            </div>

            <div className="flex gap-2">
              <button onClick={() => handleEdit(course)} className="text-blue-600 text-sm">Edit</button>
              <button onClick={() => handleDelete(course.id)} className="text-red-600 text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ManageCourses;
