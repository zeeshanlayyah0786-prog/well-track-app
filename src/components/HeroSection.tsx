import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({
  title = "WELL TRACK APP",
  subtitle = "Your Digital Fitness Companion",
  tagline = "Track Smarter. Train Stronger. Live Healthier.",
  ctaText = "Start Your Subscription",
  ctaLink = "/subscription",
}: HeroSectionProps) => {
  return (
    <section className="relative w-full min-h-[700px] bg-welltrack-black flex items-center justify-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-welltrack-600/30 via-black to-welltrack-900 z-0"></div>
      {/* Animated circles */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-welltrack-500/15 top-[-100px] right-[-100px] blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-welltrack-teal/10 bottom-[-50px] left-[-50px] blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center z-10">
        {/* Left side - Text content */}
        <motion.div
          className="w-full md:w-1/2 text-white mb-10 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gradient font-bold text-xl mb-2">{subtitle}</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-2xl md:text-3xl font-medium mb-6 text-white/90">
            {tagline}
          </p>
          <p className="text-white/70 text-lg mb-8 max-w-md">
            Train smarter with personalized tracking, expert programs and
            nutrition tools built to help you hit your goals faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-brand-gradient hover:opacity-95 text-white font-bold px-8 py-6 rounded-md text-lg shadow-lg shadow-welltrack-500/30"
              asChild
            >
              <a href={ctaLink}>
                {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-medium px-8 py-6 rounded-md text-lg bg-amber-300"
              asChild
            >
              <a href="/products">
                Explore Products <ChevronRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Right side - App mockups */}
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative h-[500px] w-full flex items-center justify-center">
            {/* Main app mockup */}
            <motion.div
              className="absolute z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&h=1000&fit=crop&q=80"
                alt="WELL TRACK APP"
                className="h-[500px] rounded-xl shadow-2xl border border-welltrack-500/20"
              />
            </motion.div>

            {/* Secondary app mockup */}
            <motion.div
              className="absolute left-[20%] top-[15%] z-10"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=640&fit=crop&q=80"
                alt="Fitness Tracking"
                className="h-[300px] rounded-xl shadow-2xl border border-welltrack-500/20"
              />
            </motion.div>

            {/* Tertiary app mockup */}
            <motion.div
              className="absolute right-[20%] bottom-[15%] z-10"
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=520&fit=crop&q=80"
                alt="Nutrition Tracking"
                className="h-[250px] rounded-xl shadow-2xl border border-welltrack-500/20"
              />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-30 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
      {/* Stats bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-white/10 py-4 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-around text-center">
            <div className="px-4 py-2">
              <p className="text-welltrack-400 font-bold text-2xl">10K+</p>
              <p className="text-white/70 text-sm">Active Users</p>
            </div>
            <div className="px-4 py-2">
              <p className="text-welltrack-400 font-bold text-2xl">500+</p>
              <p className="text-white/70 text-sm">Workout Plans</p>
            </div>
            <div className="px-4 py-2">
              <p className="text-welltrack-400 font-bold text-2xl">300+</p>
              <p className="text-white/70 text-sm">Nutrition Guides</p>
            </div>
            <div className="px-4 py-2">
              <p className="text-welltrack-400 font-bold text-2xl">4.8</p>
              <p className="text-white/70 text-sm">App Rating</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;