import React from 'react';
import Button from './Button';
import icon from '../assets/icons/logo-navy.svg';


const IconButton = ({ children, ...props }) => {
    return (
        <Button {...props}>
            <img src={icon} alt='icon' className='icon' />
            {children}
        </Button>
    );
};

export default IconButton;