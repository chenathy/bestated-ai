import React from 'react';
import useIsDesktop from '../../hooks/useIsDesktop';
import usePageNavigation from '../../hooks/usePageNavigation';
import './Callout.css';
import Button from '../Button';


const CalloutBox = ({ label, title, p, logo, learnMoreBtn = true, contactBtn = true, ...props }) => {

    const isDesktop = useIsDesktop();
    const handlePageNavigation = usePageNavigation();

    return (
        <div className='callout-box'>

            {isDesktop ? (<></>) : (
                <div className='img-container'>
                    <img 
                        src={logo} 
                        alt='home-callout'
                    />
                </div>
            )}

            <div className='text-and-btn'>
                <div className='group'>
                    <p>{label}</p>
                    <h2>{title}</h2>
                </div>

                {p}

                {learnMoreBtn ? (
                    <Button 
                        textDisplay='Learn more'
                        onClick={() => handlePageNavigation('employers')}
                    />
                ) : (<></>)}

                {contactBtn ? (
                    <Button 
                        textDisplay='Reach out'
                        onClick={() => handlePageNavigation('contact')}
                    />
                ) : (<></>)}
            </div>
            
            {isDesktop ? (
                <div className='img-container'>
                    <img 
                        src={logo} 
                        alt='home-callout'
                    />
                </div>
            ) : (<></>)}

        </div>
    );
};

export default CalloutBox;