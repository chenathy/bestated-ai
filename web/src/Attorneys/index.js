import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Attorneys.css';
import Hero from './Hero.png';
import HowIcon from './HowIcon.png';
import Group1 from './Group1.svg';
import Group2 from './Group2.svg';
import Group3 from './Group3.svg';
import Group4 from './Group4.svg';


const ForAttorneys = () => {

    const navigate = useNavigate();
    const handlePageNavigation= (page) => {
        const pagePrefix = `/${page}`
        navigate(pagePrefix);
        window.scrollTo(0, 0);
    }

    return (
        <div className='Attorneys'>

            <div className='Hero'>
                <div className='text-btn'>
                    <h1>Let Bestated grow your business and help more clients.</h1>
                    <h4>Join Bestated’s two-sided marketplace to expand your client base. Let us do the hard work of lead generation!</h4>
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

            <div className='How'>
                <div className='intro'>
                        <h2>Streamlining the process of estate planning</h2>
                        <p>
                            Bestated is a paradigm-shifting employee benefit, utilizing generative AI and Large Language Models (LLMs) to efficiently draft estate planning documents such as wills, power of attorney, and medical directives. 
                            By having employers add this to their benefits packages, we aim to make estate planning an easy and accessible process for the 67% of US adults who don’t currently have a will or estate plan. 
                            <br/><br/>
                            While the use of genAI can shorten the traditional process of drafting these legal documents, we still need our attorney partners to review and notarize them. 
                            This is where you come in! Join Bestated today to expand your client base, and stay updated with the latest in AI applications.
                            <br/><br/>
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

            <div className='Info'>
                
                <div className='box box1'>

                    <div className='group'>
                        <label>OUR MODEL</label>
                        <h2>Revenue-share model</h2>
                    </div>

                    <p>
                        Bestated keeps things simple. 
                        We partner with our attorneys in a revenue share by which you receive a flat percentage of the fee from each new customer. 
                        Reach out to learn more!
                    </p>

                    <p 
                        id='link-contact'
                        onClick={() => handlePageNavigation('contact')}
                    >
                        Get in contact &gt;
                    </p>
                    {/* <a href='temp'>Learn more &gt;</a> */}
                </div>

                <div className='box box2'>
                    <div className='group'>
                        <label>ELIGIBILITY</label>
                        <h2>Who should apply?</h2>
                    </div>

                    <p>
                        We are currently active in Texas and Missouri. 
                        <br/><br/>
                        If you are an attorney outside of these states and are interested in helping us expand to your state, please don’t hesitate to reach out!
                    </p>
                    {/* <a href='temp'>Learn more &gt;</a> */}
                    <p 
                        id='link-contact'
                        onClick={() => handlePageNavigation('contact')}
                    >
                        Get in contact &gt;
                    </p>

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

export default ForAttorneys;