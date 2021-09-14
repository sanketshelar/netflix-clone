import React from 'react';
import styled from 'styled-components';
import faqsData from '../../fixtures/faqs.json';
import AccordionItem from './AccordionItem';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

function Accordion() {
  return (
    <Container>
      <h1>Frequently Asked Questions</h1>
      {faqsData.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          header={item.header}
          body={item.body}
        />
      ))}

      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <InputContainer>
        <input type='email' placeholder='Email Address' />
        <button>
          Get Started <ArrowForwardIosOutlinedIcon />
        </button>
      </InputContainer>
    </Container>
  );
}

export default Accordion;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 4px solid #222;
  border-bottom: 4px solid #222;
  background-color: black;

  > h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 0px;
    font-weight: bolder;
    font-size: 55px;
    color: white;
  }

  > p {
    margin-top: 25px;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
    color: white;
  }
`;

const InputContainer = styled.div`
  margin-bottom: 25px;
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
