import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './Callout.css';
import Button from '../Button';


const CalloutBox = ({ label, title, p, logo, learnMoreBtn = true, contactBtn = true, ...props }) => {

    const isDesktop = useMediaQuery({ minWidth: 768 });

    const navigate = useNavigate();
    const handlePageNavigation= (page) => {
        const pagePrefix = `/${page}`
        navigate(pagePrefix);
        window.scrollTo(0, 0);
    }

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