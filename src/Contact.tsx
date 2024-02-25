import * as React from 'react';
import styled from 'styled-components';
import { Section } from './Section';
import { ReactComponent as UserIcon } from './icons/user-solid.svg';
import { ReactComponent as CalendarIcon } from './icons/calendar-days-solid.svg';
import { ReactComponent as CarIcon } from './icons/car-solid.svg';
import { ReactComponent as GlobeIcon } from './icons/globe-solid.svg';
import { ReactComponent as HouseIcon } from './icons/house-solid.svg';
import { ReactComponent as PhoneIcon } from './icons/phone-solid.svg';
import { ReactComponent as EnvelopeIcon } from './icons/envelope-solid.svg';    

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
                <div>
                    <p>Willem van Hornestraat 22</p>
                    <p>5611PV Eindhoven</p>
                </div>
            </SInfoListItem>  
            <SInfoListItem>
                <SInfoSVG><CalendarIcon/></SInfoSVG>
                <p>March 9, 2002</p>
            </SInfoListItem>
            <SInfoListItem>
                <SInfoSVG><CarIcon/></SInfoSVG>
                <p>Yes</p>
            </SInfoListItem>
            <SInfoListItem>
                <SInfoSVG><GlobeIcon/></SInfoSVG>
                <a href="https://dingdangdongen.nl">dingdangdongen.nl</a>
            </SInfoListItem>
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