import * as React from 'react';
import styled from 'styled-components';

interface ISectionProps {
    title: string;
    children: JSX.Element[];
}

export function Section ({title, children}: ISectionProps) {
    return (
        <SSectionContainer>
            <SSectionTitle>{title}</SSectionTitle>
            <SSectionContent>{children}</SSectionContent>
        </SSectionContainer>
  );
}

const SSectionContainer = styled.div`
    width: 80%;
    font-size: small;
    color: black;
`

const SSectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const SSectionTitle = styled.p`
    font-size: large;
    color: #395a87;
    border-bottom: 1px solid #395a87;
    margin-bottom: 10px;
`

    
