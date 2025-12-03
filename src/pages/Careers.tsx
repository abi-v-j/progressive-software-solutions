import React from 'react';
import { Upload, Briefcase } from 'lucide-react';
import { Button, Input, TextArea, SectionTitle } from '../components/UI';

const Careers: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Join Our Team" 
          subtitle="We are always looking for passionate instructors and interns. Apply below." 
        />

        <div className="bg-neutralLight rounded-xl p-8 md:p-12 shadow-inner border border-gray-100">
           <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                 <Input label="Full Name" id="name" placeholder="Your Name" />
                 <Input label="Email Address" id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                 <Input label="Phone" id="phone" placeholder="+1 (555) ..." />
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Position Applied For</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand px-4 py-2 border bg-white">
                       <option>Frontend Instructor</option>
                       <option>Backend Instructor</option>
                       <option>Marketing Intern</option>
                       <option>Counselor</option>
                    </select>
                 </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300 hover:border-brand transition-colors text-center cursor-pointer group">
                 <div className="flex flex-col items-center">
                    <Upload className="text-gray-400 group-hover:text-brand mb-2" size={32} />
                    <p className="font-medium text-gray-700">Upload Resume (PDF/DOCX)</p>
                    <p className="text-xs text-gray-500 mt-1">Max file size: 5MB</p>
                    <input type="file" className="hidden" />
                 </div>
              </div>

              <TextArea label="Why do you want to join us?" id="message" rows={4} placeholder="Tell us a bit about yourself..." />
              
              <Button variant="primary" className="w-full py-3 text-lg" onClick={(e) => { e.preventDefault(); alert("Application Submitted!"); }}>
                 Submit Application
              </Button>
           </form>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-neutralDark mb-6 text-center">Open Positions</h3>
          <div className="space-y-4">
             {['Senior React Instructor', 'Python Data Science Mentor', 'Academic Counselor'].map((role, idx) => (
                <div key={idx} className="flex justify-between items-center p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                   <div className="flex items-center">
                      <Briefcase className="text-secondary mr-4" size={20} />
                      <div>
                         <h4 className="font-bold text-neutralDark">{role}</h4>
                         <p className="text-sm text-gray-500">Full-time / Part-time • Remote/On-site</p>
                      </div>
                   </div>
                   <Button variant="outline" size="sm">Details</Button>
                </div>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Careers;