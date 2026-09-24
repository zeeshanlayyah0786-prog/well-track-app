import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles: { [key: string]: string } = {
      '/': 'WELL TRACK APP - Digital Fitness Platform | Track Smarter. Train Stronger.',
      '/products': 'Products - Premium Digital Fitness Library | WELL TRACK APP',
      '/subscription': 'Membership Plans - Premium Fitness Access | WELL TRACK APP',
      '/about': 'About Us - Meet the WELL TRACK APP Team | WELL TRACK APP',
      '/blog': 'Training Journal - Tips & Insights | WELL TRACK APP',
      '/contact': 'Contact Us - Get in Touch | WELL TRACK APP',
      '/faq': 'FAQ - Frequently Asked Questions | WELL TRACK APP',
      '/terms': 'Terms of Service | WELL TRACK APP',
      '/privacy': 'Privacy Policy | WELL TRACK APP',
      '/refund': 'Refund Policy | WELL TRACK APP'
    };

    const title = titles[location.pathname] || 'WELL TRACK APP - Digital Fitness Platform';
    document.title = title;
  }, [location.pathname]);

  return null;
};

export default PageTitle;