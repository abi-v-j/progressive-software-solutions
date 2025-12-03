import React from 'react';
import { SectionTitle } from '../components/UI';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-neutralDark mb-6">Empowering Future Tech Leaders</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          At Progressive Software Solutions, we bridge the gap between academic learning and industry requirements.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Our Mission" 
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-neutralDark mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2015, our mission has been simple: to provide high-quality, affordable, and practical software training that results in employability. We believe that coding is a craft that is best learned by doing.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We have partnered with over 50+ tech companies to curate a curriculum that stays ahead of the curve, ensuring our students are learning tools that are actually used in production today.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutralLight p-4 rounded-lg">
                <div className="text-3xl font-bold text-brand mb-1">500+</div>
                <div className="text-sm text-gray-600">Graduates</div>
              </div>
              <div className="bg-neutralLight p-4 rounded-lg">
                <div className="text-3xl font-bold text-brand mb-1">95%</div>
                <div className="text-sm text-gray-600">Placement Rate</div>
              </div>
            </div>
          </div>
        </div>

        <SectionTitle title="Our Core Values" subtitle="The principles that guide every class we teach." />
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
           {[
             { title: 'Practicality', desc: 'Theory is important, but code that runs is better. We focus on hands-on building.' },
             { title: 'Community', desc: 'Learning is social. We foster a collaborative environment where students help each other.' },
             { title: 'Excellence', desc: 'We do not settle for "good enough". We push our students to write clean, scalable code.' }
           ].map((val, idx) => (
             <div key={idx} className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
               <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-4">
                 <CheckCircle size={24} />
               </div>
               <h3 className="text-xl font-bold text-neutralDark mb-3">{val.title}</h3>
               <p className="text-gray-600">{val.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
