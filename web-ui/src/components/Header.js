import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 10vh;
    background: linear-gradient(90.21deg, #053ED1 0%, #0F4EAC 100%);
    overflow: hidden;
    position: relative;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:before {
        content: '';
        position: absolute;
        width: 209.95px;
        height: 152.48px;
        left: 0px;
        top: 24.49px;
        background: linear-gradient(90.2deg, #097AFF 5.78%, #0041E8 100%);
        opacity: 0.6;
        transform: rotate(-25.13deg);
        z-index: -1;
    }
`;
const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const ProfilePicture = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    margin: 0 12px;
    border: 2px solid #FFFFFF;
`;
const NameEmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`;
const Name = styled.h2`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: 0.08rem;
    color: #FFFFFF;
    margin: 0%;
    padding: 0;
    text-align: left;
`;
const Email = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.2rem;
    letter-spacing: 0.08em;
    color: #FFFFFF;
    margin: 0;
    padding: 0;
`;
const LogoutContainer = styled.div`
    height: 50px;
    width: 100px;
    background: white;
`;

const Header = () => {
    return (
        <Container>
            <DetailsContainer>
                <ProfilePicture />
                <NameEmailContainer>
                    <Name>Alex Costa</Name>
                    <Email>alex.costa@gmail.com</Email>
                </NameEmailContainer>
            </DetailsContainer>
            <LogoutContainer>

            </LogoutContainer>
        </Container>
    );
};

export default Header;
