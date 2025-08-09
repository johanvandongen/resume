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
    <SRatingItemContainer><p>{label}</p> <Rating rating={rating} maxRating={maxRating}/></SRatingItemContainer>
  );
}

export function RatingItemText ({label, text}: {label: string, text: string}) {
  return (
    <SRatingItemContainer><p>{label}</p> <p>{text}</p></SRatingItemContainer>
  );
}

const SRatingItemContainer = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    /* border: 1px solid green; */
`
    
