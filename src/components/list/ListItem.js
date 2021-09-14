import React, { useState } from 'react';
import styled from 'styled-components';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    >
      <img src='/images/films/children/frozen/small.jpg' alt='' />

      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />

          <ItemsInfo>
            <ContainerIcons>
              <PlayArrowIcon />
              <AddIcon />
              <ThumbUpIcon />
              <ThumbDownIcon />
            </ContainerIcons>

            <ContainerTime>
              <span>1 hour 14 mins</span>
              <span className='limit'>+16</span>
              <span>1998</span>
            </ContainerTime>

            <ContainerInfo>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </span>
            </ContainerInfo>
            <ContainerGenre>
              <span>Action</span>
            </ContainerGenre>
          </ItemsInfo>
        </>
      )}
    </Container>
  );
};

export default ListItem;

const Container = styled.div`
  width: 230px;
  height: 150px;
  background-color: white;
  margin-right: 5px;
  overflow: hidden;
  color: white;
  background-color: black;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > video {
    width: 100%;
    height: 120px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  :hover {
    width: 325px;
    height: 300px;
    position: absolute;
    top: -150px;
    border-radius: 5px;
    box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.07);
    -webkit-box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.07);
    -moz-box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.07);

    img {
      height: 120px;
    }
  }
`;

const ItemsInfo = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 30px;
`;

const ContainerIcons = styled.div`
  margin-bottom: 10px;
  > .MuiSvgIcon-root {
    border: 2px solid white;
    font-size: 30px;
    border-radius: 50px;
    padding: 5px;
    margin-right: 5px;
  }
`;

const ContainerTime = styled.div`
  color: gray;
  font-size: 14px;
  margin-bottom: 10px;

  .limit {
    border: 1px solid gray;
    padding: 5px;
    margin: 0px 5px;
  }
`;

const ContainerInfo = styled.div`
  margin-bottom: 5px;
  font-size: 15px;
`;

const ContainerGenre = styled.div`
  font-size: 15px;
`;
