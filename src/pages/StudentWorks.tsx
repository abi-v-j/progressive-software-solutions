import React from 'react';
import { SectionTitle } from '../components/UI';

const StudentWorks: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Student Works" 
          subtitle="Showcase of projects created by our talented students." 
        />
        <div className="text-center text-gray-600">
          <p>Student works content coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentWorks;
