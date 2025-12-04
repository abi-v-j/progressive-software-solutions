import React from 'react';
import { SectionTitle } from '../components/UI';

const Partners: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Partners" 
          subtitle="We collaborate with industry-leading companies and organizations." 
        />
        <div className="text-center text-gray-600">
          <p>Partners content coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
