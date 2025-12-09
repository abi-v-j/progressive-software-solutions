import React from 'react';
import { SectionTitle } from '../components/UI';
import { SEO } from '../components/SEO';

const Partners: React.FC = () => {
  return (
    <>
      {/* ✅ SEO META */}
      <SEO
        title="Industry Partners | Progressive Software Solutions & Training"
        description="Progressive Software Solutions & Training collaborates with leading technology companies, startups, and academic institutions to deliver industry-aligned software education."
        canonical="https://www.progressivesst.com/partners"
        ogImage="https://www.progressivesst.com/og-partners.jpg"
      />

      <div className="pt-24 pb-20 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ✅ FORCE SINGLE H1 */}
          <h1 className="sr-only">Industry Partners</h1>

          <SectionTitle 
            title="Our Partners" 
            subtitle="We collaborate with industry-leading companies and organizations." 
          />

          {/* ✅ THIN-CONTENT RISK MITIGATED */}
          <div className="max-w-3xl mx-auto text-center text-gray-600 space-y-4">
            <p>
              Progressive Software Solutions & Training works closely with technology firms, 
              corporate partners, and academic institutions to ensure real-world relevance 
              across all our training and internship programs.
            </p>

            <p>
              Our partner ecosystem enables students to access live projects, internship 
              placements, corporate mentoring, and industry-recognized certifications.
            </p>

            <p className="italic text-sm text-gray-500">
              Detailed partner listings will be published as agreements are finalized.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Partners;
