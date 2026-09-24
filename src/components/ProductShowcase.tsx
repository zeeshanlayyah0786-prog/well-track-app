import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  features: string[];
}

interface ProductShowcaseProps {
  products?: Product[];
  title?: string;
  subtitle?: string;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products = [
    {
      id: "1",
      title: "30-Day Fitness Challenge",
      description:
        "A complete month of daily workouts and nutrition guidance to transform your routine.",
      price: 34.99,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      category: "Challenge",
      features: ["30 daily sessions", "Nutrition guide", "Community support", "All levels"],
    },
    {
      id: "2",
      title: "Video Training Bundle",
      description:
        "Over 50 instructional videos covering all major exercises and techniques.",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
      category: "Video",
      features: ["50+ videos", "HD quality", "All exercises", "Expert instruction"],
    },
    {
      id: "3",
      title: "Keto Meal Plan Bundle",
      description:
        "21 keto-friendly recipes with complete macros and weekly prep schedules.",
      price: 27.99,
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
      category: "Meal Plan",
      features: ["21 recipes", "Macro breakdowns", "Prep schedules", "Shopping lists"],
    },
    {
      id: "4",
      title: "Beginner Workout Guide",
      description:
        "Perfect for those just starting their fitness journey. Includes 12 weeks of progressive workouts.",
      price: 19.99,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      category: "Workout Guide",
      features: ["12-week program", "Video tutorials", "Progress tracking", "Beginner-friendly"],
    },
    {
      id: "5",
      title: "Sleep & Recovery Audio Guide",
      description:
        "Guided wind-downs and recovery sessions that help you rest harder and recover faster.",
      price: 14.99,
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      category: "Audio",
      features: ["8 guided sessions", "Sleep science", "Recovery routines", "Night mode"],
    },
    {
      id: "6",
      title: "Fitness Tracker Template",
      description: "Track your progress with our comprehensive Excel template.",
      price: 9.99,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      category: "Template",
      features: ["Excel template", "Progress tracking", "Easy to use", "Customizable"],
    },
  ],
  title = "Premium Digital Fitness Library",
  subtitle = "Fresh programs, meal plans and tools to power your progress",
}) => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Group products by category for filtering (could be used for tabs in the future)
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Optional category filter - could be implemented as tabs */}
        {/* 
        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {categories.map(category => (
            <button 
              key={category} 
              className="px-4 py-2 rounded-full border border-gray-300 hover:bg-green-500 hover:text-white transition-colors"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.image}
                category={product.category}
                features={product.features}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-gradient hover:opacity-95 transition-all shadow-lg shadow-welltrack-500/25"
          >
            Browse the Full Library
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;