import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <LoginContainer>
      <img
        src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'
        alt='Netflix Logo'
      />

      <Container>
        <h1>Sign In</h1>
        <form>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button>Sign In</button>
          <span>New to Netflix? Sign up now.</span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more.</b>
          </small>
        </form>
      </Container>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url('https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/2548691d-4d8c-4d97-b96d-449d3cca5d7e/IN-en-20210823-popsignuptwoweeks-perspective_alpha_website_large.jpg');

  > img {
    height: 150px;
    margin-left: 28px;
  }
`;

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 150px;
  left: 600px;
  width: 30%;
  height: 80%;
  padding: 80px;

  background-color: #000000;
  opacity: 0.8;

  > h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
    z-index: 1;
  }

  > form {
    display: flex;
    flex-direction: column;

    > input {
      height: 50px;
      margin-bottom: 15px;
      padding: 0px 20px;
      border: none;
      border-radius: 5px;
      background-color: gray;
      color: white;

      ::placeholder {
        color: white;
      }
    }

    > button {
      height: 50px;
      background-color: red;
      color: white;
      font-size: 20px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      margin-top: 25px;
    }

    > span {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;
