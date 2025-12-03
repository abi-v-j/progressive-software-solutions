import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button, Input, TextArea, SectionTitle } from '../components/UI';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      alert("Thank you for your message! We will get back to you shortly.");
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setStatus('idle');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-neutralLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Get in Touch" 
          subtitle="Have questions about our courses or need career guidance? We're here to help." 
        />

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Contact Info Side */}
          <div className="bg-brand text-white p-10 md:p-14 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-blue-100 mb-10 leading-relaxed">
                Fill out the form and our admissions team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-lg">+1 (555) 123-4567</p>
                    <p className="text-sm text-blue-200">Mon-Fri 9am-6pm</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-lg">info@progressive.edu</p>
                    <p className="text-sm text-blue-200">Online Support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Main Campus</p>
                    <p className="text-sm text-blue-200">123 Tech Park, Innovation Blvd<br/>Silicon Valley, CA 94000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-blue-800">
               <p className="text-sm text-blue-200">Connect with us on social media for updates.</p>
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
              
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full mt-4 flex items-center justify-center gap-2"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Map Embed Placeholder */}
        <div className="mt-12 bg-gray-200 h-96 rounded-xl overflow-hidden shadow-md">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.628236516053!2d-122.08374688469227!3d37.42199997982517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614194000000!5m2!1sen!2sus" 
             width="100%" 
             height="100%" 
             style={{border:0}} 
             allowFullScreen 
             loading="lazy"
             title="Location Map"
           ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;