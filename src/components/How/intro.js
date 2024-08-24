import React from 'react';
import usePageNavigation from '../../hooks/usePageNavigation';
import './How.css';


const IntroComponent = ({title, text, textDisplayInLink }) => {

    const handlePageNavigation = usePageNavigation();

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
                >{textDisplayInLink}
                </span>
            </p>
        </div>
    );
};

export default IntroComponent;