import * as React from 'react';
import styled from 'styled-components';

export interface ISimpleListProps {
    items: string[];
}

export function SimpleList ({items}: ISimpleListProps) {
  return (
    <SListContainer>
        {items.map(item => <SListItem><SListItemText>{item}</SListItemText></SListItem>)}
    </SListContainer>
  );
}


const SListContainer = styled.ul`
    list-style-type: square;
`   
const SListItem = styled.li`
    margin-left: 1rem;
    color: #395a87;
`
const SListItemText = styled.p`
    color: black;
`