import Layout from "./layout";

function Refund() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-welltrack-black text-white py-16">
        <div className="welltrack-container">
          <div className="max-w-3xl">
            <h1 className="welltrack-heading text-4xl md:text-5xl mb-4">Refund Policy</h1>
            <p className="text-gray-300 text-lg">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Refund Policy Content */}
      <section className="welltrack-section bg-white">
        <div className="welltrack-container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-welltrack-gray p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-0">
                At WELL TRACK APP LLC, we want you to be completely satisfied with your purchase. This refund policy outlines the terms and conditions for returns and refunds.
              </p>
            </div>

            <h2 className="welltrack-heading text-2xl mb-4">30-Day Money-Back Guarantee</h2>
            <p className="text-gray-700 mb-6">
              We offer a 30-day money-back guarantee on all digital products and subscription services. If you're not satisfied with your purchase, you can request a full refund within 30 days of your purchase date.
            </p>

            <h2 className="welltrack-heading text-2xl mb-4">Subscription Refunds</h2>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>• Monthly subscriptions: Full refund if cancelled within 30 days</li>
              <li>• Annual subscriptions: Prorated refund based on unused months</li>
              <li>• Free trial cancellations: No charges if cancelled before trial ends</li>
            </ul>

            <h2 className="welltrack-heading text-2xl mb-4">Digital Product Refunds</h2>
            <p className="text-gray-700 mb-6">
              Digital products (workout guides, meal plans, templates) are eligible for a full refund within 30 days of purchase if you haven't downloaded or accessed the content.
            </p>

            <h2 className="welltrack-heading text-2xl mb-4">How to Request a Refund</h2>
            <ol className="text-gray-700 mb-6 space-y-2">
              <li>1. Contact our support team within 30 days of purchase</li>
              <li>2. Provide your order number and reason for refund</li>
              <li>3. Our team will review your request within 2-3 business days</li>
              <li>4. Approved refunds will be processed within 5-7 business days</li>
            </ol>

            <h2 className="welltrack-heading text-2xl mb-4">Non-Refundable Items</h2>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>• Digital products accessed or downloaded after 30 days</li>
              <li>• Subscription services used beyond the 30-day guarantee period</li>
              <li>• Custom or personalized services</li>
            </ul>

            <h2 className="welltrack-heading text-2xl mb-4">Contact Us for Refunds</h2>
            <p className="text-gray-700 mb-6">
              To request a refund or if you have questions about our refund policy, please contact us:
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

export default Refund;