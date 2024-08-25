import React, { useEffect } from 'react';
import usePageNavigation from '../../hooks/usePageNavigation';
import Button from '../Button';
import './Text-and-Btn.css';
import { useReducer, useRef } from 'react';


const TextAndBtn = ({ labelHtml, titleHtml, passageHtml, buttons, ...props }) => {

    const handlePageNavigation = usePageNavigation()

    const buttonsDisplay = (buttonsArray) => {
        if (Array.isArray(buttonsArray) && buttonsArray.length > 0) {
    
            return (
                <div className='btn'>
                    {buttonsArray.map((button, index) => (
                        <Button key={index} 
                            textDisplay={button.textDisplay}
                            onClick={() => handlePageNavigation(button.onClickDestination)}
                            state={button.state ? button.state : 'primary'}
                        />
                    ))}
                </div>

            );
        } else {
            return (<></>);
        }
    }


    return(
        <div className='text-and-btn'>
            <div className='group'>
                {labelHtml ? labelHtml : <></>}
                {titleHtml ? titleHtml : <></>}
            </div>

            {passageHtml}

            {buttonsDisplay(buttons)}
            
        </div>
    );
};

export default TextAndBtn;