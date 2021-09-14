import React, { useState } from 'react';
import styled from 'styled-components';

function AccordianItem(props) {
  const [showPara, setShowPara] = useState(false);
  return (
    <Container>
      <HeadContainer onClick={() => setShowPara((prevValue) => !prevValue)}>
        <h2>
          <span>{props.header}</span>
          <span>
            {showPara && <img src='/images/icons/close-slim.png' alt='plus' />}
            {!showPara && <img src='/images/icons/add.png' alt='plus' />}
          </span>
        </h2>
      </HeadContainer>

      <BodyContainer>{showPara && <p>{props.body}</p>}</BodyContainer>
    </Container>
  );
}

export default AccordianItem;

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const HeadContainer = styled.div`
  margin-bottom: 3px;

  > h2 {
    background-color: #303030;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    font-weight: 500;
    font-size: 28px;

    > span > img {
      height: 30px;
    }
  }
`;

const BodyContainer = styled.div`
  margin-bottom: 10px;
  > p {
    background-color: #303030;
    display: flex;
    align-items: center;
    padding: 20px 30px;
    font-size: 28px;
  }
`;
