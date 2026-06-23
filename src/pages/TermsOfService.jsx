const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: June 21, 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Acceptance of Terms</h2>
            <p>
              By accessing or using JobPortal, you agree to be bound by these Terms of Service. If
              you do not agree, please do not use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Use of the Platform</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 16 years old to use JobPortal.</li>
              <li>You are responsible for maintaining the security of your account.</li>
              <li>You may not use the platform for any unlawful purpose.</li>
              <li>
                Employers must not post fraudulent, misleading, or discriminatory job listings.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Intellectual Property</h2>
            <p>
              All content and materials on JobPortal, including text, graphics, and software, are
              owned by or licensed to us. You may not reproduce or distribute any content without
              our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Disclaimer of Warranties</h2>
            <p>
              JobPortal is provided &quot;as is&quot; without warranties of any kind. We do not
              guarantee the accuracy of job listings or the suitability of any candidate or
              employer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, JobPortal shall not be liable for any
              indirect, incidental, or consequential damages arising from your use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of the platform after
              changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p>
              For questions about these terms, please visit our{' '}
              <a href="/contact" className="text-blue-600 hover:underline">
                contact page
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
