import * as React from 'react';
import styled from 'styled-components';

export interface IBackgroudnProps {
}

/**
 * Background for left panel div
 */
export function Background (props: IBackgroudnProps) {
  return (
    <SBgWrapper>
        <div style={{position: 'absolute', zIndex: 2}}>
            <svg width="300" height="500">
                <circle cx="150" cy="-100" r="250" fill="#395a87" />
            </svg>
        </div>
        <div style={{position: 'absolute', zIndex: 1}}>
            <svg width="2000" height="2000">
                <circle cx="1000" cy="100" r="1000" fill="#e6e6e6" />
            </svg>
        </div>
    </SBgWrapper>
  );
}

const SBgWrapper = styled.div`
    z-index: 1;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`