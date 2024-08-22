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

    // Split the text by <br/> or \n to handle both cases
    const lines = text.split(/<br\/>|<br>|\\n/gi);
    
    return (
        <div className='intro'>
            <h2>{title}</h2>
            <p>
                {lines.map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        {index < lines.length - 1 && <br />}
                    </React.Fragment>
                ))}
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