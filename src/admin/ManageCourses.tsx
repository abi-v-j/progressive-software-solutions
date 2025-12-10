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

  // ADVANCED FIELDS (text-based)
  const [outcomes, setOutcomes] = useState('');
  const [certifications, setCertifications] = useState('');
  const [modules, setModules] = useState('');
  const [targetAudience, setTargetAudience] = useState('');

  // IMAGES (new)
  const [imageFiles, setImageFiles] = useState<FileList | null>(null);
  const [existingImages, setExistingImages] = useState<string[]>([]);

  // FLAGS
  const [eligibleForPSC, setEligibleForPSC] = useState(false);
  const [hasInternship, setHasInternship] = useState(false);

  // UI
  const [search, setSearch] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    CourseService.getAll()
      .then(res => {
        const list = Array.isArray(res?.data?.data) ? res.data.data : [];
        setCourses(list);
      })
      .catch(err => {
        console.error('Failed to load courses:', err);
        setCourses([]);
      });
  }, []);


  const filteredCourses = useMemo(() => {
    if (!Array.isArray(courses)) return [];
    return courses.filter(c =>
      c.title?.toLowerCase().includes(search.toLowerCase())
    );
  }, [courses, search]);


  const resetForm = () => {
    setTitle('');
    setSummary('');
    setDescription('');
    setCategory('');
    setDuration('');
    setOutcomes('');
    setCertifications('');
    setModules('');
    setTargetAudience('');
    setEligibleForPSC(false);
    setHasInternship(false);
    setEditId(null);
    setImageFiles(null);
    setExistingImages([]);
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFiles(e.target.files);
    }
  };

  const handleRemoveExistingImage = (index: number) => {
    setExistingImages(prev => prev.filter((_, i) => i !== index));
  };

  // ✅ CREATE / UPDATE
  const handleSubmit = async () => {
    // Basic required validation INCLUDING images (either existing or new)
    if (
      !title ||
      !summary ||
      !description ||
      !category ||
      !duration ||
      (existingImages.length === 0 && (!imageFiles || imageFiles.length === 0))
    ) {
      alert('Missing required fields (title, summary, description, category, duration, at least one image)');
      return;
    }

    // 1) Upload new images if any
    let imagesToSave: string[] = [...existingImages];

    if (imageFiles && imageFiles.length > 0) {
      const uploadRes = await CourseService.uploadImages(imageFiles);
      const uploaded: string[] = uploadRes.data.data; // array of `/Upload/Courses/filename.ext`
      imagesToSave = [...imagesToSave, ...uploaded];
    }

    // 2) Build payload (same structure you already store in MySQL)
    const payload = {
      slug: slugify(title),
      title,
      summary,
      description,
      category,
      duration,
      level,
      images: imagesToSave,
      outcomes: outcomes
        ? outcomes.split(',').map(o => o.trim()).filter(Boolean)
        : [],
      certifications: certifications
        ? certifications.split('|').filter(Boolean)
        : [],
      modules: modules
        ? modules.split('|').filter(Boolean)
        : [],
      targetAudience: targetAudience
        ? targetAudience.split(',').map(t => t.trim()).filter(Boolean)
        : [],
      eligibleForPSC,
      hasInternship
    };

    let response;

    if (editId !== null) {
      response = await CourseService.update(editId, payload);
      const updatedCourse: Course = response.data.data;

      setCourses(prev =>
        prev.map(c => (c.id === editId ? updatedCourse : c))
      );
    } else {
      response = await CourseService.create(payload);
      const newCourse: Course = response.data.data;
      setCourses(prev => [newCourse, ...prev]);
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

    // Images: parse JSON or use array directly
    const imgs = Array.isArray(course.images)
      ? course.images
      : JSON.parse(course.images || '[]');
    setExistingImages(imgs || []);

    // Outcomes
    const outs = Array.isArray(course.outcomes)
      ? course.outcomes
      : JSON.parse(course.outcomes || '[]');
    setOutcomes((outs || []).join(', '));

    // Target audience
    const ta = Array.isArray(course.targetAudience)
      ? course.targetAudience
      : JSON.parse(course.targetAudience || '[]');
    setTargetAudience((ta || []).join(', '));

    // Certifications (support both object[] and string[])
    const certs: any[] = Array.isArray(course.certifications)
      ? course.certifications
      : JSON.parse(course.certifications || '[]');

    setCertifications(
      certs
        .map((c: any) => {
          if (typeof c === 'string') return c;
          return `${c.name}:${c.authority || ''}:${c.isGovernment}`;
        })
        .join('|')
    );

    // Modules (support both object[] and string[])
    const mods: any[] = Array.isArray(course.modules)
      ? course.modules
      : JSON.parse(course.modules || '[]');

    setModules(
      mods
        .map((m: any) => {
          if (typeof m === 'string') return m;
          return `${m.title}:${m.description}`;
        })
        .join('|')
    );

    setEligibleForPSC(!!course.eligibleForPSC);
    setHasInternship(!!course.hasInternship);
    setImageFiles(null); // clear file input for edit mode
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
            onClick={() => {
              if (!showForm) resetForm();
              setShowForm(prev => !prev);
            }}
            className="bg-green-600 text-white px-4 py-2 rounded text-sm"
          >
            {showForm ? 'Close' : 'Add New Course'}
          </button>
        </div>
      </div>

      {/* ✅ FORM */}
      {showForm && (
        <div className="bg-white p-5 border rounded-lg space-y-3">
          <input
            className="border p-2 rounded w-full"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <input
            className="border p-2 rounded w-full"
            placeholder="Summary"
            value={summary}
            onChange={e => setSummary(e.target.value)}
          />

          <textarea
            className="border p-2 rounded w-full h-24"
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <input
            className="border p-2 rounded w-full"
            placeholder="Category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />

          <input
            className="border p-2 rounded w-full"
            placeholder="Duration"
            value={duration}
            onChange={e => setDuration(e.target.value)}
          />

          {/* IMAGES (multiple file upload) */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Course Images (multiple)
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImagesChange}
              className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white"
            />

            {/* Existing images (for edit mode) */}
            {existingImages.length > 0 && (
              <div className="space-y-1">
                <p className="text-xs text-gray-600">Existing images:</p>
                <div className="flex flex-wrap gap-2">
                  {existingImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 border rounded px-2 py-1"
                    >
                      <img
                        src={img}
                        alt={`image-${idx}`}
                        className="w-10 h-10 object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveExistingImage(idx)}
                        className="text-xs text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <textarea
            className="border p-2 rounded w-full h-20"
            placeholder="Outcomes (comma separated)"
            value={outcomes}
            onChange={e => setOutcomes(e.target.value)}
          />

          <textarea
            className="border p-2 rounded w-full h-20"
            placeholder="Certifications (name:authority:true | ...)"
            value={certifications}
            onChange={e => setCertifications(e.target.value)}
          />

          <textarea
            className="border p-2 rounded w-full h-20"
            placeholder="Modules (title:description | ...)"
            value={modules}
            onChange={e => setModules(e.target.value)}
          />

          <textarea
            className="border p-2 rounded w-full h-20"
            placeholder="Target Audience (comma separated)"
            value={targetAudience}
            onChange={e => setTargetAudience(e.target.value)}
          />

          <select
            value={level}
            onChange={e => setLevel(e.target.value as CourseLevel)}
            className="border p-2 rounded w-full"
          >
            <option value={CourseLevel.Beginner}>Beginner</option>
            <option value={CourseLevel.Intermediate}>Intermediate</option>
            <option value={CourseLevel.Advanced}>Advanced</option>
          </select>

          <div className="flex gap-6 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={eligibleForPSC}
                onChange={e => setEligibleForPSC(e.target.checked)}
              />
              PSC Eligible
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={hasInternship}
                onChange={e => setHasInternship(e.target.checked)}
              />
              Internship Available
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {editId ? 'Update Course' : 'Add Course'}
          </button>
        </div>
      )}

      {/* ✅ LIST */}
      <div className="bg-white border rounded-lg">
        {filteredCourses.map(course => (
          <div
            key={course.id}
            className="p-4 border-b flex justify-between items-center"
          >
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
              <button
                onClick={() => handleEdit(course)}
                className="text-blue-600 text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(course.id)}
                className="text-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCourses;
