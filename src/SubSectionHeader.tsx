import * as React from 'react';
import styled from 'styled-components';

interface ISubSectionHeaderProps {
    title: string;
    subtitle: string;
    date: string;
    nextTitle?: string;
}

export function SubSectionHeader ({title, subtitle, date, nextTitle}: ISubSectionHeaderProps) {
  return (
    <div>
        <SSubSectionHeaderTitleDateContainer>
            <div style={{'flexDirection': 'row', 'display': 'flex', 'gap': '0.5rem'}}>
                <SSubSectionHeaderTitle>{title}</SSubSectionHeaderTitle>
                <SSubSectionHeaderUnderTitle>{nextTitle}</SSubSectionHeaderUnderTitle>
            </div>
            {/* <SSubSectionHeaderTitle>{title}</SSubSectionHeaderTitle> */}
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
