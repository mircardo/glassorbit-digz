import { Globe, Mail, MapPin, Phone, Heart } from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  'Categories': [
    { name: 'Study Abroad', href: '/study-abroad' },
    { name: 'Scholarships', href: '/scholarships' },
    { name: 'Remote Work', href: '/remote-work' },
    { name: 'Digital Skills', href: '/digital-skills' },
  ],
  'Resources': [
    { name: 'Scholarship Database', href: '/scholarships' },
    { name: 'Country Guides', href: '/countries' },
    { name: 'Visa Information', href: '/visas' },
    { name: 'Career Resources', href: '/careers' },
  ],
};

export default function Footer() {
  return (
    <footer className="glass border-t border-glass-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="h-8 w-8 text-primary animate-float" />
              <div className="text-2xl font-heading font-bold text-gradient-ocean">
                Global Digz
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your ultimate resource for global opportunities, education, scholarships, 
              remote work, and international lifestyle. Explore the world of possibilities 
              with our comprehensive guides and expert insights.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@globaldigz.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Global, Remote First</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-heading font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-glass-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Global Digz. All rights reserved. Built with ❤️ for global dreamers.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {['Twitter', 'LinkedIn', 'Instagram', 'YouTube', 'Telegram'].map((platform) => (
                <a
                  key={platform}
                  href={`#${platform.toLowerCase()}`}
                  className="w-10 h-10 rounded-full glass-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-xs font-medium">
                    {platform.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}