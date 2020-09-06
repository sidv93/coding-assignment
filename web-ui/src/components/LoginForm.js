import React from 'react';
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';
import { useGlobalDispatchContext } from '../context/globalContext';
import { useHistory } from 'react-router-dom';
import GoogleIcon from '../assets/icons/google.svg';

const Container = styled.div`
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
const GoogleSignin = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
`;
const SignInLink = styled.h2`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.2rem;
    letter-spacing: 0.08rem;
    color: #222222;
    /* margin: 0; */
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

const LoginForm = () => {
    const history = useHistory();
    const dispatch = useGlobalDispatchContext();
    const login = (response) => {
        console.log('response', response.accessToken);
        dispatch({ type: 'SET_ACCESS_TOKEN', accessToken: response.accessToken });
        window.localStorage.setItem('accessToken', response.accessToken)
        history.push('/contacts');
    }
    const handleLoginFailure = (response) => {
        console.log('Failed to login ', response);
    }
    return (
        <Container>
            <GoogleSignin>
                <GoogleLogin
                    clientId={"696735942028-gki3oll78lvl22mf6k9bdf0pt9bcoqvg.apps.googleusercontent.com"}
                    render={renderProps => (
                        <GoogleSignin onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            <GoogleLogo src={GoogleIcon} alt="google-icon" />
                            <SignInLink>Sign in with Google</SignInLink>
                        </GoogleSignin>
                    )}
                    buttonText='Login'
                    onSuccess={login}
                    onFailure={login}
                    cookiePolicy={'single_host_origin'}
                    responseType='code,token'
                />
            </GoogleSignin>
            <InputContainer>
                <InputField type="email" placeholder="Email" />
                <InputField type="password" placeholder="Password" />
            </InputContainer>
            <SigninButton>Sign in</SigninButton>
        </Container>
    );
};

export default LoginForm;