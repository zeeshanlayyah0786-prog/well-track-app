import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Products", href: "/products" },
    { name: "Subscription Plans", href: "/subscription" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="welltrack-container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center shadow-md shadow-welltrack-500/30">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <span className="text-welltrack-black font-bold text-xl">WELL TRACK APP</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-welltrack-black hover:text-welltrack-green font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/subscription"
              className="welltrack-button px-6 py-2"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-welltrack-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="welltrack-container flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-welltrack-black hover:text-welltrack-green font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/subscription"
                className="welltrack-button px-6 py-2 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-welltrack-black text-white">
        <div className="welltrack-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center mr-3 shadow-md shadow-welltrack-500/30">
                  <span className="text-black font-bold text-lg">W</span>
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
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/products" className="text-gray-400 hover:text-welltrack-green transition-colors">Products</Link></li>
                <li><Link to="/subscription" className="text-gray-400 hover:text-welltrack-green transition-colors">Subscription</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-welltrack-green transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-welltrack-green transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-welltrack-green transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-gray-400 hover:text-welltrack-green transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-welltrack-green transition-colors">Help Center</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-welltrack-green transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-welltrack-green transition-colors">Terms of Service</Link></li>
                <li><Link to="/refund" className="text-gray-400 hover:text-welltrack-green transition-colors">Refund Policy</Link></li>
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
    </div>
  );
}