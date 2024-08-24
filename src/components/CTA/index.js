import React from 'react';
import usePageNavigation from '../../hooks/usePageNavigation';
import Button from '../Button';
import './CTA.css';


const CTA = ({h1Message, buttonInfo, ...props}) => {

    const handlePageNavigation= usePageNavigation();

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

export default CTA;
