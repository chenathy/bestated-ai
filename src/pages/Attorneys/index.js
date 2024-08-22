import React from 'react';
import HeroComponent from '../../components/Hero';
import HowComponent from '../../components/How';

import AttorneysHero from '../../assets/images/attorneys-hero.jpg';
import AttorneysHow from '../../assets/images/attorneys-how.jpg';
import './Attorneys.css';


const ForAttorneys = () => {

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

            {/* How  */}
            <HowComponent 
                introTitle='Streamlining the process of estate planning'
                introText={`Bestated is a paradigm-shifting employee benefit, utilizing generative AI and Large Language Models (LLMs) to efficiently draft estate planning documents such as wills, power of attorney, and medical directives. 
                    By having employers add this to their benefits packages, we aim to make estate planning an easy and accessible process for the 67% of US adults who don’t currently have a will or estate plan. 
                    <br/><br/>
                    While the use of genAI can shorten the traditional process of drafting these legal documents, we still need our attorney partners to review and notarize them. 
                    This is where you come in! Join Bestated today to expand your client base, and stay updated with the latest in AI applications.`
                }
                howLogo={AttorneysHow}
                secondaryTitle='Here’s how it works:'
                step1='During their onboarding, your employee fills out a Bestated intake form.'
                step2='Using this form, our team utilizes state-of-the-art generative AI and Large Language Models (LLMs) 
                       to create drafts of their documents: wills, POAs, and medical directives.'  
                step3='We then send the documents to a Bestated attorney partner in your employee’s state.'
                step4='Our attorney finalizes and notarizes it, Bestated signs off, 
                       and copies are sent out to employees and their beneficiaries.'

            />
            
        </div>
    );
};

export default ForAttorneys;