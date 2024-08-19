import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Button from '../Button';
import './Text-and-Btn.css';
import { useReducer, useRef } from 'react';


const TextAndBtn = ({ label, title, passage, buttons, ...props }) => {

    const isDesktop = useMediaQuery({ minWidth: 768 });

    const navigate = useNavigate();
    const handlePageNavigation= (page) => {
        const pagePrefix = `/${page}`
        navigate(pagePrefix);
        window.scrollTo(0, 0);
    }

    const buttonsDisplay = (buttonsArray) => {
        if (Array.isArray(buttonsArray) && buttonsArray.length > 0) {
    
            return (
                <div className='btn'>
                    {buttonsArray.map((button, index) => (
                        <Button key={index} 
                            textDisplay={button.textDisplay}
                            onClick={() => handlePageNavigation(button.onClickDestination)}
                            state={button.state}
                        />
                    ))}
                </div>

            );
        } else {
            console.log(`it is not an array`)
            return (<></>);
        }
    }


    return(
        <div className='text-and-btn'>
            <div className='group'>
                {label ? label : <></>}
                {title ? title : <></>}
            </div>

            {passage}

            {buttonsDisplay(buttons)}
            
        </div>
    );
};

export default TextAndBtn;