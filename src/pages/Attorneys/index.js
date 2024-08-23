import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeroComponent from '../../components/Hero';
import HowComponent from '../../components/How';
import InfoBoxes from '../../components/InfoBoxes';
import CTA from '../../components/CTA';

import AttorneysHero from '../../assets/images/attorneys-hero.jpg';
import AttorneysHow from '../../assets/images/attorneys-how.jpg';
import './Attorneys.css';


const ForAttorneys = () => {

    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <div className='attorneys'>
            
            {/* Hero */}
            <HeroComponent 
                h1Content='Let Bestated grow your business and help more clients.'
                h4Content='Join Bestated’s two-sided marketplace to expand your client base. Let us do the hard work of lead generation!'
                heroLogo={AttorneysHero}
                contactBtn={true}
                aboutBtn={false}
            />

            {isDesktop ? <></> : <hr/>}

            {/* How  */}
            <HowComponent 
                introTitle='Streamlining the process of estate planning'
                introText={`Bestated is a paradigm-shifting employee benefit, utilizing generative AI and Large Language Models (LLMs) to efficiently draft estate planning documents such as wills, power of attorney, and medical directives. 
                    By having employers add this to their benefits packages, we aim to make estate planning an easy and accessible process for the 67% of US adults who don’t currently have a will or estate plan. 
                    <br/><br/>
                    While the use of genAI can shorten the traditional process of drafting these legal documents, we still need our attorney partners to review and notarize them. 
                    This is where you come in! Join Bestated today to expand your client base, and stay updated with the latest in AI applications.`
                }
                introLinkText={`Let's get started >`}
                howLogo={AttorneysHow}
                secondaryTitle='Here’s how it works:'
                step1Html={<p>During their onboarding, your employee fills out a Bestated intake form.</p>}
                step2Html={<p>Using this form, our team utilizes state-of-the-art generative AI and Large Language Models (LLMs) 
                       to create drafts of their documents: wills, POAs, and medical directives.</p>}
                step3Html={<p>We then send the documents to a Bestated attorney partner in your employee’s state.</p>}
                step4Html={<p>Our attorney finalizes and notarizes it, Bestated signs off, 
                       and copies are sent out to employees and their beneficiaries.</p>}

            />

            {/* {isDesktop ? <></> : <hr/>} */}
            <hr/>

            {/* Info Boxes */}
            <InfoBoxes 
                label1='OUR MODEL'
                label2='ELIGIBILITY'
                title1='Revenue-share model'
                title2='Who should apply?'
                p1={<p>
                    Bestated keeps things simple. 
                    We partner with our attorneys in a revenue share by which you receive a flat percentage of the fee from each new customer. 
                    Reach out to learn more!
                </p>}
                p2={<p>
                    We are currently active in Texas and Missouri. 
                    <br/><br/>
                    If you are an attorney outside of these states and are interested in helping us expand to your state, please don’t hesitate to reach out!
                </p>}
                learnMore={true}
                contact={false}
            />
            
            {/* CTA  */}
            <CTA 
                h1Message={<h1>Ready to join Bestated<br/>and expand your business?</h1> }
                buttonInfo={{ textDisplay: 'Get in contact', destinationPage: 'contact' }}
            />
            
        </div>
    );
};

export default ForAttorneys;