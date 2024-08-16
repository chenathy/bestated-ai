import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FinancialAdvisor.css';
import Hero from './Hero.png';
import HowIcon from './How.png';


const ForFinancialAdvisors = () => {

    const navigate = useNavigate();
    const handlePageNavigation= (page) => {
        const pagePrefix = `/${page}`
        navigate(pagePrefix);
        window.scrollTo(0, 0);
    }

    return (
        <div className='Financial'>

            <div className='Hero'>
                <div className='text-btn'>
                    <h1>Streamline beneficiary updates with our API</h1>
                    <h4>Bestated’s novel beneficiary API does the heavy lifting so you and your administrative staff don’t have to.</h4>
                    <div className='btn'>
                        <button 
                            className='contact-btn'
                            onClick={() => handlePageNavigation('contact')}
                        >
                            Get in contact
                        </button>
                    </div>
                </div>

                <img 
                    src={Hero} 
                    alt='HomeHero'
                />

            </div>

            <div className='How'>
                <div className='intro'>
                    <h2>Streamlining the process of estate planning</h2>
                    <p>
                        Bestated’s Beneficiary API allows financial advisors and estate planning attorneys 
                        to automate the process of informing financial institutions of beneficiary changes in their estate plans or wills. 
                        <br/><br/>
                        Say goodbye to manual updates and streamline your workflow effortlessly. 
                        Take back your administrative staff’s time from endless updates today. 
                        <br/><br/>
                        <span 
                            onClick={() => handlePageNavigation('contact')}
                        >
                            Get in contact with our team! &gt;
                        </span>
                    </p>
                </div>

                <div className='secondary'>
                    <img
                        src={HowIcon}
                        alt='HowIcon'
                    />
                    <div className='steps'>
                        <h3>Here’s how it works:</h3>
                        <p>
                            Often, after a beneficiary is updated, there isn't formal communication with financial institutions 
                            responsible for payable on death (POD) or transferable on death (TOD) execution. 
                            <br/><br/>
                            Traditionally, estate planning attorneys' and financial advisors' administrative staff spend countless hours 
                            on the phone with banks and brokerages. Bestated.ai offers a solution to reclaim this time. 
                            <br/><br/>
                            Our API sends updated beneficiary information directly to the relevant financial institutions, 
                            allowing admin staff to focus on higher-value activities instead of waiting on hold. 
                            <br/><br/>
                            Contact us for a demo at <span>hello@bestated.ai</span>.
                        </p>
                    </div>
                </div>
            </div>

            <div className='CTA'>
                <h1>Ready to join Bestated<br/>and expand your business?</h1> 
                <div className='btn'>
                    <button 
                        className='contact-btn'
                        onClick={() => handlePageNavigation('contact')}
                    >
                        Get in contact
                    </button>
                </div>
            </div>

        </div>
    )
};

export default ForFinancialAdvisors;