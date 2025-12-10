import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Terminal, Database, Users } from 'lucide-react';
import { Button, SectionTitle, Badge } from '../components/UI';
import { COURSES, TESTIMONIALS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from "../components/SEO";
import bg1 from '../assets/bg.jpg';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';
import bg4 from '../assets/bg4.jpg';
import bg5 from '../assets/bg6.jpg';
import PCPL from '../assets/PCPL.jpg';
import WWRH from '../assets/WWRH.jpg';



const Home: React.FC = () => {
  const heroImages = [bg1, bg2, bg3, bg4, bg5];


  const [activeHero, setActiveHero] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveHero(prev => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);



  return (
    <>

      <SEO
        title="Progressive Software Solutions & Training | Software Courses & Internships"
        description="Industry-ready software training, internships, and enterprise IT solutions."
        canonical="https://www.progressivesst.com/"
        ogImage="https://www.progressivesst.com/og-home.jpg"
      />
      {/* Hero Section */}
      <section className="relative bg-neutralDark pt-28 pb-28">
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
                Building Industry-Ready  <span className="text-accent">Software Professionals</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Progressive Software Solutions and Training is a technology-driven software development and professional training organization delivering enterprise-grade solutions, industry-aligned academic projects, and intensive internship programs built to match real-world production standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" asLink="/courses">
                  View Training Programs
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asLink="/contact"
                  className="
                    border-white/70 
                    text-white 
                    transition-all 
                    duration-300 
                    ease-out
                    hover:bg-white/10 
                    hover:border-white 
                    hover:text-white
                  "
                >
                  Start Consultation
                </Button>

              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block relative"
            >
              <div
                className="relative h-[440px] rounded-2xl overflow-hidden shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] border border-white/10 perspective-[1200px]"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const rotateX = ((y / rect.height) - 0.5) * -8;
                  const rotateY = ((x / rect.width) - 0.5) * 8;
                  e.currentTarget.style.setProperty("--rx", `${rotateX}deg`);
                  e.currentTarget.style.setProperty("--ry", `${rotateY}deg`);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.setProperty("--rx", `0deg`);
                  e.currentTarget.style.setProperty("--ry", `0deg`);
                }}
              >
                <AnimatePresence>

                  <motion.img
                    key={activeHero}
                    src={heroImages[activeHero]}
                    alt="Students Coding"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{
                      opacity: 0,
                      scale: 1.05
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.98
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                  />

                </AnimatePresence>

                {/* Dynamic Light Reflection */}
                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)] pointer-events-none"
                  animate={{ opacity: [0.15, 0.3, 0.15] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-black/20 to-transparent pointer-events-none" />
              </div>



            </motion.div>
          </div>
        </div>

        {/* Affiliations Strip */}
        {/* <div className="absolute bottom-[-56px] left-0 w-full z-40">
          <div className="
    max-w-6xl 
    mx-auto 
    bg-white 
    rounded-2xl 
    shadow-2xl 
    px-8 
    py-6 
    flex 
    flex-wrap 
    items-center 
    justify-center 
    gap-10
  ">
            <img src={PCPL} className="h-16   rounded-2xl " alt="Google" />
            <img src={WWRH} className="h-20   rounded-2xl " alt="Microsoft" />
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" className="h-20 grayscale hover:grayscale-0 transition  rounded-2xl " alt="AWS" />
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" className="h-20 grayscale hover:grayscale-0 transition  rounded-2xl " alt="Meta" />
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" className="h-20 grayscale hover:grayscale-0 transition  rounded-2xl " alt="Startup India" />
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" className="h-20 grayscale hover:grayscale-0 transition  rounded-2xl " alt="Startup India" />
          </div>
        </div> */}

      </section>

      {/* Features Section */}
      <section className="pt-28 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Choose Progressive Software Solutions and Training?"
            subtitle="A full-service IT Solutions & Training firm delivering enterprise software, academic projects, internships, and corporate-level technology consulting."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-neutralLight hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-lg flex items-center justify-center mb-6">
                <Code size={28} />
              </div>
              <h3 className="text-xl font-bold text-neutralDark mb-3">
                Practical Software Training
              </h3>
              <p className="text-gray-600">
                Industry-aligned, project-oriented software training focused on real-time development environments with full lab support.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-neutralLight hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mb-6">
                <Terminal size={28} />
              </div>
              <h3 className="text-xl font-bold text-neutralDark mb-3">
                World-Class Internship Programs
              </h3>
              <p className="text-gray-600">
                Hands-on internship programs supported by Progressive Cybernetics Pvt Ltd and partner firms with live production projects.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-neutralLight hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Database size={28} />
              </div>
              <h3 className="text-xl font-bold text-neutralDark mb-3">
                Placement & Corporate Enablement
              </h3>
              <p className="text-gray-600">
                Placement assistance, consulting, staffing, corporate training, enterprise services, and continuous career mentoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-neutralLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-neutralDark mb-4">
                Our Professional Training Programs
              </h2>
              <p className="text-lg text-secondary">
                Practical, enterprise-focused software training designed for students, professionals, and career switchers preparing for the global IT industry.
              </p>
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
                    src={course.images[0]}
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
            <Button variant="outline" asLink="/courses" className="w-full">
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Student & Client Testimonials"
            subtitle="Feedback from students and enterprise clients who experienced real-world transformation."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-neutralLight p-8 rounded-2xl relative">
                <div className="text-brand/20 absolute top-4 right-6 text-6xl font-serif">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <img src={t.photoUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-neutralDark">{t.name}</h4>
                    <p className="text-xs text-gray-500">
                      {t.role} at {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-brand text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Are You Preparing for the Global Tomorrow?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join Progressive Software Solutions and Training for enterprise-level software education, internship programs, and career transformation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="danger" size="lg" asLink="/contact">
              Enroll for Training
            </Button>
            <Button
              variant="outline"
              size="lg"
              asLink="/courses"
              className="
                border-white/70
                text-white
                transition-all
                duration-300
                ease-out
                hover:bg-white/10
                hover:border-white
                hover:text-white
              "
            >
              Explore Programs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
