import React from 'react';
import styled from 'styled-components';
import SidebarOption from './SidebarOption';
import {BiHash, BiBookmark} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import {CgMoreO} from 'react-icons/cg';
import {HiOutlineMail} from 'react-icons/hi';
import {RiHome7Fill, RiFileList2Line, RiMoreFill} from  'react-icons/ri';
import {VscBell} from 'react-icons/vsc';

function Sidebar() {
  return (
    <Container>
    <SidebarContainer>
        <SidebarLogo>
          <img src='https://download.logo.wine/logo/Twitter/Twitter-Logo.wine.png' alt="logo" />
        </SidebarLogo>
        <SidebarOptions>
        <SidebarOption Icon={RiHome7Fill} title='Home page' />
        <SidebarOption Icon={BiHash} title='Explore' />
        <SidebarOption Icon={VscBell} title='Warn' />
        <SidebarOption Icon={HiOutlineMail} title='Message' />
        <SidebarOption Icon={BiBookmark} title='Bookmark' />
        <SidebarOption Icon={RiFileList2Line} title='List' />
        <SidebarOption Icon={BsPerson} title='Personal information' />
        <SidebarOption Icon={CgMoreO} title='more' />
        </SidebarOptions>
        
        <button>Tweet</button>

        <SidebarUser>
          <div className="left">
            <img src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.6435-9/81697322_2699515710127170_2422821425682317312_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeELrXw7Tun_0fzdJQCfuALnOWOu-_KBDZ05Y6778oENnepGneTCOeSN5eHUGzKGPX6Jp1hEcPfYadM_kte_Gsj7&_nc_ohc=FZWaTXrh3SAAX90N9UX&_nc_ht=scontent.fbkk13-1.fna&oh=00_AT-AHMWTJ88r76HnPAlaMA2dOeREiRRJbLhHoZkaUIf09A&oe=6272FDB1" />
            <div className="texts">
              <SidebarUserText primary>Gopgap 👾</SidebarUserText>
              <SidebarUserText>@gg_nc</SidebarUserText>
            </div>
          </div>
          <div className="right">
            <RiMoreFill />
          </div>
        </SidebarUser>
    </SidebarContainer>
    
    </Container>
  )
}

export default Sidebar;

const Container = styled.div`
  flex: .2;
  background-color: #fff;
`;

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    width: max-content;
    height: 100%;
    border-right: 1px whitesmoke solid;
    //background-color: #fff;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding-left: 5rem;
    padding-top: 5px;

    > button {
      background-color: var(--twitter-color);
      width: 200px;
      border: 0;
      color: #fff;
      border-radius: 35px;
      font-size: 18px;
      padding: 10px 0;
      font-weight: 600;
      transition: .3s ease-in-out;
      cursor: pointer;
    }

    > button:hover {
      background-color: var(--twitter-color-dark);
    }
`;

const SidebarLogo = styled.div`
  display: flex;
  height: 45px;
  width: 45px;
  cursor: pointer;

  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    padding: 5px;
    transition: .3s ease-in-out;
    border-radius: 50%;
  }
  > img:hover {
    background-color: var(--twitter-color-light);
  }
`;

const SidebarOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarUser = styled.div`
  position: absolute;
  bottom: 30px;
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 30px;
  transition: .3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }

  > .left {
    display: flex;
    align-items: center;
  }

  > .left > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  /*> .left > .texts {
    display: flex;
    flex-direction: column;
  }*/
`;

const SidebarUserText = styled.h4`
  font-size: 14px;
  font-weight: ${props => (props.primary ? '500' : '400')};
  color: ${props => (props.primary ? '#111' : 'var(--twitter-text)')};
`;