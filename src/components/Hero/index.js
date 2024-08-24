import React from 'react';
import useIsDesktop from '../../hooks/useIsDesktop';
import usePageNavigation from '../../hooks/usePageNavigation';
import Button from '../Button';
import './Hero.css';


const HeroComponent = ({h1Content, h4Content, heroLogo, contactBtn = true, aboutBtn = false, ...props}) => {

    const isDesktop = useIsDesktop();
    const handlePageNavigation= usePageNavigation();

    return (
        <div className='hero'>
            {isDesktop ? (<></>) : (
                <div className='img-container'>
                    <img 
                        src={heroLogo}
                        alt='heroLogo'
                    />
                </div>
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