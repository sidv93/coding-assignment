import React, { useState } from 'react';
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';
import { useGlobalDispatchContext } from '../context/globalContext';
import { useHistory } from 'react-router-dom';
import GoogleIcon from '../assets/icons/google.svg';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled(motion.div)`
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(5, 62, 209, 0.19);
    border-radius: 16px;
    width: 483px;
    height: 450px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
`;
const GoogleSignin = styled.div`
    border: none;
    cursor: pointer;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const SignInLink = styled.h2`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.2rem;
    letter-spacing: 0.08rem;
    color: #222222;
`;
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;
const InputField = styled.input`
    border: 1px solid #0A45C2;
    border-radius: 4px;
    width: 100%;
    margin: 20px 0;
    padding: 12px;
    font-family: Open Sans;
    font-style: normal;
    font-size: 1.2rem;
    color: #B6B6B6;
`;
const SigninButton = styled.button`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.2rem;
    letter-spacing: 0.08em;
    color: #FFFFFF;
    background: #0A45C2;
    border-radius: 4px;
    width: 100%;
    outline: none;
    border: none;
    padding: 12px;
    cursor: pointer;
`;
const GoogleLogo = styled.img`
    width: 30.93px;
    height: 35px;
`;
const LoginErrorMessage = styled.p`
    font-size: 1rem;
    color: red;
    font-family: Poppins;
`;

const LoginForm = () => {
    const history = useHistory();
    const dispatch = useGlobalDispatchContext();
    const [error, setError] = useState('');
    const login = (response) => {
        console.log('login response', response);
        dispatch({ type: 'SET_ACCESS_TOKEN', accessToken: response.accessToken });
        window.localStorage.setItem('accessToken', response.accessToken)
        history.push('/contacts');
    }
    const handleLoginFailure = (response) => {
        console.log('login failure', response);
        setError('Failed to login, try again');
    }
    return (
        <AnimatePresence exitBeforeEnter>
            <Container
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                exit={{
                    opacity: 0
                }}
                transition={{
                    duration: 0.6,
                    ease: [0.6, 0.05, -0.01, 0.9]
                }}
            >
                <GoogleLogin
                    aria-label="Google-login-link"
                    clientId={"696735942028-gki3oll78lvl22mf6k9bdf0pt9bcoqvg.apps.googleusercontent.com"}
                    render={renderProps => (
                        <GoogleSignin onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            <GoogleLogo src={GoogleIcon} alt="google-icon" />
                            <SignInLink>Sign in with Google</SignInLink>
                        </GoogleSignin>
                    )}
                    buttonText='Login'
                    onSuccess={login}
                    onFailure={handleLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    responseType='code,token'
                />
                {
                    error && <LoginErrorMessage>{error}</LoginErrorMessage>
                }
                <InputContainer>
                    <InputField type="email" placeholder="Email" aria-label="login-email" />
                    <InputField type="password" placeholder="Password" aria-label="login-password" />
                </InputContainer>
                <SigninButton aria-label="Sign-in-button">Sign in</SigninButton>
            </Container>
        </AnimatePresence>
    );
};

export default LoginForm;