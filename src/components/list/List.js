import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ListItem from './ListItem';

const List = () => {
  const [number, setNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const listRef = useRef();

  const clickHandler = (direction) => {
    setIsVisible(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === 'left' && number > 0) {
      setNumber(number - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === 'right' && number < 5) {
      setNumber(number + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <Container>
      <span>Continue to Watch</span>
      <ListContainer>
        <ArrowBackIosIcon
          className='left'
          onClick={() => clickHandler('left')}
          style={{ display: !isVisible && 'none' }}
        />
        <div ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
          <ListItem index={10} />
        </div>
        <ArrowForwardIosIcon
          className='right'
          onClick={() => clickHandler('right')}
        />
      </ListContainer>
    </Container>
  );
};

export default List;

const Container = styled.div`
  margin-top: 30px;

  width: 100%;
  > span {
    color: white;
    font-size: 25px;
    font-weight: 500;
    margin-left: 50px;
  }
`;

const ListContainer = styled.div`
  position: relative;
  margin-top: 40px;

  > .MuiSvgIcon-root {
    position: absolute;
    cursor: pointer;
    color: white;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 50px;
    height: 100%;
    z-index: 99;
    background-color: rgb(22, 22, 22, 0.5);
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }

  > div {
    display: flex;
    width: max-content;
    margin-left: 50px;
    transform: translateX(0);
    transition: all 1s ease;
  }
`;
