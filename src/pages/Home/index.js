import React from 'react';
import useIsDesktop from '../../hooks/useIsDesktop';
import HeroComponent from '../../components/Hero';
import InfoBoxes from '../../components/InfoBoxes';
import CalloutBox from '../../components/Callout';
import TextAndBtn from '../../components/Text-and-Btn';
import CTAComponent from '../../components/CTA';

import homeHero from '../../assets/images/home-hero.jpg';
import homeCallout from '../../assets/images/home-callout.jpg';
import homeBenefitAPI from '../../assets/images/home-api.jpg'; 
import './Home.css';


const Home = () => {

    const isDesktop = useIsDesktop();

    return (
        <div className='home'>

            {/* Hero */}
            <HeroComponent 
                h1Content={'Help your employees avoid the painful probate process.'}
                h4Content={'Bestated is the first employer-sponsored will, power of attorney, and medical directive platform.'}
                heroLogo={homeHero}
                contactBtn={true}
                aboutBtn={true}
            />

            <hr/>

            {/* Numbers  */}
            {isDesktop ? (
                <div className='numbers'>
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
            ) : (
                <div className='numbers'>
                    <div className='number'>
                        <span>US ADULTS</span>
                        <h1>67%</h1>
                        <p>don’t have a will</p>
                    </div>
                    <div className='number'>
                        <span>MINORITY</span>
                        <h1>72%</h1>
                        <p>don’t have a will</p>
                    </div>
                    <div className='number'>
                        <span>UNDER 30</span>
                        <h1>80%</h1>
                        <p>don’t have a will</p>
                    </div>

                </div>
            )}


            <hr/>

            {/* Info Boxes  */}
            <InfoBoxes 
                label1={'THE PROBLEM'}
                title1={'Wills are complicated, expensive, and grim'}
                p1={
                    <p>
                        Understandably, many avoid creating estate plans, wills, medical directives, and powers of attorney.
                        <br/><br/>
                        As a result, families are left unprepared if worse comes to worst and there is an unexpected tragedy.
                    </p>
                }
                label2={'OUR SOLUTION'}
                title2={'Employer-sponsored estate planning'}
                p2={
                    <p>
                        Parental leave, disability, and life insurance were once novel employee benefits. We believe employer-sponsored estate planning documents should join them.
                        <br/><br/>
                        Bestated uses AI, Large Language Models (LLMs), and attorney partners to reduce costs and increase accessibility for these complex legal needs.
                    </p>
                }
                contact={false}
            />


            {/* Callout Box  */}
            <CalloutBox 
                label='BENEFIT TO EMPLOYERS'
                title='A unique benefit to attract and retain top talent'
                p={<p>Employer-sponsored wills provide your employees and their families with peace of mind, while keeping you competitive in today’s recruitment landscape.</p>}
                logo={homeCallout}
                contactBtn={false}
            />

            {isDesktop ? (<hr/>) : (<></>)}

            {/* Beneficiary API  */}
            <div className='beneficiary-api'>
                <div className='img-container'>
                    <img 
                        src={homeBenefitAPI}
                        alt='home-benefit-api'
                    />
                </div>
                <TextAndBtn 
                    labelHtml={<label style={{color: `var(--berry)`}}>FINANCIAL ADVISORS AND ESTATE ATTORNEYS</label>}
                    titleHtml={<h2 style={{color: `var(--navy)`}}>Our Beneficiary API will simplify the process of updating your will.</h2>}
                    passageHtml={<p style={{color: `var(--navy)`}}>Stop wasting time updating each and every financial institution every time there’s a change in an estate plan or will. Automate with Bestated!</p>}
                    buttons={[ {textDisplay: 'Learn more', onClickDestination: 'employers', state: 'secondary'} ]}
                />
            </div>
            

            {/* CTA  */}
            <CTAComponent 
                h1Message={<h1>Opt in to accessible, <br/>employer-sponsored wills today!</h1>}
                buttonInfo={{textDisplay: 'Get in contact', destinationPage: 'contact'}}
            />
            

        </div>
    );
};

export default Home;