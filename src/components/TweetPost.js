import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import {AiOutlineRetweet} from 'react-icons/ai';
import {BiMessageRounded, BiPin} from 'react-icons/bi';
import {FiUpload} from 'react-icons/fi';
import {HiOutlineTrash} from 'react-icons/hi'
import {IoIosMore } from 'react-icons/io';
import { IoHeartOutline} from 'react-icons/io5';
import {RiPlayListAddFill} from 'react-icons/ri';
import {VscListSelection} from 'react-icons/vsc';

function TweetPost() {
  const {tweets, handleRemove, tweetMore, setTweetMore} = useGlobalContext();

  return (
    <>
    {tweets.map((tweet) => {
      const {id, text} = tweet;

      return(
        <TweetPostContainer key={id}>
          <img src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.6435-9/81697322_2699515710127170_2422821425682317312_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeELrXw7Tun_0fzdJQCfuALnOWOu-_KBDZ05Y6778oENnepGneTCOeSN5eHUGzKGPX6Jp1hEcPfYadM_kte_Gsj7&_nc_ohc=FZWaTXrh3SAAX90N9UX&_nc_ht=scontent.fbkk13-1.fna&oh=00_AT-AHMWTJ88r76HnPAlaMA2dOeREiRRJbLhHoZkaUIf09A&oe=6272FDB1" alt="profile" />
          <TweetPostContent>

            <TweetPost_Top>
              <div className="texts">
                <TweetPostText primary underline>Gopgap👾</TweetPostText>
                <TweetPostText>@gg_nc</TweetPostText>
                <TweetPostText>·</TweetPostText>
                <TweetPostText underline>1 hours</TweetPostText>
              </div>
              <TweetPostButton onClick={() => setTweetMore(!tweetMore)}>
                <IoIosMore />
              </TweetPostButton>
              {tweetMore && (
                <TweetMoreOption>
                  <Button onClick={() => handleRemove(id)} red>
                    <HiOutlineTrash />
                    delete
                  </Button>
                  <Button>
                    <BiPin />
                    Pin it to your profile.
                  </Button>
                  <Button>
                    <RiPlayListAddFill />
                    Add/Remove @gg_nc from the list.
                  </Button>
                  <Button>
                    <BiMessageRounded/>
                    Change who can reply
                  </Button>
                  <Button>
                    <VscListSelection />
                    View Tweet Analysis
                  </Button>
                </TweetMoreOption>
              )}
            </TweetPost_Top>

            <TweetPost_Middle>
              <p>{text}</p>
            </TweetPost_Middle>

            <TweetPost_Bottom>
              <TweetPostButton>
                  <BiMessageRounded />
                </TweetPostButton>
              <TweetPostButton color='green' bgColor='green'>
                  <AiOutlineRetweet />
                </TweetPostButton>
              <TweetPostButton color='red' bgColor='red'>
                  <IoHeartOutline />
                </TweetPostButton>
              <TweetPostButton>
                  <FiUpload />
                </TweetPostButton>
              <TweetPostButton>
                  <VscListSelection />
                </TweetPostButton>
            </TweetPost_Bottom>
          </TweetPostContent>
        </TweetPostContainer>
      )
    })}
    </>
  )
}

export default TweetPost;

const TweetPostContainer = styled.div`
  background-color: #fff;
  display: flex;
  border-bottom: 1px solid whitesmoke;
  padding: 10px 20px;
  cursor: pointer;
  transition: .3s ease-in-out;

  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  &:hover {
    background-color: whitesmoke;
  }
`;

const TweetPostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
`;

const TweetPost_Top = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;

    > .texts {
      display: flex;
      column-gap: 5px;
    }
`;

const TweetPostText = styled.h2`
  font-size: 14px;
  color: ${props => (props.primary ? '#000' : 'var(--twitter-text)')} ;
  font-weight: ${props => (props.primary ? '500': '400')};
  cursor: pointer;

  &:hover {
    text-decoration: ${props => (props.underline ? 'underline gray' : 'none')};
  }
`;

const TweetPostButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  color: var(--twitter-text);
  transition: .3s ease-in-out;

  > svg {
    font-size: 20px;
  }

  &:nth-child(5) > svg {
    transform: rotate(-90deg);
  }

  &:hover {
    color: ${props => {
    if(props.color === 'green') return 'var(--twitter-color-green)';
    else if(props.color === 'red') return 'red';
      return 'var(--twitter-color)';
    }};
    
    background-color: ${props => {
      if(props.bgColor === 'green') return 'var(--twitter-color-green-light)';
      else if(props.bgColor === 'red') return 'var(--twitter-color-red-light)';
        return 'var(--twitter-color-light)';
    }};
  }
`;

const TweetPost_Middle = styled.div`
  height: max-content;
  margin-bottom: 10px;

  > p {
    font-size: 15px;
  }
`
const TweetPost_Bottom = styled.div`
  display: flex;
  column-gap: 15%;
`;

const TweetMoreOption = styled.div`
  position: absolute;
  right: 0;
  width: max-content;
  height: max-content;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,.2);
  border-radius: 5px;

  > button:last-child > svg {
    transform: rotate(-90deg);
  }
`

const Button = styled.button`
    width: 100%;
    display: flex;
    border: 0;
    font-size: 15px;
    padding: 15px;
    background-color: transparent;
    column-gap: 10px;
    align-items: center;
    cursor: pointer;
    transition: .3s ease-in-out;
    color: ${props => (props.red ? 'red' : '#111')};

    > svg {
      font-size: 20px;
      color: ${props => (props.red ? 'red' : 'var(--twitter-text)')};
    }

    &:hover {
      background-color: whitesmoke;
    }
`;
