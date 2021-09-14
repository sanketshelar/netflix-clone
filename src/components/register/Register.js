import React, { useState } from 'react';
import styled from 'styled-components';
import LanguageIcon from '@material-ui/icons/Language';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Register = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailEntered, setEmailEntered] = useState(false);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passChangeHandler = (e) => {
    setPass(e.target.value);
  };

  const emailClickHandler = (e) => {
    e.preventDefault();
    setEmailEntered(true);
  };

  const passClickHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <TopContainer>
        <img
          src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'
          alt='Netflix Logo'
        />

        <ButtonContainer>
          <button className='btn1'>
            <LanguageIcon /> English <ArrowDropDownIcon />
          </button>
          <button className='btn2'>Sign In</button>
        </ButtonContainer>
      </TopContainer>

      <MiddleContainer>
        <h1>Unlimited movies, TV shows and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <InputContainer>
          {!emailEntered ? (
            <>
              <input
                type='email'
                placeholder='Email Address'
                value={email}
                onChange={emailChangeHandler}
              />
              <button onClick={emailClickHandler}>
                Get Started <ArrowForwardIosOutlinedIcon />
              </button>
            </>
          ) : (
            <>
              <input
                type='password'
                placeholder='Email Password'
                value={pass}
                onChange={passChangeHandler}
              />
              <button onClick={passClickHandler}>
                Get Started <ArrowForwardIosOutlinedIcon />
              </button>
            </>
          )}
        </InputContainer>
      </MiddleContainer>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url('https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/2548691d-4d8c-4d97-b96d-449d3cca5d7e/IN-en-20210823-popsignuptwoweeks-perspective_alpha_website_large.jpg');
`;

const TopContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;

  > img {
    height: 160px;
    cursor: pointer;
    z-index: 2;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  .btn1 {
    display: flex;
    align-items: center;
    padding: 10px 18px;
    font-size: 16px;
    color: white;
    background-color: black;
    border: 1px solid white;
    border-radius: 5px;
    cursor: pointer;
    z-index: 2;

    > .MuiSvgIcon-root {
      font-size: 22px;
    }
  }
  .btn2 {
    padding: 10px 25px;
    font-size: 18px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    margin-left: 40px;
    cursor: pointer;
    z-index: 2;
  }
`;

const MiddleContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  > h1 {
    font-size: 70px;
    font-weight: 700;
    width: 50%;
    text-align: center;
    margin-bottom: 10px;
  }

  > h3 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 25px;
  }

  > p {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
  }
`;

const InputContainer = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  justify-content: space-between;

  > input {
    border: none;
    width: 70%;
    padding: 0px 12px;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    border: none;
    background-color: red;
    font-size: 35px;
    color: white;
    cursor: pointer;

    > .MuiSvgIcon-root {
      font-size: 25px;
    }
  }
`;
