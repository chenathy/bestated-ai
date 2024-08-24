import React from 'react';
import useIsDesktop from '../../hooks/useIsDesktop';
import HeroComponent from '../../components/Hero';
import HowComponent from '../../components/How';
import CTA from '../../components/CTA';

import financialAdvisorHero from '../../assets/images/financialAdvisors-hero.jpg';
import financialAdvisorHow from '../../assets/images/financialAdvisors-how.jpg';
import './FinancialAdvisors.css';


const ForFinancialAdvisors = () => {

    const isDesktop = useIsDesktop();

    return (
        <div className='financial-advisors'>

            {/* Hero  */}
            <HeroComponent 
                h1Content='Streamline beneficiary updates with our API'
                h4Content='Bestated’s novel beneficiary API does the heavy lifting so you and your administrative staff don’t have to.'
                heroLogo={financialAdvisorHero}
                contactBtn={true}
                aboutBtn={false}
            />

            {! isDesktop ? <hr/> : <></>}

            {/* How */}
            <HowComponent
                introTitle='Streamlining the process of estate planning'
                introText={`Bestated’s Beneficiary API allows financial advisors and estate planning attorneys 
                    to automate the process of informing financial institutions of beneficiary changes in their estate plans or wills. 
                    <br/><br/>
                    Say goodbye to manual updates and streamline your workflow effortlessly. 
                    Take back your administrative staff’s time from endless updates today. `}
                introLinkText='Get in contact with our team! >'
                howLogo={financialAdvisorHow}
                secondaryStepLogo={false}
                secondaryTitle='Here’s how it works:'
                step1Html={<p>Often, after a beneficiary is updated, there isn't formal communication with financial institutions 
                        responsible for payable on death (POD) or transferable on death (TOD) execution.</p>}
                step2Html={<p>Traditionally, estate planning attorneys' and financial advisors' administrative staff spend countless hours 
                        on the phone with banks and brokerages. Bestated.ai offers a solution to reclaim this time. </p>}
                step3Html={<p>Our API sends updated beneficiary information directly to the relevant financial institutions, 
                        allowing admin staff to focus on higher-value activities instead of waiting on hold. </p>}
                step4Html={<p>Contact us for a demo at <span>hello@bestated.ai</span>. </p>}
            />

            {/* CTA */}
            <CTA 
                h1Message={ <h1>Ready to join Bestated<br/>and expand your business?</h1> }
                buttonInfo={{ textDisplay: 'Get in contact', destinationPage: 'contact'}}
            />

        </div>
    );
};

export default ForFinancialAdvisors;