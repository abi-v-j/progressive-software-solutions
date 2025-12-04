import React from 'react';
import { POSTERS } from '../constants';
import { SectionTitle } from '../components/UI';

const Posters: React.FC = () => {
  return (
    <div className="pt-16 sm:pt-20 mt-20 pb-14 sm:pb-16 bg-neutralLight min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">

        <SectionTitle
          title="Promotional Posters"
          subtitle="Latest announcements & offers"
        />

        {/* ✅ MOBILE-FIRST RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {POSTERS.map(p => (
            <div
              key={p.id}
              tabIndex={0}
              aria-label={p.title}
              className="
                group relative rounded-xl overflow-hidden
                shadow-sm hover:shadow-lg focus:shadow-lg
                transition
                bg-white
              "
            >
              {/* ✅ Aspect-ratio safe wrapper */}
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] bg-gray-200 overflow-hidden">
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  loading="lazy"
                  className="
                    absolute inset-0 w-full h-full object-cover
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              {/* ✅ Optional title overlay for accessibility & UX */}
              <div className="
                absolute inset-x-0 bottom-0
                bg-gradient-to-t from-black/60 to-transparent
                p-3 text-white text-xs sm:text-sm
                opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                transition
              ">
                {p.title}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Posters;
