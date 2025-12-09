import React from 'react';
import { SectionTitle } from '../components/UI';
import { SEO } from '../components/SEO';

const Privacy: React.FC = () => {
  return (
    <>
      {/* ✅ SEO META */}
      <SEO
        title="Privacy Policy | Progressive Software Solutions & Training"
        description="Read the Privacy Policy of Progressive Software Solutions & Training to understand how your personal data is collected, used, protected, and shared."
        canonical="https://www.progressivesst.com/privacy"
        ogImage="https://www.progressivesst.com/og-privacy.jpg"
      />

      <div className="pt-24 pb-20 min-h-screen bg-white">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          {/* ✅ REAL H1 — PERFECT */}
          <h1 className="text-4xl md:text-5xl font-bold text-neutralDark mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your privacy is critically important to us. This policy explains how we collect, use, and protect your data.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-700 leading-relaxed">
          
          <section>
            <SectionTitle title="Overview" />
            <p>
              This Privacy Policy governs the use of the website operated by Progressive Software Solutions & Training.
              By using this website, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <SectionTitle title="Information We Collect" />
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number</li>
              <li>Educational and professional details</li>
              <li>Billing and payment information</li>
              <li>Login credentials</li>
              <li>Usage analytics and IP address</li>
            </ul>
          </section>

          <section>
            <SectionTitle title="How We Use Your Information" />
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To process payments and registrations</li>
              <li>To communicate updates and offers</li>
              <li>To improve platform performance and security</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <SectionTitle title="Cookies & Tracking" />
            <p>
              We use cookies to enhance your experience, analyze traffic, and understand usage patterns.
              You may disable cookies in your browser settings, but some features may not function correctly.
            </p>
          </section>

          <section>
            <SectionTitle title="Third-Party Links" />
            <p>
              Our website may contain links to external websites. We are not responsible for the content or privacy
              practices of such third-party sites.
            </p>
          </section>

          <section>
            <SectionTitle title="Data Security" />
            <p>
              We implement industry-standard security practices to protect your personal information from unauthorized
              access, disclosure, or destruction.
            </p>
          </section>

          <section>
            <SectionTitle title="Information Sharing" />
            <p>
              We do not sell, trade, or rent your personal information. Data may only be shared with legal authorities
              when required by law or for internal service operations.
            </p>
          </section>

          <section>
            <SectionTitle title="Your Rights" />
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to access your data</li>
              <li>Right to request correction</li>
              <li>Right to request deletion</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <SectionTitle title="Grievance Redressal" />
            <div className="bg-neutralLight p-6 rounded-xl space-y-2">
              <p><strong>Grievance Officer:</strong> Mr. Toby Jose</p>
              <p><strong>Company:</strong> Progressive Software Solutions & Training</p>
              <p><strong>Address:</strong> 2nd Floor, RKV Arcade, Near Ashramam Bus Stand, Muvattupuzha, Ernakulam - 686661</p>
              <p><strong>Email:</strong> progressiveofc@gmail.com</p>
              <p><strong>Phone:</strong> 9072488881</p>
            </div>
          </section>

          <section>
            <SectionTitle title="Policy Updates" />
            <p>
              We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page.
              Continued use of our website implies acceptance of the updated policy.
            </p>
          </section>

        </div>
      </div>
    </>
  );
};

export default Privacy;
