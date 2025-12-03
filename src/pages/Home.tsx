import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Terminal, Database, Users } from 'lucide-react';
import { Button, SectionTitle, Badge } from '../components/UI';
import { COURSES, TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-neutralDark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Launch Your Career in <span className="text-accent">Tech</span> Today
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Industry-leading software training with real-world projects and 100% placement assistance. Master the skills that top companies are hiring for.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" asLink="/courses">
                  Explore Courses
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand" asLink="/contact">
                  Book Free Consultation
                </Button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white/10">
                 <img 
                   src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                   alt="Students Coding" 
                   className="w-full h-auto"
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                   <p className="text-white font-semibold">Join 500+ successful graduates</p>
                 </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl flex items-center gap-3">
                 <div className="bg-green-100 p-2 rounded-full text-green-600">
                   <Users size={24} />
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 font-bold uppercase">Placed Students</p>
                   <p className="text-2xl font-bold text-neutralDark">500+</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Why Choose Progressive?" 
            subtitle="We don't just teach code; we build careers. Our unique approach ensures you are job-ready from day one." 
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-neutralLight hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-lg flex items-center justify-center mb-6">
                <Code size={28} />
              </div>
              <h3 className="text-xl font-bold text-neutralDark mb-3">Hands-on Learning</h3>
              <p className="text-gray-600">Work on live projects that simulate real industry environments. No boring theory, just practical code.</p>
            </div>
            <div className="p-8 rounded-xl bg-neutralLight hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mb-6">
                <Terminal size={28} />
              </div>
              <h3 className="text-xl font-bold text-neutralDark mb-3">Expert Mentors</h3>
              <p className="text-gray-600">Learn from seniors who are currently working in top product companies and know the latest stack.</p>
            </div>
            <div className="p-8 rounded-xl bg-neutralLight hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Database size={28} />
              </div>
              <h3 className="text-xl font-bold text-neutralDark mb-3">Placement Support</h3>
              <p className="text-gray-600">Resume building, mock interviews, and direct referrals to our hiring partners network.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-neutralLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
             <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-neutralDark mb-4">Our Top Courses</h2>
                <p className="text-lg text-secondary">Curated paths to fast-track your journey to becoming a professional developer.</p>
             </div>
             <Link to="/courses" className="hidden md:flex items-center text-brand font-semibold hover:text-accent transition-colors">
               View All Courses <ArrowRight size={20} className="ml-2" />
             </Link>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {COURSES.slice(0, 3).map((course) => (
               <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 group">
                 <div className="relative h-48 overflow-hidden">
                   <img 
                    src={course.imageUrl} 
                    alt={course.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                   />
                   <div className="absolute top-4 right-4">
                     <Badge color="bg-white/90 text-neutralDark font-bold">{course.level}</Badge>
                   </div>
                 </div>
                 <div className="p-6 flex flex-col flex-grow">
                   <div className="text-xs font-bold text-accent uppercase tracking-wide mb-2">{course.category}</div>
                   <h3 className="text-xl font-bold text-neutralDark mb-3 line-clamp-2">{course.title}</h3>
                   <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.summary}</p>
                   
                   <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                     <span className="text-sm font-medium text-gray-500">{course.duration}</span>
                     <Link to={`/courses/${course.slug}`} className="text-brand font-bold text-sm hover:underline">
                       View Details
                     </Link>
                   </div>
                 </div>
               </div>
             ))}
           </div>
           
           <div className="mt-8 text-center md:hidden">
              <Button variant="outline" asLink="/courses" className="w-full">View All Courses</Button>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Success Stories" subtitle="Hear from our students who transformed their careers." />
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-neutralLight p-8 rounded-2xl relative">
                <div className="text-brand/20 absolute top-4 right-6 text-6xl font-serif">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <img src={t.photoUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-neutralDark">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.role} at {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-xl text-blue-100 mb-8">Join the next batch of future tech leaders. Applications are open for the upcoming cohort.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="danger" size="lg" asLink="/contact">Apply Now</Button>
             <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand" asLink="/courses">Browse Curriculum</Button>
          </div>
        </div>
      </section>
    </>
  );
};
