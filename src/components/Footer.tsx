import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutralDark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src="/logo.png"
                alt="Progressive Logo"
                width={200}
                height={50}
                className="object-contain"
              />
            </Link>

            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Empowering the next generation of software engineers through hands-on training, expert mentorship, and real-world projects.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">Our Courses</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Popular Courses</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><Link to="/courses" className="hover:text-accent transition-colors">Full Stack Web Dev</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">Mobile App Dev</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">Data Science</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">UI/UX Design</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">Cloud Computing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-accent flex-shrink-0 mt-0.5" />
                <span>123 Tech Park, Innovation Blvd,<br/>Silicon Valley, CA 94000</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-accent flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-accent flex-shrink-0" />
                <span>admissions@progressive.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Progressive Software Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/termsofservice" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
