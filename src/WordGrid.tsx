import * as React from 'react';
import styled from 'styled-components';

export interface IWordGridProps {
    items: string[];
}

export function WordGrid ({ items }: IWordGridProps) {
  return (
    <ItemContainer>
      {items.map((item) => <Item>{item}</Item>)}
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
    display: flex;
    gap: 0.2rem;
    flex-wrap: wrap;
`

const Item = styled.span`
    padding: 0.2rem;
    border-radius: 0.2rem;
    font-size: 12px;
    background-color: #c8c8c8;
    width: fit-content;
    font-weight: 500;
    color: #395a87;
`
