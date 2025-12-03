import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { Button, Badge, SectionTitle, Input } from '../components/UI';
import { COURSES } from '../constants';
import { CourseLevel } from '../types';

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(COURSES.map(c => c.category)))];
  const levels = ['All', ...Object.values(CourseLevel)];

  const filteredCourses = COURSES.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-neutralLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Courses" 
          subtitle="Expert-led courses designed to help you master the most in-demand technical skills." 
        />

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-brand focus:border-brand"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400" size={20} />
              <select 
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-brand focus:border-brand bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 font-medium">Level:</span>
              <select 
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-brand focus:border-brand bg-white"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                {levels.map(lvl => <option key={lvl} value={lvl}>{lvl}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 group">
                 <div className="relative h-48 overflow-hidden">
                   <img 
                    src={course.imageUrl} 
                    alt={course.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                   />
                   <div className="absolute top-4 right-4">
                     <Badge color="bg-white/90 text-neutralDark font-bold">{course.level}</Badge>
                   </div>
                 </div>
                 <div className="p-6 flex flex-col flex-grow">
                   <div className="flex justify-between items-center mb-2">
                     <div className="text-xs font-bold text-accent uppercase tracking-wide">{course.category}</div>
                     {course.isLiveProject && <Badge color="bg-green-100 text-green-700">Live Project</Badge>}
                   </div>
                   <h3 className="text-xl font-bold text-neutralDark mb-3 line-clamp-2">{course.title}</h3>
                   <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.summary}</p>
                   
                   <div className="mt-auto pt-4 border-t border-gray-100">
                     <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                       <span>{course.duration}</span>
                       <span>{course.hasCertification ? 'Cert Included' : ''}</span>
                     </div>
                     <Button variant="primary" className="w-full" asLink={`/courses/${course.slug}`}>
                       View Details
                     </Button>
                   </div>
                 </div>
               </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <h3 className="text-xl font-medium text-gray-500">No courses found matching your criteria.</h3>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All'); setSelectedLevel('All');}}
                className="mt-4 text-brand hover:underline font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;