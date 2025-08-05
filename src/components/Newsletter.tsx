import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Handle newsletter subscription
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="glass rounded-3xl p-8 lg:p-12 my-16 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-6">
          <Mail className="h-12 w-12 text-primary mx-auto mb-4 animate-float" />
          <h2 className="text-3xl font-heading font-bold mb-4">
            Stay Ahead of Global Opportunities
          </h2>
          <p className="text-muted-foreground text-lg">
            Get weekly insights on scholarships, remote work opportunities, visa updates, 
            and expert tips delivered straight to your inbox.
          </p>
        </div>

        {isSubscribed ? (
          <div className="flex items-center justify-center space-x-2 text-green-600 py-4">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Thanks! Check your email to confirm.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl glass border-0 placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit" variant="gradient" className="px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        )}

        {/* Trust Indicators */}
        <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <span className="font-semibold text-primary">15,000+</span>
            <span>Subscribers</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-semibold text-primary">Weekly</span>
            <span>Updates</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-semibold text-primary">100%</span>
            <span>Free</span>
          </div>
        </div>
      </div>
    </section>
  );
}