import React from 'react';
import Step1Icon from '../../assets/icons/OneInCircle.svg';
import Step2Icon from '../../assets/icons/TwoInCircle.svg';
import Step3Icon from '../../assets/icons/ThreeInCircle.svg';
import Step4Icon from '../../assets/icons/FourInCircle.svg';
import './How.css';


const SecondaryComponent = ({howLogo, title, stepLogo=true, step1Html, step2Html, step3Html, step4Html, ...props}) => {

    // const detectSpan = /(<span.*?>.*?<\/span>)/gi;
    // const spanPartSplit = props.step4.split(detectSpan).filter(Boolean)
    // const spanMatch = props.step4.match(detectSpan);

    return (
        <div className='secondary'>
            <div className='img-container'>
                <img
                    src={howLogo}
                    alt='howLogo'
                />
            </div>

            <div className='steps'>
                <h3>{title}</h3>
                <div className='step'>
                    {stepLogo ? (
                        <img
                            src={Step1Icon}
                            alt='Step1'
                        />
                    ) : <></> }
                    {step1Html}
                </div>

                <div className='step'>
                    {stepLogo ? (
                        <img
                            src={Step2Icon}
                            alt='Step2'
                        />
                    ) : <></> }
                    {step2Html}
                </div>

                <div className='step'>
                    {stepLogo ? (
                        <img
                            src={Step3Icon}
                            alt='Step3'
                        />
                    ) : <></> }
                    {step3Html}
                </div>

                <div className='step'>
                    {stepLogo ? (
                        <img
                            src={Step4Icon}
                            alt='Step4'
                        />
                    ) : <></> }
                    {step4Html}
                </div>

            </div>
        </div>
    );
};

export default SecondaryComponent;