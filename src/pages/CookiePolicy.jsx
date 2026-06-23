const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: June 21, 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit JobPortal. They help
              us recognize you, remember your preferences, and improve your experience on our
              platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How We Use Cookies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Essential cookies</span> — Required for core
                functionality such as authentication and session management.
              </li>
              <li>
                <span className="font-semibold">Preference cookies</span> — Remember your settings
                such as theme and language.
              </li>
              <li>
                <span className="font-semibold">Analytics cookies</span> — Help us understand how
                visitors use the site so we can improve it.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Managing Cookies</h2>
            <p>
              You can control cookies through your browser settings. Disabling essential cookies may
              affect site functionality. Most browsers allow you to refuse cookies or delete existing
              ones — refer to your browser&apos;s help documentation for instructions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Third-Party Cookies</h2>
            <p>
              Some features on JobPortal may use third-party services (such as analytics providers)
              that set their own cookies. We do not control these cookies. Please review the
              respective privacy policies of those services for more information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please{' '}
              <a href="/contact" className="text-blue-600 hover:underline">
                contact us
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
