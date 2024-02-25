import * as React from 'react';
import styled from 'styled-components';
import { Background } from './Background';
import { Contact } from './Contact';
import { ProfilePicture } from './ProfilePicture';
import { RatingItem } from './RatingItem';
import { Section } from './Section';
import { SimpleList } from './SimpleList';

export interface ISideCardProps {
}

export function SideCard (props: ISideCardProps) {
    return (
        <SCardPanel>
            <Background/>
            <SCardContentContainer>
                <ProfilePicture title={'Johan van Dongen'} image={require('./output.JPG')}/>
                <Contact/>
                <Section title={'Languages'} children={[
                    <ul>
                        <RatingItem label={'Dutch'} rating={5} maxRating={5}/>
                        <RatingItem label={'English'} rating={5} maxRating={5}/>
                        <RatingItem label={'German'} rating={2} maxRating={5}/>
                    </ul>
                ]}/>
                <Section title={'Hobbies and interests'} children={[
                    <SimpleList items={['Technology', 'Programming', 'Video editing', 'Snowboarding']}/>
                ]}/>
                <Section title={'Profile'} children={[<p>I am a reliable, organized and hard working individual. I enjoy learning new technologies and creating helpful tools. I set goals for myself and work these out in hobby projects. Ultimately I would love to make these tools bigger and more impactful in a team and company that aligns with my vision.</p>]}/>
            </SCardContentContainer>
        </SCardPanel>
    );
}

const SCardPanel = styled.div`
    width: 30%;
    min-height: 100%;
    position: relative;
    background-color: #395a87;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #395a87;
`

const SCardContentContainer = styled.div`
    z-index: 1;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
`
