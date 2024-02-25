import * as React from 'react';
import styled from 'styled-components';

export interface IProfilePictureProps {
    title: string;
    image: string;
}

export function ProfilePicture ({title, image}: IProfilePictureProps) {
    return (
        <SProfile>
            <SProfileTitle>{title}</SProfileTitle>
            <SProfileImageContainer>
                <SProfileImage src={image} alt='profile'></SProfileImage>
            </SProfileImageContainer>
        </SProfile>
    );
}
const SProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SProfileTitle = styled.div`
    color: white;
    font-weight: bold;
    margin-top: 50px;
`
const SProfileImageContainer = styled.div`
    margin-top: 10px;
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 100px; 
    border: 5px solid #c5c6c5;
`
const SProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0% 30%;
    
`
