import * as React from 'react';
import './resume.css';

interface IRatingProps {
    rating: number;
    maxRating: number;
}

export function Rating ({rating, maxRating}: IRatingProps) {
  return (
    <div className="rating">
        {[...Array(rating)].map((e, i) => <svg className="checked" width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>)}
        {[...Array(maxRating-rating)].map((e, i) => <svg width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>)}
    </div>
  );
}
