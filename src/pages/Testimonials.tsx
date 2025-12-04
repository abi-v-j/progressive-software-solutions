import React from 'react';
import { TESTIMONIALS } from '../constants';
import { SectionTitle } from '../components/UI';

const Testimonials: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-neutralLight min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Student Testimonials" subtitle="What our students say about us" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 mb-4 italic">“{t.quote}”</p>
              <div className="flex items-center gap-3">
                <img src={t.photoUrl} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
