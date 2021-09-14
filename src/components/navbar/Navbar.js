import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);

    return () => {
      window.onscroll = null;
    };
  };
  return (
    <Container>
      <NavbarContainer
        style={
          isScrolled ? { backgroundColor: 'black' } : { backgroundColor: null }
        }
      >
        <NavbarLeft>
          <img
            src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'
            alt='Netflix Logo'
          />

          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </NavbarLeft>
        <NavbarRight>
          <SearchIcon />
          <span>KID</span>
          <NotificationsIcon />
          <AvatarContainer
            variant='square'
            src='https://m.media-amazon.com/images/I/517B0Yk9WZL._SL1021_.jpg'
            alt=''
          />

          <DropdownContainer>
            <ArrowDropDownIcon />

            <div>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </DropdownContainer>
        </NavbarRight>
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  color: white;
  font-size: 18px;
  width: 100%;
  background: linear-gradient(to top, transparent 0% rgb(0, 0, 0, 0.3) 50%);
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;

  > img {
    height: 100px;
    object-fit: contain;
    cursor: pointer;
    margin-right: 30px;
  }

  > span {
    margin-right: 20px;
    cursor: pointer;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;

  > .MuiSvgIcon-root {
    cursor: pointer;
    margin-right: 20px;
  }
  > span {
    cursor: pointer;
    margin-right: 20px;
  }
`;

const AvatarContainer = styled(Avatar)`
  cursor: pointer;
  margin-right: 20px;

  :hover {
    opacity: 0.8;
  }
`;

const DropdownContainer = styled.div`
  margin-right: 25px;
  > div {
    display: none;
    background-color: black;
    border-radius: 5px;
  }

  > div > span {
    padding: 10px;
    cursor: pointer;
  }

  :hover {
    > div {
      display: flex;
      flex-direction: column;
      position: absolute;

      right: 50px;
    }
  }
`;
