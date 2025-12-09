import React from 'react';
import { SectionTitle } from '../components/UI';
import { CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      {/* ✅ SEO META */}
      <SEO
        title="About Progressive Software Solutions & Training | Software Training & IT Services Since 2006"
        description="Progressive Software Solutions & Training is a global software training and development company established in 2006 with 30,000+ trained students and 50+ college partnerships."
        canonical="https://www.progressivesst.com/about"
        ogImage="https://www.progressivesst.com/og-about.jpg"
      />

      <div className="pt-24 pb-20 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutralDark mb-6">
            Building Industry-Ready Software Professionals Since 2006
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Progressive Software Solutions & Training is a globally recognized software
            training and development organization focused on building real-world technical
            skills, not academic theory.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Progressive Software Solutions classroom training session"
                loading="lazy"
                className="rounded-xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-neutralDark mb-6">
                Our Mission
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Our mission is to empower individuals and organizations through practical,
                industry-aligned software education and cutting-edge technology solutions.
                We focus on transforming students into deployable professionals capable
                of working in real production environments.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Since 2006, we have trained over 30,000+ students and partnered with
                50+ colleges to deliver hands-on software education in emerging and
                enterprise-grade technologies.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutralLight p-4 rounded-lg">
                  <div className="text-3xl font-bold text-brand mb-1">30,000+</div>
                  <div className="text-sm text-gray-600">Trained Students</div>
                </div>

                <div className="bg-neutralLight p-4 rounded-lg">
                  <div className="text-3xl font-bold text-brand mb-1">50+</div>
                  <div className="text-sm text-gray-600">College Partnerships</div>
                </div>
              </div>
            </div>
          </div>

          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that define how we train and deliver software."
          />

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { 
                title: 'Industry-First Training', 
                desc: 'Our programs are designed around real development workflows, production tools, and live projects.' 
              },
              { 
                title: 'Execution Over Theory', 
                desc: 'We prioritize hands-on implementation, code quality, debugging, deployment, and system thinking.' 
              },
              { 
                title: 'Career Accountability', 
                desc: 'From resume building to interview preparation and internships, we take responsibility for student outcomes.' 
              }
            ].map((val, idx) => (
              <div
                key={idx}
                className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} />
                </div>

                <h3 className="text-xl font-bold text-neutralDark mb-3">
                  {val.title}
                </h3>

                <p className="text-gray-600">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
