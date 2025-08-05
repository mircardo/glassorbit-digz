import { BookOpen, TrendingUp, Calendar, Tag, Users, Heart } from 'lucide-react';

const categories = [
  { name: 'Study Abroad', count: 45, color: 'text-blue-500' },
  { name: 'Scholarships', count: 32, color: 'text-green-500' },
  { name: 'Remote Work', count: 28, color: 'text-purple-500' },
  { name: 'Relocation', count: 23, color: 'text-orange-500' },
  { name: 'Digital Skills', count: 19, color: 'text-cyan-500' },
  { name: 'Internships', count: 15, color: 'text-pink-500' },
];

const popularPosts = [
  { title: 'Top 10 Scholarships for International Students', views: '12.5k' },
  { title: 'Complete Guide to Remote Work Visas', views: '8.7k' },
  { title: 'Best European Countries for Digital Nomads', views: '7.2k' },
  { title: 'How to Get Funded for Your Study Abroad', views: '6.1k' },
];

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Categories Widget */}
      <div className="glass rounded-2xl p-6">
        <h3 className="flex items-center text-lg font-heading font-semibold mb-4">
          <Tag className="mr-2 h-5 w-5 text-primary" />
          Categories
        </h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center justify-between hover:bg-white/10 rounded-lg p-2 transition-colors cursor-pointer">
              <span className={`text-sm font-medium ${category.color}`}>
                {category.name}
              </span>
              <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-1">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Posts Widget */}
      <div className="glass rounded-2xl p-6">
        <h3 className="flex items-center text-lg font-heading font-semibold mb-4">
          <TrendingUp className="mr-2 h-5 w-5 text-primary" />
          Popular Posts
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={index} className="hover:bg-white/10 rounded-lg p-3 transition-colors cursor-pointer">
              <h4 className="text-sm font-medium line-clamp-2 mb-1">
                {post.title}
              </h4>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3" />
                {post.views} views
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Widget */}
      <div className="glass rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-accent/10">
        <h3 className="flex items-center text-lg font-heading font-semibold mb-4">
          <Heart className="mr-2 h-5 w-5 text-accent" />
          Stay Connected
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Get weekly updates on global opportunities, scholarships, and career tips.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 text-sm rounded-lg glass border-0 placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
          />
          <button className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-accent rounded-lg hover:from-primary-dark hover:to-accent-light transition-all duration-300">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Social Links Widget */}
      <div className="glass rounded-2xl p-6">
        <h3 className="flex items-center text-lg font-heading font-semibold mb-4">
          <Users className="mr-2 h-5 w-5 text-primary" />
          Follow Us
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((platform) => (
            <button
              key={platform}
              className="px-3 py-2 text-sm font-medium rounded-lg glass-hover text-center"
            >
              {platform}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}