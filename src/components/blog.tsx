import { useState } from "react";
import Layout from "./layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind HIIT Workouts",
      excerpt: "Understand the science and benefits of High-Intensity Interval Training for maximum results.",
      date: "March 22, 2023",
      author: "Marcus Williams",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
      category: "workouts"
    },
    {
      id: 2,
      title: "How to Stay Motivated on Your Fitness Journey",
      excerpt: "Practical tips and strategies to maintain motivation and consistency in your fitness routine.",
      date: "February 3, 2023",
      author: "Alex Johnson",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
      category: "motivation"
    },
    {
      id: 3,
      title: "The Ultimate Guide to Meal Prepping for Fitness Success",
      excerpt: "Learn how to efficiently prepare your meals for the week to stay on track with your nutrition goals.",
      date: "April 28, 2023",
      author: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
      category: "nutrition"
    },
    {
      id: 4,
      title: "Understanding Macros: A Beginner's Guide",
      excerpt: "Learn the basics of macronutrients and how to balance them for your specific fitness goals.",
      date: "March 5, 2023",
      author: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80",
      category: "nutrition"
    },
    {
      id: 5,
      title: "Recovery Techniques for Athletes",
      excerpt: "Optimize your recovery with these proven techniques to enhance performance and prevent injury.",
      date: "January 8, 2023",
      author: "Marcus Williams",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
      category: "recovery"
    },
    {
      id: 6,
      title: "10 Essential Exercises for Building Core Strength",
      excerpt: "Discover the most effective exercises to build a strong and stable core for better overall fitness.",
      date: "May 15, 2023",
      author: "Marcus Williams",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      category: "workouts"
    },
    {
      id: 7,
      title: "The Benefits of Strength Training for Women",
      excerpt: "Why strength training is essential for women's health and how to get started.",
      date: "January 20, 2023",
      author: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80",
      category: "workouts"
    },
    {
      id: 8,
      title: "How to Track Your Fitness Progress Effectively",
      excerpt: "Discover the key metrics you should be tracking to ensure you're making progress toward your fitness goals.",
      date: "April 10, 2023",
      author: "Alex Johnson",
      image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=600&q=80",
      category: "tracking"
    },
    {
      id: 9,
      title: "5 Common Fitness Myths Debunked",
      excerpt: "Separate fact from fiction with our breakdown of common fitness misconceptions.",
      date: "February 18, 2023",
      author: "Priya Patel",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
      category: "education"
    }
  ];

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "recovery", name: "Recovery" },
    { id: "workouts", name: "Workouts" },
    { id: "nutrition", name: "Nutrition" },
    { id: "motivation", name: "Motivation" },
    { id: "tracking", name: "Progress Tracking" },
    { id: "education", name: "Education" }
  ];

  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-welltrack-black text-white py-16">
        <div className="welltrack-container">
          <div className="max-w-3xl">
            <h1 className="welltrack-heading text-4xl md:text-5xl mb-4">Training Journal</h1>
            <p className="text-gray-300 text-lg mb-6">
              Training advice, nutrition science, and recovery tips from our coaching team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="welltrack-section bg-white">
        <div className="welltrack-container">
          {/* Category Filter */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-welltrack-green text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Featured Post */}
          {activeCategory === "all" && (
            <div className="mb-12">
              <div className="bg-welltrack-gray rounded-xl overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80" 
                      alt="Featured Post" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <span className="bg-welltrack-green/10 text-welltrack-green text-xs font-medium px-2 py-1 rounded mb-4 inline-block">
                      FEATURED
                    </span>
                    <h2 className="text-2xl font-bold mb-3">The Complete Guide to Building a Sustainable Fitness Routine</h2>
                    <p className="text-gray-600 mb-4">
                      Learn how to create a fitness routine that you can maintain long-term for lasting results. 
                      This comprehensive guide covers everything from setting realistic goals to adapting your routine as you progress.
                    </p>
                    <div className="flex items-center mb-4">
                      <img 
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=alex" 
                        alt="Author" 
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <p className="text-sm font-medium">Alex Johnson</p>
                        <p className="text-xs text-gray-500">June 2, 2023</p>
                      </div>
                    </div>
                    <Link 
                      to="/blog"
                      className="inline-flex items-center text-welltrack-green hover:text-welltrack-green-dark font-medium"
                    >
                      Read Full Article <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author.toLowerCase().replace(' ', '')}`} 
                      alt={post.author} 
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-600">{post.author}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-600">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    to="/blog"
                    className="inline-flex items-center text-welltrack-green hover:text-welltrack-green-dark font-medium"
                  >
                    Read More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow">
              <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-l-md">
                Previous
              </button>
              <button className="py-2 px-4 bg-welltrack-green text-white border border-welltrack-green">
                1
              </button>
              <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50">
                2
              </button>
              <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50">
                3
              </button>
              <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-r-md">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="welltrack-section bg-welltrack-gray">
        <div className="welltrack-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="welltrack-heading text-3xl mb-4">Join the Weekly Digest</h2>
            <p className="text-gray-600 mb-6">
              Fresh training tips, recipes, and member-only content — delivered every Friday.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-welltrack-green"
              />
              <button className="welltrack-button px-6 py-3">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Blog;