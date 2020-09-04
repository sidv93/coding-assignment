import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

const Container = styled.div`
    background: #E5E5E5;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Login = () => {
    return (
        <Container>
            <LoginForm />
        </Container>
    );
};

export default Login;