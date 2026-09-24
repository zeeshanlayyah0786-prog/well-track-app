import Layout from "./layout";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-welltrack-black text-white py-16">
        <div className="welltrack-container">
          <div className="max-w-3xl">
            <h1 className="welltrack-heading text-4xl md:text-5xl mb-4">Contact Us</h1>
            <p className="text-gray-300 text-lg mb-6">
              Have questions or need support? We're here to help you on your fitness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="welltrack-section bg-white">
        <div className="welltrack-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="welltrack-heading text-2xl mb-6">Send Us a Quick Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-welltrack-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-welltrack-green"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-welltrack-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-welltrack-green"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-welltrack-green"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="welltrack-button px-6 py-3 flex items-center justify-center"
                >
                  Send Message <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="welltrack-heading text-2xl mb-6">Reach Us Directly</h2>
              <div className="bg-welltrack-gray rounded-xl p-6 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-welltrack-green/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-welltrack-green" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-gray-600">support@welltrackapp.fit</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-welltrack-green/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-welltrack-green" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-gray-600">+1 830 453-1323</p>
                      <p className="text-gray-600">Mon-Fri, 9am-5pm MST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-welltrack-green/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-welltrack-green" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Office</h3>
                      <p className="text-gray-600">2822 E 17th Ave</p>
                      <p className="text-gray-600">Denver, CO 80220</p>
                      <p className="text-gray-600">United States</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-welltrack-green/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-welltrack-green" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9am - 5pm MST</p>
                      <p className="text-gray-600">Saturday: 10am - 2pm MST</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {/* social icons hidden */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="welltrack-section bg-welltrack-gray">
        <div className="welltrack-container">
          <div className="text-center mb-12">
            <h2 className="welltrack-heading text-3xl mb-4">Quick Answers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our products and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">How do I access my digital products after purchase?</h3>
                <p className="text-gray-600">
                  After completing your purchase, you'll receive an email with download links and access instructions. 
                  You can also access all your purchases from your account dashboard.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">What is your refund policy?</h3>
                <p className="text-gray-600">
                  We offer a 30-day satisfaction guarantee on all digital products. 
                  If you're not satisfied, contact our support team for a full refund.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Can I use your app on multiple devices?</h3>
                <p className="text-gray-600">
                  Yes, your subscription allows you to use our app on up to 3 devices simultaneously with the same account.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">How do I cancel my subscription?</h3>
                <p className="text-gray-600">
                  You can cancel your subscription at any time from your account settings. 
                  If you cancel, you'll still have access until the end of your current billing period.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Still have questions? <a href="#" className="text-welltrack-green font-medium">Check our full FAQ page</a> or contact our support team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;