import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedPost from '@/components/FeaturedPost';
import BlogCard from '@/components/BlogCard';
import Sidebar from '@/components/Sidebar';
import Newsletter from '@/components/Newsletter';

// Sample blog data
const featuredPost = {
  title: "Ultimate Guide to Study Abroad Scholarships in 2024",
  excerpt: "Discover the most comprehensive list of international scholarships, application tips, and success strategies that helped thousands of students achieve their dream education abroad.",
  author: "Sarah Mitchell",
  date: "March 15, 2024",
  readTime: "12 min read",
  category: "Study Abroad & Scholarships"
};

const blogPosts = [
  {
    title: "Top 15 Remote Work Visas for Digital Nomads",
    excerpt: "Complete guide to obtaining remote work visas in countries like Portugal, Estonia, and Dubai. Learn about requirements, costs, and application processes.",
    author: "Alex Chen",
    date: "March 12, 2024",
    readTime: "8 min read",
    category: "Relocation & Global Lifestyle"
  },
  {
    title: "Free Online Courses That Can Land You a $100k+ Job",
    excerpt: "Discover the best free online courses in tech, marketing, and business that employers actually value. Including certification paths and career outcomes.",
    author: "Maria Rodriguez",
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "Online Courses & Education"
  },
  {
    title: "Building a Successful Freelance Career: A Complete Roadmap",
    excerpt: "Step-by-step guide to transitioning from employee to successful freelancer. Learn about client acquisition, pricing, and scaling your business.",
    author: "David Kim",
    date: "March 8, 2024",
    readTime: "15 min read",
    category: "Digital Skills & Online Work"
  },
  {
    title: "International Internship Programs That Pay Well",
    excerpt: "Explore paid internship opportunities across Europe, Asia, and North America. Perfect for students and recent graduates seeking global experience.",
    author: "Emma Thompson",
    date: "March 5, 2024",
    readTime: "7 min read",
    category: "Global Career Paths & Internships"
  },
  {
    title: "Adult Content Creation: Legal and Financial Guide",
    excerpt: "Professional insights into the adult content industry, including legal considerations, platform comparisons, and financial planning strategies.",
    author: "Anonymous Expert",
    date: "March 3, 2024",
    readTime: "20 min read",
    category: "Adults Only 🔞 | NSFW",
    isNSFW: true
  },
  {
    title: "Volunteer Abroad Programs That Cover All Expenses",
    excerpt: "Find meaningful volunteer opportunities worldwide that include accommodation, meals, and even stipends. Make a difference while exploring the globe.",
    author: "Lisa Park",
    date: "March 1, 2024",
    readTime: "9 min read",
    category: "Volunteering & Global Exposure"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Featured Post */}
          <FeaturedPost {...featuredPost} />
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-heading font-bold">Latest Articles</h2>
                <button className="text-primary hover:text-primary-dark font-medium text-sm">
                  View All Posts →
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <BlogCard key={index} {...post} />
                ))}
              </div>
              
              {/* Load More */}
              <div className="text-center mt-12">
                <button className="px-8 py-3 glass glass-hover rounded-xl font-medium text-primary">
                  Load More Articles
                </button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
          
          {/* Newsletter Section */}
          <Newsletter />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}