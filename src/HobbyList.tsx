import * as React from 'react';
import styled from 'styled-components';

export interface IHobbyListProps {
}

export function HobbyList (props: IHobbyListProps) {
  return (
    <SListContainer>
        <SListItem><SListItemText>Technology</SListItemText></SListItem>
        <SListItem><SListItemText>Programming</SListItemText></SListItem>
        <SListItem><SListItemText>Video editing</SListItemText></SListItem>
        <SListItem><SListItemText>Snowboarding</SListItemText></SListItem>
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