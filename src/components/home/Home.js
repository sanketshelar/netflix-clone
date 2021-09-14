import React from 'react';
import styled from 'styled-components';
import Navbar from '../navbar/Navbar';
import Featured from '../navbar/Featured';
import List from '../list/List';

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Featured type='movie' />
      <List />
      <List />
      <List />

      {/* <img
        src='https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/2548691d-4d8c-4d97-b96d-449d3cca5d7e/IN-en-20210823-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='homepage image'
      /> */}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: black;
  overflow: hidden;
`;
