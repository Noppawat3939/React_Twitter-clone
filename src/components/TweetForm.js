import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import {IoImageOutline, IoLocationOutline} from 'react-icons/io5';
import {FaRegSmile} from 'react-icons/fa';
import {FiCalendar} from 'react-icons/fi';
import {MdOutlinePoll} from 'react-icons/md';
import {RiFileGifLine} from 'react-icons/ri';

function TweetForm() {
    const {tweets, tweet, handleFormSubmit, handleInputChange} = useGlobalContext();

  return (
    <TweetFormContainer>
        <img src="https://scontent.fphs4-1.fna.fbcdn.net/v/t1.6435-9/81697322_2699515710127170_2422821425682317312_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeELrXw7Tun_0fzdJQCfuALnOWOu-_KBDZ05Y6778oENnepGneTCOeSN5eHUGzKGPX6Jp1hEcPfYadM_kte_Gsj7&_nc_ohc=FZWaTXrh3SAAX_TcTl3&_nc_ht=scontent.fphs4-1.fna&oh=00_AT-gxHMj_oAS5BPaCKrdTy-rSlvxSz4PSXE5rhAEvbQdlg&oe=6272FDB1" alt="profile" />
        <form onSubmit={handleFormSubmit}>
            <div className="formControl_Top">
                <input 
                    type='text'
                    placeholder='What is going on'
                    onChange={handleInputChange}
                    value={tweet}
                />
            </div>
            <div className="formControl_Bottom">
                <div className="buttons">
                    <Button>
                        <IoImageOutline />
                    </Button>
                    <Button>
                        <RiFileGifLine />
                    </Button>
                    <Button>
                        <MdOutlinePoll />
                    </Button>
                    <Button>
                        <FaRegSmile />
                    </Button>
                    <Button>
                        <FiCalendar />
                    </Button>
                    <Button>
                        <IoLocationOutline />
                    </Button>
                </div>
                <button type='submit'>Tweet</button>
            </div>
        </form>

    </TweetFormContainer>
  )
}

export default TweetForm;

const TweetFormContainer = styled.div`
    display: flex;
    padding: 10px 10px 15px;
    border-bottom: 1px solid whitesmoke;
    margin: 0 10px;

    > img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
    }

    > form {
        width: 100%;
    }

    > form > .formControl_Top {
        height: 50px;
        margin: 0 20px 10px;
        border-bottom: 1px solid whitesmoke;
    }

    > form > .formControl_Top > input {
        width: 100%;
        height: 100%;
        border: 0;
        outline: none;
        font-size: 16px;
    }

    > form > .formControl_Top > input::placeholder {
        color: var(--twitter-text);
        font-size: 17px;
    }    

    > form > .formControl_Bottom {
        display: flex;
        justify-content: space-between;
    }

    > form > .formControl_Bottom > .buttons {
        display: flex;
        column-gap: 5px;
    }

    > form > .formControl_Bottom > button {
        background-color: var(--twitter-color);
        border: 0;
        color: #fff;
        font-weight: 600;
        padding: 8px 15px;
        border-radius: 30px;
    }
    
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    transition: .3s ease-in-out;
    background-color: transparent;

    > svg {
        color: var(--twitter-color);
        font-size: 18px;
    }

    &:hover {
        background-color: var(--twitter-color-light);
    }
`;