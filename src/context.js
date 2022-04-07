import React,{useContext, useState} from 'react'
import { useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [tweets, setTweets] = useState([]);
    const [tweet, setTweet] = useState('');
    const [focus, setFocus] = useState(false);
    const [tweetMore, setTweetMore] = useState(false); 

    const getLocalStorage = () => {
        const tweets = localStorage.getItem('tweetList');
        if(tweets) {
            return JSON.parse(tweets);
        }else {
            return [];
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(tweet !== '') {
            setTweets([...tweets,
                {id: new Date().getTime().toString(),
                text: tweet.trim(),
                }
            ])
        }
        setTweet('');
    }

    useEffect(() => {
        localStorage.setItem('tweetList', JSON.stringify(tweets))
    },[tweets]);

    const handleInputChange = (e) => {
        setTweet(e.target.value)
    }

    const handleRemove = (id) => {
        const removeTweet = tweets.filter((tweet) => {
            return tweet.id !== id
        })
        setTweets(removeTweet);
        setTweetMore(false);
    }

    const inputFocus = () => {
      if(!focus) {
        setFocus(true)
      }
      else {
        setFocus(false)
      }
    }

    

    return (
        <AppContext.Provider
            value={{
                tweets,
                tweet,
                handleFormSubmit,
                handleInputChange,
                handleRemove,
                focus,
                inputFocus,
                tweetMore,
                setTweetMore
            }}    
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider};