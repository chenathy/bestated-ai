import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeroComponent from '../../components/Hero';
import FormComponent from '../../components/Form';

import ContactHero from '../../assets/images/contact-hero.jpg';
import './Contact.css';


const Contact = () => {

    const handleContactClick = () => {
        const ref = document.getElementsByClassName('form-container')
        if (ref.length > 0) {
            ref[0].scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className='contact'>

            {/* Hero */}
            <HeroComponent 
                h1Content='Get in contact!'
                pHtml={<p>Tell us a little bit about yourself and who you are. 
                    A member of our team will be in contact with you shortly! 
                    If you’d like to reach us directly, you can do so at <span>hello@bestated.ai</span>.
                </p>}
                heroLogo={ContactHero}
            />

            {/* Form  */}
            <FormComponent />

        </div>
    );
};

export default Contact;