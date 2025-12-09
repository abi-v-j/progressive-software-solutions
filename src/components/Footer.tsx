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

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
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
              Empowering the next generation of software engineers through
              hands-on training, expert mentorship, and real-world projects.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1AYhyzaasZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-white pointer-events-none opacity-50"
                aria-label="Twitter (not configured)"
              >
                <Twitter size={20} />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-white pointer-events-none opacity-50"
                aria-label="LinkedIn (not configured)"
              >
                <Linkedin size={20} />
              </a>

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

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {FOOTER_LINKS.quickLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">
              Platform
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {FOOTER_LINKS.platform.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">
              Contact
            </h3>

            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-accent mt-1" />
                <span>
                  2nd Floor, RVK Arcade,<br />
                  Muvattupuzha, Kerala
                </span>
              </li>

              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-accent" />
                <span>+91 9072 488 881</span>
              </li>

              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-accent" />
                <span>progressiveofc@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Progressive Software Solutions. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
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
