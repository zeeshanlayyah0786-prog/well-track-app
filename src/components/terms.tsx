import Layout from "./layout";

function Terms() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-welltrack-black text-white py-16">
        <div className="welltrack-container">
          <div className="max-w-3xl">
            <h1 className="welltrack-heading text-4xl md:text-5xl mb-4">Terms of Service</h1>
            <p className="text-gray-300 text-lg">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="welltrack-section bg-white">
        <div className="welltrack-container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-welltrack-gray p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-0">
                These Terms of Service govern your use of WELL TRACK APP's services provided by WELL TRACK APP LLC. By using our services, you agree to these terms.
              </p>
            </div>

            <h2 className="welltrack-heading text-2xl mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using WELL TRACK APP's services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="welltrack-heading text-2xl mb-4">Use License</h2>
            <p className="text-gray-700 mb-6">
              Permission is granted to temporarily use WELL TRACK APP's services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>

            <h2 className="welltrack-heading text-2xl mb-4">User Account</h2>
            <p className="text-gray-700 mb-6">
              You are responsible for safeguarding the password and for maintaining the confidentiality of your account. You agree to accept responsibility for all activities that occur under your account.
            </p>

            <h2 className="welltrack-heading text-2xl mb-4">Prohibited Uses</h2>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>• Use our services for any unlawful purpose</li>
              <li>• Attempt to gain unauthorized access to our systems</li>
              <li>• Interfere with or disrupt our services</li>
              <li>• Share your account credentials with others</li>
            </ul>

            <h2 className="welltrack-heading text-2xl mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              WELL TRACK APP LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>

            <h2 className="welltrack-heading text-2xl mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms of Service, please contact us at:
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

export default Terms;