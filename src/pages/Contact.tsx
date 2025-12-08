import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button, Input, TextArea, SectionTitle } from '../components/UI';
import { SEO } from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      alert('You must give consent before submitting the form.');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      alert("Thank you for your message! We will get back to you shortly.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
      });
      setStatus('idle');
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type, checked } = e.target as HTMLInputElement;

    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <>
      {/* ✅ SEO META */}
      <SEO
        title="Contact Progressive Software Solutions & Training | IT Training & Career Guidance"
        description="Get in touch with Progressive Software Solutions & Training for software courses, internships, and career guidance. Located in Muvattupuzha, Kerala."
        canonical="https://yourdomain.com/contact"
        ogImage="https://yourdomain.com/og-contact.jpg"
      />

      <div className="pt-24 pb-20 min-h-screen bg-neutralLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ✅ FORCE SINGLE H1 */}
          <h1 className="sr-only">Contact Progressive Software Solutions and Training</h1>

          <SectionTitle
            title="Get in Touch"
            subtitle="Have questions about our courses or need career guidance? We're here to help."
          />

          <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">

            {/* Contact Info Side */}
            <div className="bg-brand text-white p-10 md:p-14 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-blue-100 mb-10 leading-relaxed">
                  Fill out the form and our admissions team will get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold text-lg">+91 90724 88881</p>
                      <p className="text-sm text-blue-200">Mon–Sat, 9am–6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold text-lg">progressiveofc.com</p>
                      <p className="text-sm text-blue-200">Official Support</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Office Location</p>
                      <p className="text-sm text-blue-200">
                        2nd Floor, RKV Arcade<br />
                        Muvattupuzha, Kerala – 686661
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Form Side */}
            <div className="p-10 md:p-14">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    id="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Input
                    label="Phone Number"
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <Input
                  label="Email Address"
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

                <Input
                  label="Subject"
                  id="subject"
                  placeholder="Course Inquiry / Partnership"
                  value={formData.subject}
                  onChange={handleChange}
                />

                <TextArea
                  label="Message"
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />

                <div className="flex items-start gap-3 mt-4">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 accent-brand cursor-pointer"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600 leading-snug">
                    I agree to the collection and processing of my personal data according to the Privacy Policy.
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full mt-4 flex items-center justify-center gap-2"
                  disabled={status === 'submitting' || !formData.consent}
                >
                  {status === 'submitting' ? 'Sending...' : (
                    <>Send Message <Send size={18} /></>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* ✅ MAP IS VALID */}
          <div className="mt-12 bg-gray-200 h-96 rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4580324174353!2d76.58469467438823!3d9.97897117339756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07dd63da369c71%3A0x5e6a34523b192d67!2sProgressive%20Software%20Solutions%20And%20Training!5e0!3m2!1sen!2sin!4v1764864319449!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Progressive Software Solutions Location Map"
            ></iframe>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
