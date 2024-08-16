import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Hero from './HeroImage.svg';
import Arrow from './noun-arrow.svg';
import Wills from './WillsImage.svg';
import Beneficiary from './BeneficiaryImage.svg'

const HomePage = () => {

    const navigate = useNavigate();
    const handlePageNavigation= (page) => {
        const pagePrefix = `/${page}`
        navigate(pagePrefix);
        window.scrollTo(0, 0);
    }

    return (
        <div className='HomePage'>

            <div className='Hero'>
                <div className='text-btn'>
                    <h1>Help your employees avoid the painful probate process.</h1>
                    <h4>Bestated is the first employer-sponsored will, power of attorney, and medical directive platform.</h4>
                    <div className='btn'>
                        <button 
                            className='contact-btn'
                            onClick={() => handlePageNavigation('contact')}
                        >
                            Get in contact
                        </button>
                        <button 
                            className='about-btn'
                            onClick={() => handlePageNavigation('about')}
                        >
                            About us
                        </button>
                    </div>
                </div>

                <img 
                    src={Hero} 
                    alt='HomeHero'
                />

            </div>

            <hr/>

            <div className='Numbers'>
                <div className='number'>
                    <h1>67%</h1>
                    <p>of US adults don't have a will</p>
                </div>
                <div className='number'>
                    <h1>72%</h1>
                    <p>of minority adults don’t have a will</p>
                </div>
                <div className='number'>
                    <h1>80%</h1>
                    <p>of people under 30 don’t have a will</p>
                </div>

            </div>

            <hr/>

            <div className='Wills'>

                <div className='box box1'>

                    <div className='group'>
                        <label>THE PROBLEM</label>
                        <h2>Wills are complicated, expensive, and grim</h2>
                    </div>

                    <p>
                        Understandably, many avoid creating estate plans, wills, medical directives, and powers of attorney. 
                        <br/><br/>
                        As a result, families are left unprepared if worse comes to worst and there is an unexpected tragedy.
                    </p>

                    <p 
                        id="link-learn-more"
                        onClick={() => handlePageNavigation('employers')}
                    >
                        Learn more &gt;
                    </p>
                    {/* <a href='temp'>Learn more &gt;</a> */}
                </div>

                <div className='box box2'>
                    <div className='group'>
                        <label>OUR SOLUTION</label>
                        <h2>Employer-sponsored estate planning</h2>
                    </div>

                    <p>
                        Parental leave, disability, and life insurance were once novel employee benefits. 
                        We believe employer-sponsored estate planning documents should join them. 
                        <br/><br/>
                        Bestated uses AI, Large Language Models (LLMs), 
                        and attorney partners to reduce costs and increase accessibility for these complex legal needs.
                    </p>
                    {/* <a href='temp'>Learn more &gt;</a> */}
                    <p 
                        id="link-learn-more"
                        onClick={() => handlePageNavigation('employers')}
                    >
                        Learn more &gt;
                    </p>

                </div>

                <img 
                    src={Arrow} 
                    alt='Arrow' 
                    className='box pic'
                />

                <div className='callout-box'>
                    <div className='text-btn'>
                        <div className='group'>
                            <p>BENEFIT TO EMPLOYERS</p>
                            <h2>A unique benefit to attract and retain top talent</h2>
                        </div>
                        <p>Employer-sponsored wills provide your employees and their families with peace of mind, while keeping you competitive in today’s recruitment landscape.</p>
                        <button 
                            className='contact-btn'
                            onClick={() => handlePageNavigation('employers')}
                        >
                            Learn more
                        </button>
                    </div>
                    
                    <img 
                        src={Wills} 
                        alt='HomePageLogo2'
                    />
                </div>
            </div>

            <hr/>

            <div className='API'>
                <div className='image'>
                    <img 
                        src={Beneficiary}
                        alt='Beneficiary'
                    />
                </div>
                <div className='text-btn'>
                    <div className='group'>
                        <label>FINANCIAL ADVISORS AND ESTATE ATTORNEYS</label>
                        <h2>Our Beneficiary API will simplify the process of updating your will.</h2>
                    </div>
                    <p>Stop wasting time updating each and every financial institution every time there’s a change in an estate plan or will. Automate with Bestated!</p>
                    <button 
                        className='about-btn'
                        onClick={() => handlePageNavigation('professional-financialAdvisors')}
                    >Learn more</button>
                </div>
            </div>

            <div className='CTA'>
                <h1>Opt in to accessible, <br/>employer-sponsored wills today!</h1> 
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


export default HomePage;
