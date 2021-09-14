import React from 'react';
import styled from 'styled-components/macro';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Featured = ({ type }) => {
  return (
    <Container>
      {type && (
        <Category>
          <span>{type === 'movie' ? 'Movies' : 'Series'}</span>

          <select name='genre' id='genre'>
            <option>Genre</option>
            <option value='adventure'>Adventure</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='fantasy'>Fantasy</option>
            <option value='historical'>Historical</option>
            <option value='horror'>Horror</option>
            <option value='romance'>Romance</option>
            <option value='sci-fi'>Sci-fi</option>
            <option value='thriller'>Thriller</option>
            <option value='western'>Western</option>
            <option value='animation'>Animation</option>
            <option value='drama'>Drama</option>
            <option value='documentary'>Documentary</option>
          </select>
        </Category>
      )}
      <FeatureContainer>
        <img
          src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          alt=''
        />
      </FeatureContainer>

      <FeaturedMovie>
        <FeaturedInfo>
          <img
            src='https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1'
            alt=''
          />
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
        </FeaturedInfo>
        <FeaturedButton>
          <button className='btn1'>
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className='btn2'>
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </FeaturedButton>
      </FeaturedMovie>
    </Container>
  );
};

export default Featured;

const Container = styled.div`
  position: relative;
`;

const Category = styled.div`
  position: absolute;
  top: 100px;
  left: 50px;

  > span {
    font-size: 24px;
    margin-right: 20px;
    color: white;
  }
  > select {
    background-color: black;
    color: white;
    border: 1px solid white;
    padding: 7px;
  }
`;

const FeatureContainer = styled.div`
  height: 90vh !important;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FeaturedMovie = styled.div`
  color: white;
  position: absolute;
  width: 30%;
  left: 50px;
  bottom: 120px;
`;

const FeaturedInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  > img {
    object-fit: contain;
  }

  span {
    margin-top: 20px;
  }
`;

const FeaturedButton = styled.div`
  display: flex;
  flex-direction: row;

  .btn1 {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 7px;
    border: none;
    margin-right: 8px;
    background-color: white;
    color: black;

    > .MuiSvgIcon-root {
      margin-right: 5px;
    }

    > span {
      font-weight: bolder;
      font-size: 17px;
    }
  }
  .btn2 {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 7px;
    border: none;
    background-color: gray;
    color: white;

    > .MuiSvgIcon-root {
      margin-right: 5px;
    }

    > span {
      font-weight: bolder;
      font-size: 17px;
    }
  }
`;
