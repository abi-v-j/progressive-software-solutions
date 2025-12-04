import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { SectionTitle } from '../components/UI';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Event' | 'Training' | 'Students'>('All');

  const filtered = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(i => i.category === filter);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">

        <SectionTitle title="Gallery" subtitle="Our events, training, and student success" />

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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(item => (
            <div key={item.id} className="group overflow-hidden rounded-xl shadow">
              <img
                src={item.imageUrl}
                className="w-full h-48 object-cover group-hover:scale-110 transition"
              />
              <div className="p-3 bg-black text-white text-sm">
                {item.title}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;
