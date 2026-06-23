const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: June 21, 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h2>
            <p>
              When you use JobPortal we may collect information you provide directly — such as your
              name, email address, resume, and job preferences — as well as usage data generated as
              you interact with our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate, and improve our services.</li>
              <li>To match job seekers with relevant opportunities.</li>
              <li>To communicate with you about your account or applications.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with employers when you
              apply for a job, and with service providers who help us operate the platform, under
              strict confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide
              services. You may request deletion of your account and associated data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, or delete your
              personal data. To exercise these rights, please{' '}
              <a href="/contact" className="text-blue-600 hover:underline">
                contact us
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p>
              Questions about this policy? Reach out via our{' '}
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

export default PrivacyPolicy;
