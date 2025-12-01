import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, BarChart, CheckCircle, BookOpen, ChevronLeft } from 'lucide-react';
import { Button, Badge } from '../components/UI';
import { COURSES } from '../constants';

export const CourseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = COURSES.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Course not found</h1>
        <Button asLink="/courses">Back to Courses</Button>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-neutralLight">
      {/* Course Header */}
      <div className="bg-neutralDark text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/courses" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <ChevronLeft size={16} className="mr-1" /> Back to Courses
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{course.category}</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{course.level}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{course.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{course.summary}</p>
              
              <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-300 mb-8">
                <div className="flex items-center"><Clock size={18} className="mr-2 text-accent"/> {course.duration}</div>
                <div className="flex items-center"><BookOpen size={18} className="mr-2 text-accent"/> {course.modules.length} Modules</div>
                <div className="flex items-center"><CheckCircle size={18} className="mr-2 text-accent"/> Live Projects</div>
              </div>

              <div className="flex gap-4">
                <Button variant="danger" size="lg" asLink="/contact">Enroll Now</Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand">Download Brochure</Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img src={course.imageUrl} alt={course.title} className="rounded-xl shadow-2xl border-4 border-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-neutralDark mb-4">Course Overview</h2>
              <p className="text-gray-600 leading-relaxed">{course.description}</p>
            </section>

            {/* What you'll learn */}
            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-neutralDark mb-6">What You Will Learn</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Syllabus */}
            <section>
              <h2 className="text-2xl font-bold text-neutralDark mb-6">Curriculum</h2>
              <div className="space-y-4">
                {course.modules.map((module, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-5 flex justify-between items-center bg-gray-50">
                      <h3 className="font-bold text-lg text-neutralDark">Module {idx + 1}: {module.title}</h3>
                    </div>
                    <div className="p-5 text-gray-600 border-t border-gray-100">
                      {module.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1">
             <div className="sticky top-28 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-neutralDark mb-6">Course Highlights</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3 text-brand"><Clock size={16}/></div>
                    <span>{course.duration} Duration</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3 text-brand"><BarChart size={16}/></div>
                    <span>{course.level} Level</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3 text-brand"><CheckCircle size={16}/></div>
                    <span>Placement Support</span>
                  </li>
                </ul>
                <Button variant="primary" className="w-full mb-3" asLink="/contact">Apply for Admission</Button>
                <p className="text-xs text-center text-gray-500">Limited seats available for next batch.</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
