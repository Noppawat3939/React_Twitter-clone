import React from 'react'
import styled from 'styled-components';
import {BsPatchCheckFill} from 'react-icons/bs';

function PopularFollower({...item}) {
    
  return (
    <FollwerContainer>
        <FolloewerUser>
            <img src={item.image} alt={item.userName} />
            <div className='user'>
                <h2>{item.userName}<BsPatchCheckFill /></h2>
                <h4>{item.userId}</h4>
            </div>
        </FolloewerUser>
        <button>follow</button>
    </FollwerContainer>
  )
}

export default PopularFollower;

const FollwerContainer = styled.div`
    transition: .3s ease-in-out;
    padding: 5px 20px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    cursor: pointer;

    &:hover {
        background-color: whitesmoke;
    }

    > button {
        cursor: pointer;
        background-color: #111;
        border: 0;
        padding: 10px 20px;
        border-radius: 30px;
        height: fit-content;
        font-weight: 600;
        color: #fff;
    }
`;

const FolloewerUser = styled.div`
    display: flex;
    align-items: center;

    > img {
        height: 50px;
        width: 50px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 10px;
    }

    >.user > h4 {
        font-weight: 400;
        color: var(--twitter-text);
        font-size: 13px;
    }

    >.user > h2 {
        display: flex;
        align-items: center;
        font-size: 14px;
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    >.user > h2 > svg {
        color: var(--twitter-color) !important;
        margin-left: 5px;
    }
`;
