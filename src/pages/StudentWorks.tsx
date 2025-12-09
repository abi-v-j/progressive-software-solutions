import React from 'react';
import { SectionTitle } from '../components/UI';
import { SEO } from '../components/SEO';

const StudentWorks: React.FC = () => {
  return (
    <>
      {/* ✅ SEO META */}
      <SEO
        title="Student Projects & Works | Progressive Software Solutions & Training"
        description="Explore real-world software projects and applications built by students of Progressive Software Solutions & Training across MERN, Python, Flutter, and Full Stack programs."
        canonical="https://www.progressivesst.com/student-works"
        ogImage="https://www.progressivesst.com/og-student-works.jpg"
      />

      <div className="pt-24 pb-20 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ✅ FORCE SINGLE H1 */}
          <h1 className="sr-only">Student Projects and Works</h1>

          <SectionTitle 
            title="Student Works" 
            subtitle="Showcase of projects created by our talented students." 
          />

          {/* ✅ THIN CONTENT RISK MITIGATED */}
          <div className="max-w-3xl mx-auto text-center text-gray-600 space-y-4">
            <p>
              Students at Progressive Software Solutions & Training build production-grade
              applications as part of their internship programs, academic projects, and
              industry-aligned software training.
            </p>

            <p>
              These projects span full stack web applications, mobile apps, automation systems,
              machine learning prototypes, and enterprise dashboards.
            </p>

            <p className="italic text-sm text-gray-500">
              Live project showcases will be published as student batches complete their final evaluations.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default StudentWorks;
