import React, { useState } from 'react';
import styled from 'styled-components';

const Hamburger = styled.div`
    width: 30px;
    height: 24px;
    position: relative;
    cursor: pointer;
`;

const Line = styled.div`
    width: 100%;
    height: 4px;
    background-color: #333;
    position: absolute;
    transition: 0.4s;
  
    &:nth-child(1) {
        top: 0;
        transform: ${({ isOpen }) => isOpen && 'rotate(45deg) translate(5px, 5px)'};
    }
  
    &:nth-child(2) {
        top: 10px;
        opacity: ${({ isOpen }) => isOpen && '0'};
    }
  
    &:nth-child(3) {
        top: 20px;
        transform: ${({ isOpen }) => isOpen && 'rotate(-45deg) translate(5px, -5px)'};
    }
`;

const HamburgerIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <Line isOpen={isOpen} />
        <Line isOpen={isOpen} />
        <Line isOpen={isOpen} />
        </Hamburger>
    );
};

export default HamburgerIcon;
