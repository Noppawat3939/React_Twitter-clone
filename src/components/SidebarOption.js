import React from 'react';
import styled from 'styled-components';

function SidebarOption({Icon, title}) {
  return (
    <SidebarOptionContainer>
        <Icon />
        <h4>{title}</h4>
    </SidebarOptionContainer>
  )
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
    display: inline-flex;
    max-width: fit-content;
    margin-bottom: 10px;
    position: relative;
    align-items: center;
    padding: 10px 20px 10px 8px;
    border-radius: 35px;
    transition: .3s ease-in-out;
    cursor: pointer;

    > svg {
        font-size: 30px;
        margin-right: 20px;
    }

    > h4 {
        font-size: 18px;
        font-weight: 600;
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &:hover {
        background-color: rgba(0,0,0,.12);
    }

    &:nth-child(1)::before {
        content: '';
        position: absolute;
        top: 10px;
        left: 30px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--twitter-color);
    }
`;