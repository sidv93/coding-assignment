import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';
import Ellipse51 from '../assets/icons/ellipse51.svg';
import Ellipse52 from '../assets/icons/ellipse52.svg';
import Ellipse56 from '../assets/icons/ellipse56.svg';
import Ellipse55 from '../assets/icons/ellipse55.svg';
import Ellipse54 from '../assets/icons/ellipse54.svg';
import Ellipse53 from '../assets/icons/ellipse53.svg';
import Vector1 from '../assets/icons/vector1.svg';
import Vector2 from '../assets/icons/vector2.svg';

const Container = styled.div`
    background: #E5E5E5;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;
const El51 = styled.img`
    position: absolute;
    bottom: 77px;
    left: 10px;
    width: 60.5px;
    height: 34.96px;
`;
const El52 = styled.img`
    position: absolute;
    width: 18px;
    height: 13.39px;
    left: 112.5px;
    top: 182.5px;
`;
const El56 = styled.img`
    position: absolute;
    width: 18.5px;
    height: 21.35px;
    right: 17px;
    top: 125.15px;
`;
const El55 = styled.img`
    position: absolute;
    width: 26px;
    height: 24px;
    right: 67.5px;
    top: 222.5px;
`;
const El54 = styled.img`
    position: absolute;
    width: 11.21px;
    height: 18px;
    right: 136px;
    top: 502px;
`;
const El53 = styled.img`
    position: absolute;
    width: 18.88px;
    height: 32px;
    right: 26px;
    top: 592px;
`;
const V1 = styled.img`
    position: absolute;
    width: 653.5px;
    height: 606px;
    left: 0px;
    top: 4px;
`;
const V2 = styled.img`
    position: absolute;
    width: 387.1px;
    height: 491.2px;
    right: 1px;
    top: 159.8px;
`;

const Login = () => {
    return (
        <Container>
            <El51 src={Ellipse51} />
            <El52 src={Ellipse52} />
            <El56 src={Ellipse56} />
            <El55 src={Ellipse55} />
            <El54 src={Ellipse54} />
            <El53 src={Ellipse53} />
            <V1 src={Vector1} />
            <V2 src={Vector2} />
            <LoginForm />
        </Container>
    );
};

export default Login;