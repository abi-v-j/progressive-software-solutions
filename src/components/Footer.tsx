import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { FOOTER_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutralDark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ✅ MAIN GRID — CENTERED ON MOBILE, LEFT ON DESKTOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">

          {/* ✅ BRAND */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src="/logo.png"
                alt="Progressive Logo"
                width={200}
                height={50}
                className="object-contain"
              />
            </Link>

            <p className="text-gray-300 mb-6 text-sm leading-relaxed max-w-sm">
              Empowering the next generation of software engineers through
              hands-on training, expert mentorship, and real-world projects.
            </p>

            <div className="flex gap-5 mt-2 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/share/1AYhyzaasZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>

              <span className="text-gray-600 cursor-not-allowed">
                <Twitter size={20} />
              </span>

              <span className="text-gray-600 cursor-not-allowed">
                <Linkedin size={20} />
              </span>

              <a
                href="https://www.instagram.com/progressivesoftwaresolution?igsh=MWVmMGpjNGF6Y2Ez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* ✅ QUICK LINKS */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm text-center md:text-left">
              {FOOTER_LINKS.quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ CONTACT */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Contact
            </h3>

            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin size={18} className="text-accent" />
                <span>
                  2nd Floor, RVK Arcade,<br />
                  Muvattupuzha, Kerala
                </span>
              </li>

              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone size={18} className="text-accent" />
                <span>+91 9072 488 881</span>
              </li>

              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail size={18} className="text-accent" />
                <span>progressiveofc@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ✅ BOTTOM BAR — CENTERED (CORRECT) */}
        <div className="border-t border-gray-800 pt-8 flex flex-col items-center text-sm text-gray-400 gap-4 text-center">
          <p>
            © {new Date().getFullYear()} Progressive Software Solutions. All rights reserved.
          </p>

          <div className="flex space-x-6">
            {FOOTER_LINKS.legal.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
