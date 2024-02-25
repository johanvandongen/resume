import * as React from 'react';
import styled from 'styled-components';

interface ISubSectionHeaderProps {
    title: string;
    subtitle: string;
    date: string;
}

export function SubSectionHeader ({title, subtitle, date}: ISubSectionHeaderProps) {
  return (
    <div>
        <SSubSectionHeaderTitleDateContainer>
            <SSubSectionHeaderTitle>{title}</SSubSectionHeaderTitle>
            <SSubSectionHeaderUnderTitle>{date}</SSubSectionHeaderUnderTitle>
        </SSubSectionHeaderTitleDateContainer>
        <SSubSectionHeaderUnderTitle>{subtitle}</SSubSectionHeaderUnderTitle>
    </div>
  );
}

const SSubSectionHeaderTitleDateContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const SSubSectionHeaderTitle = styled.p`
    font-weight: bold;
`

const SSubSectionHeaderUnderTitle = styled.p`
    color:#395a87;
`
