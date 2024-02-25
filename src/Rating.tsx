import * as React from 'react';
import styled from 'styled-components';

const SRating = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.2rem;
`

const SRatingSVG = styled.svg`
    fill: #c8c8c8;
`

const SRatingSVGChecked = styled.svg`
    fill: #395a87;   
`

interface IRatingProps {
    rating: number;
    maxRating: number;
}

export function Rating ({rating, maxRating}: IRatingProps) {
  return (
    <SRating>
        {[...Array(rating)].map((e, i) => <SRatingSVGChecked width="12" height="12"><circle cx="6" cy="6" r="6"/></SRatingSVGChecked>)}
        {[...Array(maxRating-rating)].map((e, i) => <SRatingSVG width="12" height="12"><circle cx="6" cy="6" r="6"/></SRatingSVG>)}
    </SRating>
  );
}
