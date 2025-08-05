import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching for:', searchQuery);
      setIsOpen(false);
    }
  };

  if (!isOpen) {
    return (
      <Button
        variant="glass"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="hidden md:flex"
      >
        <Search className="h-4 w-4" />
        <span className="ml-2">Search</span>
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20">
      <div className="glass rounded-2xl p-6 mx-4 w-full max-w-2xl animate-fade-in">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-heading font-semibold">Search Global Digz</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for articles, guides, scholarships..."
              className="w-full pl-10 pr-4 py-3 glass border-0 rounded-xl text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
              autoFocus
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground">Popular searches:</span>
            {['scholarships', 'remote work', 'study abroad', 'digital nomad'].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setSearchQuery(term)}
                className="px-3 py-1 text-xs rounded-full glass-hover text-primary"
              >
                {term}
              </button>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}