import React from 'react';
import Step1Icon from '../../assets/icons/OneInCircle.svg';
import Step2Icon from '../../assets/icons/TwoInCircle.svg';
import Step3Icon from '../../assets/icons/ThreeInCircle.svg';
import Step4Icon from '../../assets/icons/FourInCircle.svg';
import './How.css';


const SecondaryComponent = ({howLogo, title, stepLogo=true, step1, step2, step3, step4, ...props}) => {

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
                    <p>{step1}</p>
                </div>

                <div className='step'>
                    {stepLogo ? (
                        <img
                            src={Step2Icon}
                            alt='Step2'
                        />
                    ) : <></> }
                    <p>{step2}</p>
                </div>

                <div className='step'>
                    {stepLogo ? (
                        <img
                            src={Step3Icon}
                            alt='Step3'
                        />
                    ) : <></> }
                    <p>{step3}</p>
                </div>

                <div className='step'>
                    {stepLogo ? (
                        <img
                            src={Step4Icon}
                            alt='Step4'
                        />
                    ) : <></> }
                    <p>{step4}</p>
                </div>

            </div>
        </div>
    );
};

export default SecondaryComponent;