import { useState, useEffect } from 'react';
import { Menu, X, Search, Moon, Sun, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  { name: 'Study Abroad & Scholarships', href: '/study-abroad' },
  { name: 'Relocation & Global Lifestyle', href: '/relocation' },
  { name: 'Online Courses & Education', href: '/education' },
  { name: 'Digital Skills & Online Work', href: '/digital-skills' },
  { name: 'Global Career Paths & Internships', href: '/careers' },
  { name: 'Adults Only 🔞 | NSFW', href: '/adults-only', warning: true },
  { name: 'Volunteering & Global Exposure', href: '/volunteering' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference and saved preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className="glass sticky top-0 z-50 w-full border-b border-glass-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Globe className="h-8 w-8 text-primary animate-float" />
            <div className="text-2xl font-heading font-bold text-gradient-ocean">
              Global Digz
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-md ${
                  category.warning 
                    ? 'text-warning hover:text-warning-foreground hover:bg-warning/20' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {category.name}
              </a>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex glass-hover"
            >
              <Search className="h-4 w-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="glass-hover"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-glass-border">
            <nav className="py-4 space-y-2">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/20 ${
                    category.warning 
                      ? 'text-warning hover:bg-warning/20' 
                      : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}