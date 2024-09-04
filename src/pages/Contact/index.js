import React, { useState } from 'react';
import HeroComponent from '../../components/Hero';
import FormComponent from '../../components/Form';
import ThankyouPageComponent from '../../components/Form/ThankYou';

// import ContactHero from '../../assets/images/contact-hero.jpg';
import ContactHero from '../../assets/ai/contact-hero.jpg';
import './Contact.css';


const Contact = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const handleFormSubmitted = (submittedSuccess) => {
        setFormSubmitted(submittedSuccess);

        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <div className='contact'>

            {! formSubmitted ? (
                <>
                    {/* Hero  */}
                    <HeroComponent 
                        h1Content='Get in contact!'
                        pHtml={<p>Tell us a little bit about yourself and who you are. 
                            A member of our team will be in contact with you shortly! 
                            If you’d like to reach us directly, you can do so at <span>hello@bestated.ai</span>.
                        </p>}
                        heroLogo={ContactHero}
                        contactBtn={false}
                        aboutBtn={false}
                        contactScroll={true}
                    />
                        
                    {/* From  */}
                    <FormComponent 
                        onFormComplete={handleFormSubmitted}
                    />
                </>
            ) : ( 
                <>
                    {/* Thank You Page */}
                    <ThankyouPageComponent />
                </>
            )}
            
        </div>
    );
};

export default Contact;