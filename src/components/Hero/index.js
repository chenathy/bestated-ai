import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import TextAndBtn from '../Text-and-Btn';
import './Hero.css';


const HeroComponent = ({title, supportText, heroLogo, buttonsArray, ...props}) => {

    const isDesktop = useMediaQuery({ minWidth: 768 });

    const navigate = useNavigate();
    const handlePageNavigation= (page) => {
        const pagePrefix = `/${page}`
        navigate(pagePrefix);
        window.scrollTo(0, 0);
    }

    const titleFormatted = <h1>{title}</h1>
    const supportTextFormatted = <p style={{color: `var(--navy)`, textAlign: `${isDesktop ? 'left' : 'center' }`}}>
        {supportText}
    </p>

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

            <TextAndBtn 
                title={titleFormatted}
                passage={supportTextFormatted}
                buttons={buttonsArray}
            />

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