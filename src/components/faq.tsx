import Layout from "./layout";

export default function FAQ() {
  const faqs = [
    {
      question: "What devices are supported?",
      answer: "Our app works on iOS, Android, and web browsers. You can sync your data across all devices."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach our support team through the contact form, email at support@welltrackapp.fit, or through the in-app chat feature."
    },
    {
      question: "How does the free trial work?",
      answer: "You get 14 days of full access to all features. No credit card required to start. You can cancel anytime during the trial period."
    },
    {
      question: "Are the meal plans customizable?",
      answer: "Absolutely! Our meal plans can be customized based on your dietary preferences, allergies, and fitness goals."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service."
    }
  ];

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        <div className="welltrack-container py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-welltrack-black mb-4">
              Answers to Your Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers about WELL TRACK APP's products, plans and support.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-welltrack-black mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center bg-welltrack-green/10 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-welltrack-black mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-600 mb-6">
                Our support team is here to help you get the most out of WELL TRACK APP.
              </p>
              <a
                href="/contact"
                className="welltrack-button inline-block px-6 py-3"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}