import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CourseService } from '../services/courses';
import { Course } from '../types';

const ManageCourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    // ✅ ID MUST REMAIN STRING (DO NOT CONVERT TO NUMBER)
    CourseService.getById(id)
      .then(res => {
        setCourse(res.data.data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="text-center py-10 text-gray-500">Loading course...</p>;
  }

  if (!course) {
    return <p className="text-center py-10 text-red-600">Course not found</p>;
  }

  // ✅ SAFE NORMALIZATION (STRING OR ARRAY BOTH WORK)
  const safeImages = Array.isArray(course.images)
    ? course.images
    : JSON.parse(course.images || '[]');

  const safeOutcomes = Array.isArray(course.outcomes)
    ? course.outcomes
    : JSON.parse(course.outcomes || '[]');

  const safeModules = Array.isArray(course.modules)
    ? course.modules
    : JSON.parse(course.modules || '[]');

  const safeCertifications = Array.isArray(course.certifications)
    ? course.certifications
    : JSON.parse(course.certifications || '[]');

  const safeTargetAudience = Array.isArray(course.targetAudience)
    ? course.targetAudience
    : JSON.parse(course.targetAudience || '[]');

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* HEADER */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-gray-800">{course.title}</h1>
        <p className="text-sm text-gray-500">
          {course.category} • {course.level} • {course.duration}
        </p>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT: COURSE INFO */}
        <div className="lg:col-span-2 bg-white border rounded-xl p-6 space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-1">Summary</h3>
            <p className="text-gray-800">{course.summary}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-1">Description</h3>
            <p className="text-gray-800 leading-relaxed">{course.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">Outcomes</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-800">
              {safeOutcomes.map((o: string, i: number) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>

          {/* FLAGS */}
          <div className="flex flex-wrap gap-3 pt-2">
            {course.eligibleForPSC && (
              <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                PSC Eligible
              </span>
            )}
            {course.hasInternship && (
              <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                Internship Included
              </span>
            )}
          </div>
        </div>

        {/* RIGHT: IMAGES & META */}
        <div className="bg-white border rounded-xl p-6 space-y-4">
          <h3 className="text-sm font-semibold text-gray-600">Course Images</h3>

          <div className="grid grid-cols-2 gap-3">
            {safeImages.map((img: string, i: number) => (
              <img
                key={i}
                src={img}
                alt="course"
                className="w-full h-28 object-cover border rounded-lg"
              />
            ))}
          </div>

          {/* CERTIFICATIONS */}
          {safeCertifications.length > 0 && (
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                Certifications
              </h3>
              <ul className="space-y-1 text-sm text-gray-800">
                {safeCertifications.map((c: any, i: number) => (
                  <li key={i} className="flex justify-between">
                    <span>{c.name}</span>
                    {c.isGovernment && (
                      <span className="text-xs text-green-600">Govt</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* TARGET AUDIENCE */}
          {safeTargetAudience.length > 0 && (
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                Target Audience
              </h3>
              <div className="flex flex-wrap gap-2">
                {safeTargetAudience.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MODULES */}
      {safeModules.length > 0 && (
        <div className="bg-white border rounded-xl p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Modules</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {safeModules.map((m: any, i: number) => (
              <div
                key={i}
                className="border rounded-lg p-4 bg-gray-50 space-y-1"
              >
                <p className="font-medium text-gray-900">{m.title}</p>
                <p className="text-sm text-gray-700">{m.description}</p>
                {m.hours && (
                  <p className="text-xs text-gray-500">{m.hours} Hours</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCourseDetails;
