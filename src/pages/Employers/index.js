import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeroComponent from '../../components/Hero';
import HowComponent from '../../components/How';
import CalloutBox from '../../components/Callout';
import CTA from '../../components/CTA';

import employersHero from '../../assets/images/employers-hero.jpg';
import employersHow from '../../assets/images/employers-how.jpg';
import employersCallout from '../../assets/images/employers-callout.png';
import AttractIcon from '../../assets/icons/Attract.svg';
import LoyaltyIcon from '../../assets/icons/Loyalty.svg';
import ProductivityIcon from '../../assets/icons/Productivity.svg';
import './Employers.css';


const ForEmployers = () => {

    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <div className='employers'>
            {/* Hero  */}
            <HeroComponent 
                h1Content={'Protect your employees if the worst comes to be.'}
                h4Content={'With Bestated, add employer-sponsored wills to your benefits package.'}
                heroLogo={employersHero}
                contactBtn={true}
                aboutBtn={false}
            />

            {/* Benefits for Employers */}
            {isDesktop ? <></> : <hr/>}
            <div className='benefits-container'>
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
                            src={ProductivityIcon}
                            alt='ProductivityIcon'
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

            {/* How  */}
            <HowComponent 
                introTitle='How employer-sponsored wills work'
                introText='Bestated is a two-sided marketplace utilizing generative AI and Large Language Models (LLMs) to draft estate planning documents 
                    such as wills, power of attorney, and medical directives that then get sent to our attorney partners for final touches and notarization.'
                howLogo={employersHow}
                introLinkText={`Let's get started >`}
                secondaryTitle='Here’s how it works:'
                step1Html={<p>During their onboarding, your employee fills out a Bestated intake form.</p>}
                step2Html={<p>Using this form, our team utilizes state-of-the-art generative AI and Large Language Models (LLMs) 
                        to create drafts of their documents: wills, POAs, and medical directives.</p>}
                step3Html={<p>We then send the documents to a Bestated attorney partner in your employee’s state.</p>}
                step4Html={<p>Our attorney finalizes and notarizes it, Bestated signs off, 
                        and copies are sent out to employees and their beneficiaries.</p>}
            />

            {/* Callout Box  */}
            <CalloutBox 
                label='FOR INDIVIDUALS'           
                title='Not an employer, but interested in employer-sponsored wills?'
                p={<p>'Whether you want to pay for this benefit yourself or have your employer add it, we’re here to help!'</p>}
                logo={employersCallout}
                learnMoreBtn={false}
            />

            {/* CTA  */}
            <CTA 
                h1Message={<h1>Opt in to accessible, <br/>employer-sponsored wills today!</h1>}
                buttonInfo={{textDisplay: 'Get in contact', destinationPage: 'contact'}}
            />
            

        </div>
    );
};


export default ForEmployers;