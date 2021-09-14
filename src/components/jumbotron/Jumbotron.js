import React from 'react';
import styled from 'styled-components/macro';
import jumbodata from '../../fixtures/jumbo.json';
import JumbotronItem from './JumbotronItem';

function Jumbotron() {
  return (
    <Container>
      {jumbodata.map((item) => (
        <JumbotronItem
          key={item.id}
          id={item.id}
          title={item.title}
          subtitle={item.subTitle}
          image={item.image}
          alt={item.alt}
          direction={item.direction}
        />
      ))}
    </Container>
  );
}

export default Jumbotron;

const Container = styled.div`
  background-color: gray;
  width: 100vw;
`;
