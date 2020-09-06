import React from 'react';
import styled from 'styled-components';
import { GoogleLogout } from 'react-google-login';
import Logout from '../assets/icons/logout.svg';
import Ellipse49 from '../assets/icons/ellipse49.svg';
import Ellipse50 from '../assets/icons/ellipse50.svg';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

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
`;
const DetailsContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
`;
const ProfilePicture = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
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
const LogoutButton = styled.img`
    cursor: pointer;
    z-index: 2;
`;
const El49 = styled.img`
    position: absolute;
    width: 241.95px;
    height: 81.48px;
    right: -54px;
    top: 5px;
    z-index: 1;
`;
const El50 = styled.img`
    position: absolute;
    width: 224.95px;
    height: 152.48px;
    left: 0px;
    top: -44.49px;
    z-index: 1;
`;

const Header = ({ details }) => {
    const history = useHistory();
    const logout = () => {
        window.localStorage.removeItem('accessToken');
        history.push('/');
    }
    return (
        <Container>
            <El49 src={Ellipse49} alt="ellipse-background" />
            <El50 src={Ellipse50} alt="ellipse-background" />
            <DetailsContainer
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.6,
                    ease: [0.6, 0.05, -0.01, 0.9]
                }}
            >
                <ProfilePicture src={details.picture} alt="profile-picture" />
                <NameEmailContainer>
                    <Name>{details.name}</Name>
                    <Email>{details.email}</Email>
                </NameEmailContainer>
            </DetailsContainer>
            <GoogleLogout
                clientId="696735942028-gki3oll78lvl22mf6k9bdf0pt9bcoqvg.apps.googleusercontent.com"
                render={renderProps => (
                    <LogoutButton src={Logout} onClick={renderProps.onClick} disabled={renderProps.disabled} alt="logout-button" />
                )}
                buttonText="Logout"
                onLogoutSuccess={logout}
                aria-label="logout-button"
            >
            </GoogleLogout>
        </Container>
    );
};

export default Header;
