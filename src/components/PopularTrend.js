import React from 'react'
import styled from 'styled-components';
import {RiMoreFill} from 'react-icons/ri';

function PopularTrend({...item}) {

  return (
    <PopularTrendContainer>
        <PopularText>
            <h4>{item.trend}</h4>
            <h2>{item.hash}</h2>
            <h4>{item.tweets}</h4>
        </PopularText>
        <PopularIcon>
            <RiMoreFill />
        </PopularIcon>
    </PopularTrendContainer>
  )
}

export default PopularTrend;

const PopularTrendContainer = styled.div`
    margin: 10px 0;
    cursor: pointer;
    transition: .3s ease-in-out;
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;

    &:hover {
        background-color: whitesmoke;
    }
`;

const PopularText = styled.div`
    > h4 {
        font-weight: 400;
        color: var(--twitter-text);
        font-size: 13px;
    }

    > h2 {
        font-size: 14px;
        margin: 5px 0;
    }
`;

const PopularIcon = styled.div`
    display: flex;
    justify-content: center;
    height: fit-content;

    &:hover > svg {
        background-color: var(--twitter-color-light);
        color: var(--twitter-color);
        border-radius: 50%;
    }

    > svg {
        color: var(--twitter-text);
        font-size: 18px;
    }
`;
