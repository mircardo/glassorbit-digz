import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  isNSFW?: boolean;
}

export default function BlogCard({ 
  title, 
  excerpt, 
  author, 
  date, 
  readTime, 
  category, 
  image,
  isNSFW = false 
}: BlogCardProps) {
  return (
    <article className="glass glass-hover rounded-2xl overflow-hidden group cursor-pointer">
      {/* Featured Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-accent opacity-80" />
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full glass ${
            isNSFW 
              ? 'bg-warning/90 text-warning-foreground' 
              : 'bg-primary/90 text-primary-foreground'
          }`}>
            {category}
          </span>
        </div>

        {/* NSFW Warning */}
        {isNSFW && (
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 text-xs font-bold rounded bg-warning text-warning-foreground">
              18+
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Read More Button */}
        <Button 
          variant="ghost" 
          className="group/btn p-0 h-auto font-medium text-primary hover:text-primary-dark"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </article>
  );
}