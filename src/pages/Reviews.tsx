import React from 'react';
import { REVIEWS } from '../constants';
import { SectionTitle } from '../components/UI';

const Reviews: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle title="Student Reviews" subtitle="Verified feedback from learners" />

        <div className="space-y-6">
          {REVIEWS.map(r => (
            <div key={r.id} className="p-5 border rounded-lg shadow-sm">
              <div className="flex justify-between mb-2">
                <h4 className="font-semibold">{r.name}</h4>
                <span className="text-yellow-500">{'★'.repeat(r.rating)}</span>
              </div>
              <p className="text-gray-600">{r.comment}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Reviews;
