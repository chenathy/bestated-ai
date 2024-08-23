import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import './CTA.css';


const CTAComponent = ({h1Message, buttonInfo, ...props}) => {

    const navigate = useNavigate();
    const handlePageNavigation= (page) => {
        const pagePrefix = `/${page}`
        navigate(pagePrefix);
        window.scrollTo(0, 0);
    }

    return (
        <div className='cta'>
            {h1Message}
            <Button 
                textDisplay={buttonInfo.textDisplay}
                onClick={() => handlePageNavigation(buttonInfo.destinationPage)}
                state={buttonInfo.state ? buttonInfo.state : 'primary'}
            />
        </div>
    );
};

export default CTAComponent;
