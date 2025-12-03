import React from 'react';
import { SectionTitle } from '../components/UI';

export const TermsOfService: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-neutralDark mb-6">
          Terms & Conditions
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          These terms govern your access to and use of the Progressive Software Solutions & Training website.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-700 leading-relaxed">

        {/* Definitions */}
        <section>
          <SectionTitle title="Definitions" />
          <p>
            The terms "We", "Us", "Our", and "Company" refer to Progressive Software Solutions & Training.
            The terms "Visitor" and "User" refer to any person accessing or using this website.
          </p>
          <p>
            By accessing www.progressivesst.com, you agree to be bound by these Terms and Conditions.
            If you do not agree, you must immediately discontinue use of the website.
          </p>
        </section>

        {/* Use of Content */}
        <section>
          <SectionTitle title="Use of Content" />
          <p>
            All logos, brands, trademarks, headings, labels, designs, and content displayed on this website
            are the property of the Company or used under license.
          </p>
          <p>
            You may not sell, modify, reproduce, display, distribute, or use any website content for
            commercial or public purposes without written permission from the Company.
          </p>
        </section>

        {/* Acceptable Website Use */}
        <section>
          <SectionTitle title="Acceptable Website Use" />

          <h3 className="font-semibold mt-4 mb-2">A. Security Rules</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unauthorized access to data, servers, or accounts.</li>
            <li>Probing, scanning, or testing system vulnerabilities.</li>
            <li>Service disruption via malware, flooding, or mail bombing.</li>
            <li>Sending unsolicited commercial emails or promotions.</li>
          </ul>

          <h3 className="font-semibold mt-6 mb-2">B. General Rules</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Transmission of illegal or criminal material.</li>
            <li>Violation of intellectual property rights.</li>
            <li>Defamatory, obscene, abusive, hateful, or privacy-invading content.</li>
          </ul>

          <p className="mt-4">
            Violations may result in civil or criminal liability. The Company reserves the right to cooperate
            with law enforcement authorities.
          </p>
        </section>

        {/* Indemnity */}
        <section>
          <SectionTitle title="Indemnity" />
          <p>
            You agree to indemnify and hold harmless the Company, its officers, directors, employees,
            and agents from any claims, liabilities, damages, or losses arising from your use of the website
            or your violation of these Terms.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <SectionTitle title="Limitation of Liability" />
          <ul className="list-disc pl-6 space-y-2">
            <li>Use or inability to use the service</li>
            <li>Procurement of substitute goods or services</li>
            <li>Unauthorized data access or alteration</li>
            <li>Service interruption or termination</li>
          </ul>
          <p className="mt-4">
            In no event shall the Company’s total liability exceed the amount paid by the User to the Company,
            if any.
          </p>
        </section>

        {/* Disclaimer */}
        <section>
          <SectionTitle title="Disclaimer of Consequential Damages" />
          <p>
            The Company and its associated entities shall not be liable for incidental, consequential, loss
            of profits, hardware damage, data loss, or business interruption resulting from website usage,
            regardless of legal theory.
          </p>
        </section>

        {/* Modification */}
        <section>
          <SectionTitle title="Modification of Terms" />
          <p>
            The Company reserves the right to modify these Terms at any time without notice. Continued use
            of the website constitutes acceptance of the revised Terms.
          </p>
        </section>

      </div>
    </div>
  );
};
