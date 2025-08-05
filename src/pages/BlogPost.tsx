import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

export default function BlogPost() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Article */}
            <article className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="mb-4">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                    Study Abroad & Scholarships
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
                  Ultimate Guide to Study Abroad Scholarships in 2024
                </h1>
                
                {/* Meta Info */}
                <div className="flex items-center space-x-6 text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Sarah Mitchell</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>March 15, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>12 min read</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center space-x-3 mb-8">
                  <Button variant="glass" size="sm">
                    <Heart className="mr-2 h-4 w-4" />
                    Like
                  </Button>
                  <Button variant="glass" size="sm">
                    <Bookmark className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="glass" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
              
              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden mb-8 h-64 lg:h-80 bg-gradient-to-br from-primary to-accent">
                {/* Placeholder for featured image */}
              </div>
              
              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Studying abroad is one of the most transformative experiences you can have, but the financial barrier often seems insurmountable. This comprehensive guide will walk you through the best scholarship opportunities available in 2024 and provide you with the strategies you need to secure funding for your international education.
                </p>
                
                <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Why Study Abroad Scholarships Matter</h2>
                <p className="mb-6">
                  The cost of international education has been rising steadily, with average tuition fees for international students ranging from $20,000 to $50,000 per year in popular destinations like the US, UK, and Australia. Scholarships not only make education accessible but also recognize academic excellence and potential.
                </p>
                
                <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Top Scholarship Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    'Merit-based Scholarships',
                    'Need-based Financial Aid',
                    'Country-specific Programs',
                    'Field-specific Grants'
                  ].map((category) => (
                    <div key={category} className="glass rounded-lg p-4">
                      <h3 className="font-semibold text-primary">{category}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Detailed information about this scholarship type...
                      </p>
                    </div>
                  ))}
                </div>
                
                <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Application Strategy</h2>
                <p className="mb-6">
                  Success in scholarship applications requires a strategic approach. Start your research at least 12-18 months before your intended start date. Most scholarship deadlines fall between October and February for the following academic year.
                </p>
                
                <div className="glass rounded-xl p-6 my-8 bg-gradient-to-br from-primary/5 to-accent/5">
                  <h3 className="font-heading font-semibold text-lg mb-3">💡 Pro Tip</h3>
                  <p className="text-muted-foreground">
                    Don't limit yourself to just one scholarship application. The most successful students apply to 15-20 different programs to maximize their chances of success.
                  </p>
                </div>
                
                <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Conclusion</h2>
                <p className="mb-6">
                  Securing a study abroad scholarship requires dedication, planning, and persistence. Start early, stay organized, and don't let rejections discourage you. Your international education adventure awaits!
                </p>
              </div>
              
              {/* Call to Action */}
              <div className="glass rounded-2xl p-8 mt-12 bg-gradient-to-br from-primary/10 to-accent/10">
                <h3 className="text-xl font-heading font-bold mb-4">Ready to Apply for Scholarships?</h3>
                <p className="text-muted-foreground mb-6">
                  Download our comprehensive scholarship checklist and get access to our exclusive database of 500+ scholarship opportunities.
                </p>
                <Button variant="gradient" size="lg">
                  Get Free Scholarship Guide
                </Button>
              </div>
            </article>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}