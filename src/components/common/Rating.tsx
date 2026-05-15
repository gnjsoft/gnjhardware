import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  size?: number;
}

export const Rating: React.FC<RatingProps> = ({ rating, size = 16 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={`${
            i < Math.floor(rating)
              ? 'text-accent fill-accent'
              : 'text-white/10 fill-transparent'
          }`}
        />
      ))}
    </div>
  );
};
