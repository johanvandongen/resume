import * as React from 'react';
import styled from 'styled-components';
import { Section } from './Section';
import { ReactComponent as UserIcon } from './icons/user-solid.svg';
import { ReactComponent as CalendarIcon } from './icons/calendar-days-solid.svg';
import { ReactComponent as CarIcon } from './icons/car-solid.svg';
import { ReactComponent as YoutubeIcon } from './icons/youtube.svg';
import { ReactComponent as GlobeIcon } from './icons/globe-solid.svg';
import { ReactComponent as HouseIcon } from './icons/house-solid.svg';
import { ReactComponent as PhoneIcon } from './icons/phone-solid.svg';
import { ReactComponent as EnvelopeIcon } from './icons/envelope-solid.svg';    
import { SimpleList, SimpleListComp } from './SimpleList';
import { ReactComponent as GithubIcon } from './icons/github.svg';    
export interface IContactProps {
}

export function Contact (props: IContactProps) {
  return (
    <Section title='Contact' children={[
        <SInfoList>
            <SInfoListItem>
                <SInfoSVG><UserIcon/></SInfoSVG>
                <p>Johan van Dongen</p>
            </SInfoListItem>
            <SInfoListItem>
                <SInfoSVG><EnvelopeIcon/></SInfoSVG>
                <p>johanpvandongen@gmail.com</p>
            </SInfoListItem>
            <SInfoListItem>
                <SInfoSVG><PhoneIcon/></SInfoSVG>
                <p>+31 6 37281796</p>
            </SInfoListItem>
            <SInfoListItem>
                <SInfoSVG><HouseIcon/></SInfoSVG>
                <p>Netherlands, Rotterdam </p>
            {/* <SimpleListComp items={[
                <p>Netherlands, Rotterdam <i style={{'fontSize': 12}}>(Currently)</i></p>,
                <p>Ramsau im Zillertal <i style={{'fontSize': 12}}>(Nov 2025 - Apr 2026)</i></p>
                ]} /> */}
            </SInfoListItem>  
            {/* <SInfoListItem>
                <SInfoSVG><CalendarIcon/></SInfoSVG>
                <p>March 9, 2002</p>
            </SInfoListItem> */}
            {/* <SInfoListItem>
                <SInfoSVG><CarIcon/></SInfoSVG>
                <p>Drivers Licence</p>
            </SInfoListItem> */}
            <SInfoListItem>
                <SInfoSVG><GlobeIcon/></SInfoSVG>
                <a href="https://dingdangdongen.nl">dingdangdongen.nl</a>
            </SInfoListItem>
            <SInfoListItem>
                <SInfoSVG><GithubIcon/></SInfoSVG>
                <a href="https://github.com/johanvandongen">github.com/johanvandongen</a>
            </SInfoListItem>
            {/* <SInfoListItem>
                <SInfoSVG><YoutubeIcon/></SInfoSVG>
                <a href="https://www.youtube.com/playlist?list=PLw7BJY_mw5y-x24bypW8aBJJRyAmn7GFU">Snowboard clips</a>
                </SInfoListItem> */}
        </SInfoList>
    ]}/>
  );
}

const SInfoList = styled.ul`
    list-style-type: none;    
`
const SInfoListItem = styled.li`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`
const SInfoSVG = styled.div`
    width: 30px;
    fill: #395a87;
    svg {
        width: 30px;
    }
`