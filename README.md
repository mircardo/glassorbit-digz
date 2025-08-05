# Global Digz - Premium GitHub Pages Blog Theme

A stunning, ultra-modern blog theme designed specifically for GitHub Pages with glassmorphism UI, perfect for Global Digz - your gateway to global opportunities.

## ✨ Features

### 🎨 Premium Design
- **Glassmorphism UI**: Soft frosted glass panels with translucent effects
- **Ocean Blue & Neon Pink Gradients**: Beautiful color scheme
- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark/Light Mode**: Automatic theme switching based on user preference
- **Smooth Animations**: Fluid hover effects and transitions

### 📱 Mobile-First & Responsive
- Fully responsive grid system
- Optimized for mobile, tablet, and desktop
- Touch-friendly navigation
- Progressive enhancement

### 🚀 Performance Optimized
- Fast loading times
- Optimized for GitHub Pages
- SEO-friendly structure
- Semantic HTML5

### 📝 Blog Features
- Featured posts section
- Category-based organization
- Search functionality
- Newsletter subscription
- Social media integration
- Table of contents
- Reading time estimates

### 🎯 Content Categories
- Study Abroad & Scholarships
- Relocation & Global Lifestyle  
- Online Courses & Education
- Digital Skills & Online Work
- Global Career Paths & Internships
- Adults Only 🔞 | NSFW (clearly labeled)
- Volunteering & Global Exposure

## 🛠 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool
- **Lucide React** - Beautiful icons
- **GitHub Pages** - Static hosting

## 🎨 Design System

### Colors
```css
/* Primary Ocean Blue */
--primary: 210 85% 55%
--primary-light: 210 90% 70%
--primary-dark: 210 80% 40%

/* Accent Neon Pink */
--accent: 320 85% 65%
--accent-light: 320 90% 75%

/* Glassmorphism Effects */
--glass-bg: rgba(255, 255, 255, 0.25)
--glass-border: rgba(255, 255, 255, 0.18)
--backdrop-blur: blur(16px)
```

### Typography
- **Primary Font**: Inter (clean, modern)
- **Heading Font**: Poppins (friendly, readable)

## 🚀 Quick Start

1. **Clone this repository**
   ```bash
   git clone <your-repo-url>
   cd global-digz-theme
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── BlogCard.tsx    # Blog post cards
│   ├── Sidebar.tsx     # Blog sidebar
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── BlogPost.tsx    # Individual blog post
│   └── NotFound.tsx    # 404 page
├── index.css           # Global styles & design system
└── main.tsx           # App entry point
```

## 🎨 Customization

### Colors
Edit the color variables in `src/index.css`:

```css
:root {
  /* Customize your brand colors */
  --primary: 210 85% 55%;
  --accent: 320 85% 65%;
  /* ... */
}
```

### Content
1. Update blog posts in `src/pages/Index.tsx`
2. Modify categories in `src/components/Header.tsx`
3. Customize footer links in `src/components/Footer.tsx`

### Fonts
Add Google Fonts in `index.html` and update `tailwind.config.ts`:

```typescript
fontFamily: {
  'primary': ['Your-Font', 'system-ui', 'sans-serif'],
  'heading': ['Your-Heading-Font', 'system-ui', 'sans-serif'],
}
```

## 📝 Adding Content

### Blog Posts
Create new blog post data objects:

```typescript
const newPost = {
  title: "Your Post Title",
  excerpt: "Brief description...",
  author: "Author Name",
  date: "March 20, 2024",
  readTime: "5 min read",
  category: "Study Abroad & Scholarships",
  isNSFW: false // for adult content
};
```

### Categories
Add new categories in the header navigation:

```typescript
const categories = [
  { name: 'New Category', href: '/new-category' },
  // ... existing categories
];
```

## 🔒 Adult Content (NSFW)

The theme includes proper handling for adult content:
- Clear 18+ labeling
- Warning colors (orange/red)
- Separated in navigation
- Appropriate content warnings

## 📱 GitHub Pages Deployment

1. **Enable GitHub Pages** in repository settings
2. **Set source** to GitHub Actions
3. **Push to main branch** - automatic deployment via GitHub Actions

The theme is optimized for GitHub Pages static hosting with:
- No server-side dependencies
- Optimized build output
- SEO-friendly URLs
- Fast loading times

## 🎯 SEO Features

- Semantic HTML5 structure
- Meta tags for social sharing
- Structured data ready
- Fast loading times
- Mobile-friendly design
- Accessible navigation

## 📧 Newsletter Integration

Built-in newsletter signup component with:
- Email validation
- Animated success states
- Privacy-conscious messaging
- Easy integration with email services

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🌟 Showcase

Perfect for:
- International education blogs
- Travel and lifestyle content
- Remote work resources
- Scholarship databases
- Digital nomad communities
- Career development sites

---

**Global Digz Theme** - Built with ❤️ for the global community.

For support or questions, reach out to the Global Digz team.
