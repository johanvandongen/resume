import * as React from 'react';
import styled from 'styled-components';

interface ISubSectionHeaderProps {
    title: string;
    subtitle: string;
    date: string;
    nextTitle?: string;
    titleLink?: string;
}

export function SubSectionHeader ({title, subtitle, date, nextTitle, titleLink}: ISubSectionHeaderProps) {
  return (
    <div>
        <SSubSectionHeaderTitleDateContainer>
            <div style={{'flexDirection': 'row', 'display': 'flex', 'gap': '0.5rem'}}>
                {titleLink ? <a href={titleLink}><SSubSectionHeaderTitle>{title}</SSubSectionHeaderTitle></a> :
                <SSubSectionHeaderTitle>{title}</SSubSectionHeaderTitle>}
                {/* <SSubSectionHeaderTitle>
                    {titleLink ? <a href={titleLink}>{title}</a> :
                    <p>{title}</p>
                </SSubSectionHeaderTitle> */}
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
