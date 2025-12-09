import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { Button, Badge, SectionTitle, Input } from '../components/UI';
import { COURSES } from '../constants';
import { CourseLevel } from '../types';
import { SEO } from '../components/SEO';

const AllCourses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(COURSES.map(c => c.category)))];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = COURSES.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <>
      {/* ✅ SEO META — MANDATORY */}
      <SEO
        title="Software Training Courses | Progressive Software Solutions & Training"
        description="Browse all professional software training courses including MERN, Python, Django, Flutter, Java, and full stack development with internships."
        canonical="https://www.progressivesst.com/courses"
        ogImage="https://www.progressivesst.com/og-courses.jpg"
      />

      <div className="pt-24 pb-20 min-h-screen bg-neutralLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ✅ FORCE SINGLE H1 FOR SEO SAFETY */}
          <h1 className="sr-only">Software Training Courses</h1>

          <SectionTitle
            title="Our Courses"
            subtitle="Expert-led courses designed to help you master the most in-demand technical skills."
          />

          {/* Filters and Search */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm mb-8 sm:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-brand focus:border-brand"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category */}
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 shrink-0" size={18} />
                <select
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-brand focus:border-brand bg-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Level */}
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-gray-500 font-medium">Level:</span>
                <select
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-brand focus:border-brand bg-white"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  {levels.map(lvl => (
                    <option key={lvl} value={lvl}>{lvl}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 group"
                >
                  {/* ✅ Image SEO FIXED */}
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src={course.images[0]}
                      alt={`${course.title} professional software training course`}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute top-3 right-3">
                      <Badge color="bg-white/90 text-neutralDark font-bold text-xs sm:text-sm">
                        {course.level}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-[10px] sm:text-xs font-bold text-accent uppercase tracking-wide">
                        {course.category}
                      </div>

                      {course.hasInternship && (
                        <Badge color="bg-green-100 text-green-700 text-xs">
                          Internship
                        </Badge>
                      )}
                    </div>

                    {/* ✅ H3 UNDER PAGE H1 — CORRECT */}
                    <h3 className="text-lg sm:text-xl font-bold text-neutralDark mb-2 line-clamp-2">
                      {course.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {course.summary}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center mb-4 text-xs sm:text-sm text-gray-500">
                        <span>{course.duration}</span>
                        {course.certifications.length > 0 && <span>Cert Included</span>}
                      </div>

                      <Button
                        variant="primary"
                        className="w-full"
                        asLink={`/courses/${course.slug}`}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16 sm:py-20">
                <h3 className="text-lg sm:text-xl font-medium text-gray-500">
                  No courses found matching your criteria.
                </h3>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSelectedLevel('All');
                  }}
                  className="mt-4 text-brand hover:underline font-medium text-sm"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default AllCourses;
