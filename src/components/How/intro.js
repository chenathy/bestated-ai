import React from 'react';
import { useNavigate } from 'react-router-dom';
import './How.css';


const IntroComponent = ({title, text}) => {

    const navigate = useNavigate();
    const handlePageNavigation= (page) => {
        const pagePrefix = `/${page}`
        navigate(pagePrefix);
        window.scrollTo(0, 0);
    }
    
    return (
        <div className='intro'>
            <h2>{title}</h2>
            <p>
                {text}
                <br/> <br/>
                <span 
                    onClick={() => handlePageNavigation('contact')}
                >Let’s get started &gt;
                </span>
            </p>
        </div>
    );
};

export default IntroComponent;