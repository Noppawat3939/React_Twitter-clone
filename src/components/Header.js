import React from 'react';
import styled from 'styled-components';
import {BsStars} from 'react-icons/bs';

function Header() {
  return (
    <HeaderContainer>
        <h1>Home Page</h1>
        <div className="headerIcon">
          <BsStars />
        </div>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
    position: sticky;
    top: 0;
    padding: 10px 15px;
    background-color: rgba(255,255,255,.7);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h1 {
      font-size: 20px;
      font-weight: bold;
    }

    >.headerIcon {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: .3s ease-in-out;
    }

    >.headerIcon > svg {
      font-size: 20px;
      transform: rotate(-90deg)
    }

    >.headerIcon:hover {
      background-color: whitesmoke;
      border-radius: 50%;
    }
`;
