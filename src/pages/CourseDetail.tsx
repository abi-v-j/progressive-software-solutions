import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, BarChart, CheckCircle, BookOpen, ChevronLeft } from 'lucide-react';
import { Button } from '../components/UI';
import { COURSES } from '../constants';

const CourseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = COURSES.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center px-4">
        <h1 className="text-xl font-bold mb-4">Course not found</h1>
        <Button asLink="/courses">Back to Courses</Button>
      </div>
    );
  }

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-neutralLight">

      {/* ================= HEADER ================= */}
      <div className="bg-neutralDark text-white py-10 sm:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

          <Link
            to="/courses"
            className="inline-flex items-center text-xs sm:text-sm text-gray-400 hover:text-white mb-5"
          >
            <ChevronLeft size={14} className="mr-1" /> Back to Courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase">
                  {course.category}
                </span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase">
                  {course.level}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-4 leading-tight">
                {course.title}
              </h1>

              <p className="text-gray-300 text-sm sm:text-base lg:text-xl mb-6">
                {course.summary}
              </p>

              <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-300 mb-6">
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-accent" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen size={16} className="text-accent" />
                  {course.modules.length} Modules
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent" />
                  Live Projects
                </span>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="danger" size="md" asLink="/contact" className="w-full sm:w-auto">
                  Enroll Now
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-brand"
                >
                  Download Brochure
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full max-w-md lg:max-w-none mx-auto">
              <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-xl shadow-2xl border-4 border-white/10">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* Overview */}
            <section className="bg-white p-5 sm:p-8 rounded-xl shadow-sm border">
              <h2 className="text-lg sm:text-2xl font-bold mb-3">
                Course Overview
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {course.description}
              </p>
            </section>

            {/* Outcomes */}
            <section className="bg-white p-5 sm:p-8 rounded-xl shadow-sm border">
              <h2 className="text-lg sm:text-2xl font-bold mb-5">
                What You Will Learn
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-green-500 mt-1" />
                    <span className="text-gray-700 text-sm sm:text-base">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Syllabus */}
            <section>
              <h2 className="text-lg sm:text-2xl font-bold mb-4">
                Curriculum
              </h2>

              <div className="space-y-3">
                {course.modules.map((module, idx) => (
                  <div key={idx} className="bg-white border rounded-lg overflow-hidden">
                    <div className="p-4 bg-gray-50 font-semibold text-sm sm:text-base">
                      Module {idx + 1}: {module.title}
                    </div>
                    <div className="p-4 text-gray-600 text-sm sm:text-base border-t">
                      {module.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 bg-white p-5 sm:p-6 rounded-xl shadow-lg border">

              <h3 className="text-lg sm:text-xl font-bold mb-5">
                Course Highlights
              </h3>

              <ul className="space-y-4 mb-6 text-sm">
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand">
                    <Clock size={15} />
                  </span>
                  {course.duration} Duration
                </li>

                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand">
                    <BarChart size={15} />
                  </span>
                  {course.level} Level
                </li>

                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand">
                    <CheckCircle size={15} />
                  </span>
                  Placement Support
                </li>
              </ul>

              <Button variant="primary" className="w-full mb-3" asLink="/contact">
                Apply for Admission
              </Button>

              <p className="text-[11px] text-center text-gray-500">
                Limited seats available for next batch.
              </p>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
