import React from 'react';
import { Upload, Briefcase } from 'lucide-react';
import { Button, Input, TextArea, SectionTitle } from '../components/UI';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const jobs = [
    'Senior React Instructor',
    'Python Data Science Mentor',
    'Academic Counselor',
  ];

  return (
    <>
      <SEO
        title="Careers at Progressive Software Solutions & Training | IT Instructor & Intern Jobs"
        description="Apply for instructor, mentor, and internship roles at Progressive Software Solutions & Training."
        canonical="https://www.progressivesst.com/careers"
        ogImage="https://www.progressivesst.com/og-careers.jpg"
      />

      <div className="pt-28 pb-24 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="sr-only">Careers at Progressive Software Solutions</h1>

          {/* ✅ GRID WITH STRETCH */}
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">

            {/* ✅ LEFT COLUMN — FULL HEIGHT */}
            <div className="h-full flex flex-col space-y-10">

              {/* ✅ OPEN POSITIONS (FLEX-1) */}
              <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-8 flex-1">
                <h3 className="text-2xl font-bold text-neutralDark mb-8">
                  Open Positions
                </h3>

                <div className="space-y-5">
                  {jobs.map((role, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center p-5 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-brand/10 to-secondary/10">
                          <Briefcase className="text-secondary" size={20} />
                        </div>

                        <div>
                          <h4 className="font-semibold text-neutralDark">
                            {role}
                          </h4>
                          <p className="text-sm text-gray-500">
                            Full-time / Part-time • Remote/On-site
                          </p>
                        </div>
                      </div>

                      <Link to={`/careers/${role.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* ✅ BRAND + STATS (FLEX-1) */}
              <div className="rounded-2xl border border-gray-200 bg-white shadow-xl p-8 space-y-8 flex-1">

                <h4 className="text-xl font-bold text-neutralDark">
                  Why Build Your Career With Us?
                </h4>

                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-xl bg-gradient-to-br from-brand/10 to-brand/5 p-5 text-center">
                    <p className="text-3xl font-extrabold text-brand">30K+</p>
                    <p className="text-sm text-gray-600 mt-1">Students Trained</p>
                  </div>

                  <div className="rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 p-5 text-center">
                    <p className="text-3xl font-extrabold text-secondary">18+</p>
                    <p className="text-sm text-gray-600 mt-1">Years Experience</p>
                  </div>

                  <div className="rounded-xl bg-gradient-to-br from-green-100 to-green-50 p-5 text-center">
                    <p className="text-3xl font-extrabold text-green-600">92%</p>
                    <p className="text-sm text-gray-600 mt-1">Placement Rate</p>
                  </div>

                  <div className="rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 p-5 text-center">
                    <p className="text-3xl font-extrabold text-purple-600">120+</p>
                    <p className="text-sm text-gray-600 mt-1">Hiring Partners</p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                <div className="rounded-lg bg-gradient-to-r from-brand to-secondary p-4 text-white text-sm text-center font-medium shadow-lg">
                  Teach real students. Work on real projects. Grow in real careers.
                </div>
              </div>
            </div>

            {/* ✅ RIGHT COLUMN — FULL HEIGHT */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-10 h-full flex flex-col">

              <SectionTitle
                title="Apply Now"
                subtitle="Submit your application and we’ll get back to you shortly."
              />

              <form className="space-y-7 mt-8 flex flex-col flex-1">

                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="Full Name" id="name" placeholder="Your Name" />
                  <Input label="Email Address" id="email" type="email" placeholder="you@example.com" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="Phone" id="phone" placeholder="+91 986754321" />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Position Applied For
                    </label>
                    <select className="w-full h-11 rounded-lg border border-gray-300 px-4 bg-white focus:border-brand focus:ring-brand">
                      <option>Frontend Instructor</option>
                      <option>Backend Instructor</option>
                      <option>Marketing Intern</option>
                      <option>Counselor</option>
                    </select>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border-2 border-dashed border-gray-300 hover:border-brand transition-all text-center cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="p-4 rounded-full bg-brand/10 mb-4">
                      <Upload className="text-brand" size={34} />
                    </div>

                    <p className="font-semibold text-gray-800">Upload Resume</p>
                    <p className="text-xs text-gray-500 mt-1">PDF or DOCX • Max 5MB</p>

                    <input type="file" className="hidden" />
                  </div>
                </div>

                <TextArea
                  label="Why do you want to join us?"
                  id="message"
                  rows={4}
                  placeholder="Tell us a bit about yourself..."
                />

                <div className="mt-auto">
                  <Button
                    variant="primary"
                    className="w-full py-3 text-lg shadow-lg hover:shadow-xl transition-shadow"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Application Submitted!");
                    }}
                  >
                    Submit Application
                  </Button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
