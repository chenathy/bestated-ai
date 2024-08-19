import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Button from '../Button';
import './Hero.css';


const HeroComponent = ({h1Content, h4Content, heroLogo, contactBtn = true, aboutBtn = false, ...props}) => {

    const isDesktop = useMediaQuery({ minWidth: 768 });

    const navigate = useNavigate();
    const handlePageNavigation= (page) => {
        const pagePrefix = `/${page}`
        navigate(pagePrefix);
        window.scrollTo(0, 0);
    }

    return (
        <div className='hero'>
            {isDesktop ? (<></>) : (
                <img 
                    src={heroLogo}
                    alt='heroLogo'
                />
            )}

            <div className='text-and-btn'>
                <h1>{h1Content}</h1>
                <h4>{h4Content}</h4>

                <div className='btn'>

                    {contactBtn ? (
                        <Button 
                            textDisplay={'Get in contact'}
                            onClick={() => handlePageNavigation('contact')}
                        />
                    ) : (<></>)}
                    
                    {aboutBtn ? (
                        <Button 
                            textDisplay={'About us'}
                            onClick={() => handlePageNavigation('about')}
                            state='secondary'
                        />
                    ) : (<></>)}
                </div>

            </div>

            {isDesktop ? (
                <div className='img-container'>
                    <img 
                        src={heroLogo}
                        alt='heroLogo'
                    />
                </div>
            ) : (<></>)}

        </div>
    )
};

export default HeroComponent;