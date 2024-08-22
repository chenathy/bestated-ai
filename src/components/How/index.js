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
                step1Html={props.step1Html}
                step2Html={props.step2Html}
                step3Html={props.step3Html}
                step4Html={props.step4Html}
            />
        </div>
    );
};

export default HowComponent;
