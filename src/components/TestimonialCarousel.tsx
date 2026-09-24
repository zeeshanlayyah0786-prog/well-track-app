import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Card, CardContent } from './ui/card';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  beforeAfterImage?: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'David Wilson',
    role: 'Premium Member',
    quote: "As a busy professional, WELL TRACK APP's meal plans saved me time while helping me reach my fitness goals. Highly recommend!",
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
    beforeAfterImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Premium Member',
    quote: 'WELL TRACK APP transformed my approach to fitness. The meal plans and workout guides helped me lose 30 pounds in just 4 months!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    beforeAfterImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Challenge Participant',
    quote: 'The 30-Day Challenge program gave me structure and motivation. The community support was incredible!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma',
    beforeAfterImage: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=800&q=80',
    rating: 4
  },
  {
    id: 4,
    name: 'Michael Chen',
    role: 'App Subscriber',
    quote: 'The tracking app is intuitive and keeps me accountable. I have gained 15 pounds of muscle and feel stronger than ever.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael',
    beforeAfterImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    rating: 5
  },
];

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials = defaultTestimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full py-16 px-4 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See how WELL TRACK APP has helped people transform their lives and achieve their fitness goals.
          </p>
        </div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            {/* Before/After Image */}
            {currentTestimonial.beforeAfterImage && (
              <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
                <img 
                  src={currentTestimonial.beforeAfterImage} 
                  alt={`${currentTestimonial.name}'s transformation`} 
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
            )}

            {/* Testimonial Content */}
            <Card className="w-full lg:w-1/2 bg-gradient-to-br from-green-900 to-black border-green-500 shadow-lg shadow-green-900/20">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-20 h-20 border-2 border-green-500 mb-4">
                    <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.name} />
                    <AvatarFallback className="bg-green-800 text-white">
                      {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex mb-4">
                    {renderStars(currentTestimonial.rating)}
                  </div>
                  
                  <blockquote className="text-xl italic mb-6">
                    "{currentTestimonial.quote}"
                  </blockquote>
                  
                  <div>
                    <h4 className="font-bold text-lg text-green-400">{currentTestimonial.name}</h4>
                    <p className="text-gray-300">{currentTestimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full border-green-500 hover:bg-green-900 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-green-500' : 'bg-gray-600'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full border-green-500 hover:bg-green-900 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;