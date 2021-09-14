import React from 'react';
import styled from 'styled-components/macro';

function JumbotronItem(props) {
  let ml = '';
  let mr = '';
  if (props.direction === 'row') {
    ml = '95px';
    mr = '100px';
  } else {
    ml = '150px';
    mr = '100px';
  }
  return (
    <Container style={{ flexDirection: `${props.direction}` }}>
      <LeftContainer style={{ marginLeft: ml, marginRight: '60px' }}>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </LeftContainer>
      <RightContainer style={{ marginRight: mr }}>
        <img src={props.image} alt={props.alt} />
      </RightContainer>
    </Container>
  );
}

export default JumbotronItem;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 100px 200px;
  border-top: 4px solid #222;
  border-bottom: 4px solid #222;
`;

const LeftContainer = styled.div`
  > h1 {
    font-weight: bolder;
    font-size: 55px;
  }
  > p {
    font-size: 30px;
    margin-top: 15px;
  }
`;

const RightContainer = styled.div`
  > img {
    height: 400px;
    width: 400px;
    object-fit: contain;
  }
`;
