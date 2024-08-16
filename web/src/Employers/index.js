import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Employers.css';
import Hero from './HeroImage.svg';
import AttractIcon from './Icon_Attract.svg';
import LoyaltyIcon from './Icon_Loyalty.svg';
import Productivity from './Icon_Productivity.svg';
import HowIcon from './HowIcon.png';
import Group1 from './Group1.svg';
import Group2 from './Group2.svg';
import Group3 from './Group3.svg';
import Group4 from './Group4.svg';
import CalloutIcon from './CalloutIcon.png';


const ForEmployers = () => {

    const navigate = useNavigate();
    const handlePageNavigation= (page) => {
        const pagePrefix = `/${page}`
        navigate(pagePrefix);
        window.scrollTo(0, 0);
    }

    return(
        <div className='Employers'>
            <div className='Hero'>
                <div className='text-btn'>
                    <h1>Protect your employees if the worst comes to be.</h1>
                    <h4>With Bestated, add employer-sponsored wills to your benefits package.</h4>
                    <div className='btn'>
                        <button 
                            className='contact-btn'
                            onClick={() => handlePageNavigation('contact')}
                        >Get in contact
                        </button>
                    </div>
                </div>

                <img 
                    src={Hero} 
                    alt='EmployerHero'
                />
            </div>

            <div className='Benefits'>
                <h2>Why consider employer-sponsored wills?</h2>

                <div className='benefits'>
                    <div className='benefit'>
                        <img
                            src={AttractIcon}
                            alt='AttractIcon'
                        />
                        <div className='text'>
                            <h4>Attract top talent</h4>
                            <p>
                                Leading companies must stay on the cutting edge of the benefits landscape. 
                                Expand your reputation as a forward-thinking employer to attract and retain the highest-quality candidates.
                            </p>
                        </div>
                    </div>

                    <div className='benefit'>
                        <img
                            src={LoyaltyIcon}
                            alt='LoyaltyIcon'
                        />
                        <div className='text'>
                            <h4>Employee loyalty</h4>
                            <p>
                                Demonstrate your company’s commitment to supporting your employees and their families, and increase retention rates. 
                                This reduces the high cost of employee turnover.
                            </p>
                        </div>
                    </div >

                    <div className='benefit'>
                        <img
                            src={Productivity}
                            alt='Productivity'
                        />
                        <div className='text'>
                            <h4>Enhanced productivity</h4>
                            <p>
                                People who are less stressed in their personal lives can be more present when at work. 
                                Boost productivity by adding to your employees’ sense of work-life balance.
                            </p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>

            <hr/>

            <div className='How'>
                <div className='intro'>
                    <h2>How employer-sponsored wills work</h2>
                    <p>
                        Bestated is a two-sided marketplace utilizing generative AI and Large Language Models (LLMs) to draft estate planning documents 
                        such as wills, power of attorney, and medical directives that then get sent to our attorney partners for final touches and notarization. 
                        <br/> <br/>
                        <span 
                            onClick={() => handlePageNavigation('contact')}
                        >Let’s get started &gt;
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
                        <div className='step'>
                            <img
                                src={Group1}
                                alt='Group1'
                            />
                            <p>During their onboarding, your employee fills out a Bestated intake form.</p>
                        </div>
                        <div className='step'>
                            <img
                                src={Group2}
                                alt='Group2'
                            />
                            <p>
                                Using this form, our team utilizes state-of-the-art generative AI and Large Language Models (LLMs) 
                                to create drafts of their documents: wills, POAs, and medical directives.
                            </p>
                        </div>
                        <div className='step'>
                            <img
                                src={Group3}
                                alt='Group3'
                            />
                            <p>We then send the documents to a Bestated attorney partner in your employee’s state.</p>
                        </div>
                        <div className='step'>
                            <img
                                src={Group4}
                                alt='Group4'
                            />
                            <p>
                                Our attorney finalizes and notarizes it, Bestated signs off, 
                                and copies are sent out to employees and their beneficiaries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='callout-box'>
                <div className='text-btn'>
                    <div className='group'>
                        <p>FOR INDIVIDUALS</p>
                        <h2>Not an employer, but interested in employer-sponsored wills?</h2>
                    </div>
                    <p>Whether you want to pay for this benefit yourself or have your employer add it, we’re here to help!</p>
                    <button 
                        className='contact-btn'
                        onClick={() => handlePageNavigation('contact')}
                    >Reach out
                    </button>
                </div>
                
                <img 
                    src={CalloutIcon} 
                    alt='CalloutIcon'
                />
            </div>

            <div className='CTA'>
                <h1>Opt in to accessible, <br/>employer-sponsored wills today!</h1> 
                <div className='btn'>
                    <button 
                        className='contact-btn'
                        onClick={() => handlePageNavigation('contact')}
                    >Get in contact
                    </button>
                </div>
            </div>
        </div>
        
    )
};

export default ForEmployers;