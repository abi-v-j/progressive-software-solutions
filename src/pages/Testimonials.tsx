import React from 'react';
import { TESTIMONIALS } from '../constants';
import { SectionTitle } from '../components/UI';
import { SEO } from '../components/SEO';

const Testimonials: React.FC = () => {
  return (
    <>
      {/* ✅ SEO META */}
      <SEO
        title="Student Testimonials | Progressive Software Solutions & Training"
        description="Real student testimonials from Progressive Software Solutions & Training. Verified feedback on software training, internships, and placement support."
        canonical="https://yourdomain.com/testimonials"
        ogImage="https://yourdomain.com/og-testimonials.jpg"
      />

      <div className="pt-24 pb-20 bg-neutralLight min-h-screen">
        <div className="max-w-6xl mx-auto px-4">

          {/* ✅ FORCE SINGLE H1 */}
          <h1 className="sr-only">Student Testimonials and Success Stories</h1>

          <SectionTitle
            title="Student Testimonials"
            subtitle="What our students say about us"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <article
                key={t.id}
                className="bg-white p-6 rounded-xl shadow"
              >
                <p className="text-gray-700 mb-4 italic">
                  “{t.quote}”
                </p>

                <div className="flex items-center gap-3">
                  {/* ✅ Image SEO FIXED */}
                  <img
                    src={t.photoUrl}
                    alt={`${t.name} testimonial photo`}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    {/* ✅ H2 UNDER PAGE H1 */}
                    <h2 className="font-semibold">
                      {t.name}
                    </h2>
                    <p className="text-xs text-gray-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Testimonials;
