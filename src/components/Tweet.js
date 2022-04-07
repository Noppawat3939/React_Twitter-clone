import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Header from './Header';
import TweetPost from './TweetPost';
import TweetForm from './TweetForm';

function Tweet() {
    const {tweets, tweet, handleFormSubmit, handleInputChange} = useGlobalContext();

  return (
    <TweetContainer>
        <Header />
        <TweetForm />
        <TweetPost />
    </TweetContainer>
  )
}

export default Tweet;

const TweetContainer = styled.div`
    flex: .5;
    max-width: 100%;
    height: 100%;
`;
