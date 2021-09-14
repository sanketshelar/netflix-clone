import React from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Watch = () => {
  return (
    <Container>
      <Back>
        <ArrowBackIcon />
        Home
      </Back>

      <video
        src='http://techslides.com/demos/sample-videos/small.mp4'
        autoPlay
        controls
        progress
      />
    </Container>
  );
};

export default Watch;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Back = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 15px;
  color: white;
  cursor: pointer;
  z-index: 2;
`;
