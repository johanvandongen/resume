import * as React from 'react';
import styled from 'styled-components';
import { Background } from './Background';
import { Contact } from './Contact';
import { ProfilePicture } from './ProfilePicture';
import { RatingItem, RatingItemText } from './RatingItem';
import { Section } from './Section';
import { SimpleList } from './SimpleList';
import { WordGrid } from './WordGrid';

export interface ISideCardProps {
}

export function SideCard (props: ISideCardProps) {
    return (
        <SCardPanel>
            <Background/>
            <SCardContentContainer>
                <ProfilePicture title={'Johan van Dongen'} image={require('./train.jpg')}/>
                <Contact/>
                <Section title={'Languages'} children={[
                    <ul>
                        <RatingItemText label={'Dutch'} text={'Native'}/>
                        <RatingItemText label={'English'} text={'Fluent'}/>
                        <RatingItemText label={'German'} text={'Conversational'}/>
                    </ul>
                ]}/>
                <Section title={'Hobbies and interests'} children={[
                    <SimpleList items={['Snowboarding', 'Video editing', 'Skateboarding', 'Trampoline jumping', 'Technology', 'Programming']}/>
                ]}/>
                {/* <Section title={'Profile'} children={[<p>I am a reliable, organized and hard working individual. I enjoy learning new technologies and creating helpful tools. I set goals for myself and work these out in hobby projects. Ultimately I would love to make these tools bigger and more impactful in a team and company that aligns with my vision.</p>]}/> */}
                <Section title={'Skills'} children={[
                        <WordGrid items={['Problem solving', 'Creativity', 'Leadership', 'Communication', 'Proactive', 'Patience', 'Work ethic']}/>
                    ]}/>
            </SCardContentContainer>
        </SCardPanel>
    );
}

const SCardPanel = styled.div`
    width: 35%;
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
