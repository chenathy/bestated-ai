import React from 'react';
import './How.css';
import IntroComponent from './intro';
import SecondaryComponent from './secondary';


const HowComponent = ({introTitle, introText, introLinkText, howLogo, secondaryTitle, secondaryStepLogo=true, ...props}) => {
    return (
        <div className='how'>
            <IntroComponent 
                title={introTitle}
                text={introText}
                textDisplayInLink={introLinkText}
            />
            <SecondaryComponent 
                howLogo={howLogo}
                title={secondaryTitle}
                stepLogo={secondaryStepLogo}
                step1={props.step1}
                step2={props.step2}
                step3={props.step3}
                step4={props.step4}
            />
        </div>
    );
};

export default HowComponent;
