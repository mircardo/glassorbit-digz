import { Calendar, Clock, User, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeaturedPostProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

export default function FeaturedPost({ 
  title, 
  excerpt, 
  author, 
  date, 
  readTime, 
  category, 
  image 
}: FeaturedPostProps) {
  return (
    <article className="glass rounded-3xl overflow-hidden group cursor-pointer mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary to-accent overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary via-primary-light to-accent opacity-90 flex items-center justify-center">
              <Star className="w-20 h-20 text-white opacity-50 animate-float" />
            </div>
          )}
          
          {/* Featured Badge */}
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 text-sm font-bold rounded-full bg-accent text-accent-foreground animate-glow-pulse">
              ⭐ Featured
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          {/* Category */}
          <div className="mb-4">
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
              {category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4 leading-tight group-hover:text-gradient-ocean transition-all duration-300">
            {title}
          </h2>

          {/* Excerpt */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            {excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg"
            className="w-fit group/btn bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-light text-white font-medium"
          >
            Read Full Article
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </article>
  );
}