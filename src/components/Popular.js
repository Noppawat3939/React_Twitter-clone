import React, {useState} from 'react';
import styled from 'styled-components';
import {FiSearch} from 'react-icons/fi';
import { useGlobalContext } from '../context';
import { PopularHashtag } from '../data';
import { Followers } from '../data';
import PopularTrend from './PopularTrend';
import PopularFollower from './PopularFollower';


function Popular() {
  const {focus, inputFocus} = useGlobalContext();
  const [popular, setPopular] = useState([]);

  return (
    <PopularContainer>
      <PopularHeader>
        <div className={`input ${focus && 'focus'}`}>
          <button>
            <FiSearch />
          </button>
          <input
            type="text"
            placeholder='search twitter'
            onFocus={inputFocus}
          />
        </div>
      </PopularHeader>
      <PopularBody>
        <h3>Popularity for you</h3>
        {PopularHashtag.map((item, index) => {
          return <PopularTrend key={index} {...item} />
        })}
        <Button>show more</Button>
      </PopularBody>
      <PopularFooter>
        <h3>Who should I follow ?</h3>
        {Followers.map((item, index) => {
          return <PopularFollower key={index} {...item} />
        })}
       <Button>show more</Button> 
      </PopularFooter>
    </PopularContainer>
  )
}

export default Popular;

const PopularContainer = styled.div`
    flex: .2;
    padding: 5px 5px 0 30px;
    border-left: 1px solid whitesmoke;
    height: max-content;
    background-color: #fff;
`;

const PopularHeader = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  background-color: #fff;
  padding: 5px 0;

  > .input {
    background-color: whitesmoke;
    display: flex;
    padding: 10px;
    border-radius: 35px;
  }

  >.input > input {
    border: 0;
    width: 100%;
    height: 30px;
    outline: none;
    background-color: transparent;
    padding: 5px 10px;
  }

  >.input > input::placeholder {
    color: var(--twitter-text);
  }

  >.input button {
    border: 0;
    background-color: transparent;
    font-size: 18px;
    margin: 0 5px;
    color: var(--twitter-text);
  }

  .input.focus {
    border: 1px solid var(--twitter-color);
    background-color: #fff;
  }

  >.input.focus > button {
    color: var(--twitter-color);
  }
`;

const PopularBody = styled.div`
  background-color: rgba(0,0,0,.025);
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;

  > h3 {
    padding: 8px 20px;
  }
`;

const Button = styled.button`
    cursor: pointer;
    text-align: start;
    width: 100%;
    border: 0;
    padding: 20px;
    font-size: 15px;
    color: var(--twitter-color);
    background-color: transparent;
    transition: .3s ease-in-out;

    &:hover {
    background-color: whitesmoke;
    }
`;

const PopularFooter = styled.div`
  background-color: rgba(0,0,0,.025);
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;

  > h3 {
    padding: 8px 20px;
  }
`;