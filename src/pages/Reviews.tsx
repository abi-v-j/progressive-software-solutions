import React from 'react';
import { REVIEWS } from '../constants';
import { SectionTitle } from '../components/UI';
import { SEO } from '../components/SEO';

const Reviews: React.FC = () => {
  return (
    <>
      {/* ✅ SEO META */}
      <SEO
        title="Student Reviews & Testimonials | Progressive Software Solutions & Training"
        description="Read verified student reviews and ratings for Progressive Software Solutions & Training. Real feedback from learners across MERN, Python, Flutter, and Full Stack programs."
        canonical="https://www.progressivesst.com/reviews"
        ogImage="https://www.progressivesst.com/og-reviews.jpg"
      />

      <div className="pt-24 pb-20 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4">

          {/* ✅ FORCE SINGLE H1 FOR SEO SAFETY */}
          <h1 className="sr-only">Student Reviews and Testimonials</h1>

          <SectionTitle
            title="Student Reviews"
            subtitle="Verified feedback from learners"
          />

          <div className="space-y-6">
            {REVIEWS.map(r => (
              <article
                key={r.id}
                className="p-5 border rounded-lg shadow-sm"
              >
                <div className="flex justify-between mb-2">
                  {/* ✅ H2 UNDER PAGE H1 */}
                  <h2 className="font-semibold">
                    {r.name}
                  </h2>

                  <span
                    className="text-yellow-500"
                    aria-label={`Rating ${r.rating} out of 5`}
                  >
                    {'★'.repeat(r.rating)}
                  </span>
                </div>

                <p className="text-gray-600">
                  {r.comment}
                </p>
              </article>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Reviews;
