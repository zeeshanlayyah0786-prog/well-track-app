import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ProductShowcase from "./ProductShowcase";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [showScrollToTop, setShowScrollToTop] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Testimonial data for our own implementation
  const testimonials = [
    {
      name: "Taylor Rodriguez",
      role: "Strength Coach",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor",
      quote:
        "I recommend WELL TRACK APP to all my clients. The meal plans and workout guides are comprehensive and produce real results.",
      transformation: "Gained 12lbs of muscle",
    },
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      quote:
        "WELL TRACK APP's app has transformed my approach to fitness. The personalized tracking and expert guidance keep me motivated and on track.",
      transformation: "Lost 25lbs in 3 months",
    },
    {
      name: "Michael Chen",
      role: "Marathon Runner",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      quote:
        "As a competitive runner, I need detailed analytics to improve. WELL TRACK APP provides everything I need to track my progress and optimize my training.",
      transformation: "Improved marathon time by 15 minutes",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-welltrack-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#" className="text-2xl font-bold text-gradient">
                WELL TRACK APP
              </a>
            </motion.div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#subscription">Subscription Plans</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#blog">Blog</NavLink>
          </nav>

          <div>
            <Link to="/subscription">
              <Button className="bg-brand-gradient hover:opacity-95 text-white font-bold shadow-lg shadow-welltrack-500/25">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-20 bg-gradient-to-b from-black to-welltrack-black-soft"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                Why Members Choose <span className="text-gradient">WELL TRACK APP</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                One powerful platform — cutting-edge tracking, expert coaching,
                and a community that keeps you moving.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Community Support",
                  description:
                    "Train alongside thousands of members in our supportive community for extra motivation.",
                  icon: "👥",
                },
                {
                  title: "Personalized Tracking",
                  description:
                    "AI-powered analytics that adapt to your progress and deliver custom recommendations.",
                  icon: "📊",
                },
                {
                  title: "Expert Guidance",
                  description:
                    "Professional workout plans and nutrition advice crafted by certified trainers.",
                  icon: "🏋️",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-welltrack-black-soft p-8 rounded-xl border border-welltrack-500/25 hover:border-welltrack-500/60 hover:shadow-lg hover:shadow-welltrack-500/10 transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section id="products" className="py-20 bg-black">
          <ProductShowcase />
        </section>

        {/* Subscription Plans */}
        <section
          id="subscription"
          className="py-20 bg-gradient-to-b from-welltrack-black-soft to-black"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                Plans Built Around <span className="text-gradient">Your Goals</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Flexible memberships that grow with your training — from your
                first session to your next personal record.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "$9.99",
                  period: "monthly",
                  description:
                    "Perfect for beginners starting their fitness journey",
                  features: [
                    "Workout tracking",
                    "Basic meal planning",
                    "Progress photos",
                    "Community access",
                  ],
                  cta: "Get Started",
                  popular: false,
                },
                {
                  name: "Pro",
                  price: "$19.99",
                  period: "monthly",
                  description:
                    "Our most popular plan for serious fitness enthusiasts",
                  features: [
                    "Everything in Basic",
                    "Advanced analytics",
                    "Custom workout builder",
                    "Nutrition coaching",
                    "Priority support",
                  ],
                  cta: "Get Pro Access",
                  popular: true,
                },
                {
                  name: "Elite",
                  price: "$29.99",
                  period: "monthly",
                  description: "Maximum results with personalized coaching",
                  features: [
                    "Everything in Pro",
                    "1-on-1 virtual coaching",
                    "Custom meal plans",
                    "Video analysis",
                    "Exclusive content",
                    "Early access to new features",
                  ],
                  cta: "Go Elite",
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative ${plan.popular ? "bg-gradient-to-br from-welltrack-800/60 to-welltrack-500/15" : "bg-welltrack-black-soft"} p-8 rounded-xl border ${plan.popular ? "border-welltrack-500" : "border-gray-700"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-gradient text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-welltrack-500/30">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <ul className="mb-8 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-welltrack-400 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => navigate('/subscription')}
                    className={`w-full ${plan.popular ? "bg-brand-gradient hover:opacity-95 text-white" : "bg-gray-700 hover:bg-gray-600"}`}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">
                All plans include a 14-day free trial. Cancel anytime.
              </p>
              <Link to="/subscription">
                <Button
                  variant="outline"
                  className="border-welltrack-500 text-welltrack-400 hover:bg-welltrack-500/10"
                >
                  Compare All Features
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                Member Success <span className="text-gradient">Stories</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Thousands of members train smarter with WELL TRACK APP — here
                are a few of their stories.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-welltrack-black-soft p-6 rounded-xl border border-welltrack-500/25"
                >
                  <div className="flex items-center mb-6">
                    <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
                  <div className="bg-welltrack-500/20 px-4 py-2 rounded-lg inline-block">
                    <p className="text-welltrack-400 font-semibold text-sm">
                      {testimonial.transformation}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 bg-gradient-to-b from-black to-welltrack-black-soft"
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  The Story Behind <span className="text-gradient">WELL TRACK APP</span>
                </h2>
                <p className="text-gray-400 mb-6">
                  WELL TRACK APP started in 2020 with one simple belief: fitness
                  tools should be powerful yet effortless to use. Our team of
                  coaches and engineers built the digital companion we wished
                  already existed.
                </p>
                <p className="text-gray-400 mb-6">
                  Today, we're proud to serve thousands of members worldwide.
                  Our mission is to make expert-level fitness tracking
                  accessible to everyone, regardless of experience level.
                </p>
                <Link to="/about">
                  <Button className="bg-brand-gradient hover:opacity-95 text-white font-bold shadow-lg shadow-welltrack-500/25">
                    Learn More About Us
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                    alt="WELL TRACK APP Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-brand-gradient p-6 rounded-xl shadow-xl shadow-welltrack-500/30">
                  <p className="text-white font-bold text-xl">10,000+</p>
                  <p className="text-white/90 text-sm">Active Users</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section id="blog" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                Training <span className="text-gradient">Journal & Tips</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Fresh ideas, science-backed guidance, and practical tips from
                our coaching team.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "The Ultimate Guide to Progressive Overload",
                  excerpt:
                    "Learn how to properly implement this fundamental principle for maximum strength gains.",
                  image:
                    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
                  date: "May 28, 2023",
                  category: "Training",
                },
                {
                  title:
                    "Sleep and Recovery: The Missing Piece in Your Fitness Puzzle",
                  excerpt:
                    "Discover why quality sleep might be more important than your workout routine.",
                  image:
                    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
                  date: "May 15, 2023",
                  category: "Recovery",
                },
                {
                  title: "10 Nutrition Myths Debunked by Science",
                  excerpt:
                    "Separate fact from fiction with our evidence-based analysis of common nutrition beliefs.",
                  image:
                    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
                  date: "June 12, 2023",
                  category: "Nutrition",
                },
              ].map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-welltrack-black-soft rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-welltrack-500/15 transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-welltrack-400 font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <Link
                      to="/blog"
                      className="text-welltrack-400 p-0 hover:text-welltrack-500 inline-flex items-center"
                    >
                      Read More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/blog">
                <Button
                  variant="outline"
                  className="border-welltrack-500 text-welltrack-400 hover:bg-welltrack-500/10"
                >
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-welltrack-black-soft to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-welltrack-800/60 to-welltrack-500/15 p-12 rounded-2xl border border-welltrack-500/40 text-center"
            >
              <h2 className="text-4xl font-bold mb-4">
                Your Strongest Year Starts{" "}
                <span className="text-gradient">Here</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Join thousands of members building stronger habits with WELL
                TRACK APP's digital tools.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/subscription">
                  <Button className="bg-brand-gradient hover:opacity-95 text-white font-bold text-lg px-8 py-6 shadow-lg shadow-welltrack-500/30">
                    Start Your Free Trial
                  </Button>
                </Link>
                <Link to="/products">
                  <Button
                    variant="outline"
                    className="border-white hover:bg-white/10 text-lg px-8 py-6"
                  >
                    View All Products
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-welltrack-black text-white py-16 border-t border-welltrack-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <span className="text-xl font-bold">WELL TRACK APP</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Track Smarter. Train Stronger. Live Healthier. Your complete digital fitness companion for achieving your health and wellness goals.
              </p>
              <div className="text-sm text-gray-400">
                <p>WELL TRACK APP LLC</p>
                <p>2822 E 17th Ave</p>
                <p>Denver, CO 80220, United States</p>
                <p className="mt-2">Phone: +1 830 453-1323</p>
                <p>Email: support@welltrackapp.fit</p>
                <p>Website: www.welltrackapp.fit</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#products" className="text-gray-400 hover:text-welltrack-400 transition-colors">Products</a></li>
                <li><a href="#subscription" className="text-gray-400 hover:text-welltrack-400 transition-colors">Subscription</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-welltrack-400 transition-colors">About Us</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-welltrack-400 transition-colors">Blog</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-welltrack-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-welltrack-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-welltrack-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-welltrack-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-welltrack-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-welltrack-400 transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 WELL TRACK APP LLC. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Made with ❤️ for your fitness journey</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-brand-gradient text-white p-3 rounded-full shadow-lg shadow-welltrack-500/40 hover:opacity-90 transition-all z-50"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
};

// Navigation Link component with hover effect
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="relative text-gray-300 hover:text-white transition-colors group"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-welltrack-400 transition-all group-hover:w-full" />
    </a>
  );
};

export default HomePage;