import Layout from "./layout";

function Privacy() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-welltrack-black text-white py-16">
        <div className="welltrack-container">
          <div className="max-w-3xl">
            <h1 className="welltrack-heading text-4xl md:text-5xl mb-4">Privacy Policy</h1>
            <p className="text-gray-300 text-lg">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="welltrack-section bg-white">
        <div className="welltrack-container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-welltrack-gray p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-0">
                At WELL TRACK APP LLC, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
              </p>
            </div>

            <h2 className="welltrack-heading text-2xl mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-6">
              We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, and payment information.
            </p>

            <h2 className="welltrack-heading text-2xl mb-4">How We Use Your Information</h2>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>• To provide and maintain our services</li>
              <li>• To process transactions and send related information</li>
              <li>• To send you technical notices and support messages</li>
              <li>• To communicate with you about products, services, and promotional offers</li>
              <li>• To improve our services and develop new features</li>
            </ul>

            <h2 className="welltrack-heading text-2xl mb-4">Information Sharing</h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
            </p>

            <h2 className="welltrack-heading text-2xl mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="welltrack-heading text-2xl mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-welltrack-gray p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>WELL TRACK APP LLC</strong></p>
              <p className="text-gray-700 mb-2">2822 E 17th Ave</p>
              <p className="text-gray-700 mb-2">Denver, CO 80220, United States</p>
              <p className="text-gray-700 mb-2">Phone: +1 830 453-1323</p>
              <p className="text-gray-700">Email: support@welltrackapp.fit</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Privacy;