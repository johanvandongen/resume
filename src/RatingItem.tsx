import * as React from 'react';
import styled from 'styled-components';
import { Rating } from './Rating';

interface IRatingProps {
    label: string;
    rating: number;
    maxRating: number;
}

export function RatingItem ({label, rating, maxRating}: IRatingProps) {
  return (
    <SRatingItemContainer>{label} <Rating rating={rating} maxRating={maxRating}/></SRatingItemContainer>
  );
}

const SRatingItemContainer = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`
    
