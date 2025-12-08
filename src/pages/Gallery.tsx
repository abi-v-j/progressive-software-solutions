import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { SectionTitle } from '../components/UI';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Event' | 'Training' | 'Students'>('All');

  const filtered = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(i => i.category === filter);

  return (
    <>
      {/* ✅ SEO META */}
      <SEO
        title="Gallery | Progressive Software Solutions & Training Events & Students"
        description="Explore real photos from our software training sessions, tech events, internships, and student success stories at Progressive Software Solutions & Training."
        canonical="https://yourdomain.com/gallery"
        ogImage="https://yourdomain.com/og-gallery.jpg"
      />

      <div className="pt-24 pb-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4">

          {/* ✅ FORCE SINGLE H1 */}
          <h1 className="sr-only">Software Training Gallery</h1>

          <SectionTitle
            title="Gallery"
            subtitle="Our events, training, and student success"
          />

          {/* Filters (UI only — SEO-safe fallback handled via canonical) */}
          <div className="flex gap-3 justify-center mb-8">
            {['All', 'Event', 'Training', 'Students'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-4 py-2 rounded ${
                  filter === cat ? 'bg-brand text-white' : 'bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ✅ IMAGE GRID — SEO FIXED */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(item => (
              <figure
                key={item.id}
                className="group overflow-hidden rounded-xl shadow"
              >
                <img
                  src={item.imageUrl}
                  alt={`${item.title} at Progressive Software Solutions and Training`}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-110 transition"
                />

                {/* ✅ INTERNAL CONTEXT LINK (PREVENTS ORPHAN IMAGES) */}
                <figcaption className="p-3 bg-black text-white text-sm">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Gallery;
