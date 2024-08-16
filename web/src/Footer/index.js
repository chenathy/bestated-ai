import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import Logo from './Bestated.ai.svg';
import LinkedIn from './LinkedIn.svg';
import Instagram from './Instagram.svg';
import TikTok from './TikTok.svg';
import Facebook from './Facebook.svg';


const Footer = () => {

    const navigate = useNavigate();
    const handlePageNavigation= (page) => {
        const pagePrefix = `/${page}`
        navigate(pagePrefix);
        window.scrollTo(0, 0);
    }

    return (
        <footer className='footer'>
            <hr/>
            <div className='main'>
                <img
                    src={Logo}
                    alt='Logo'
                    onClick={() => handlePageNavigation('')}
                />

                <div className='menu'>
                    <div>
                        <p onClick={() => handlePageNavigation('employers')}>For Employers</p>
                        <p onClick={() => handlePageNavigation('professional-attorneys')}>For Attorneys</p>
                        <p onClick={() => handlePageNavigation('professional-financialAdvisors')}>For Financial Advisors</p>
                    </div>
                    <div>
                        <p onClick={() => handlePageNavigation('about')}>About</p>
                        <p onClick={() => handlePageNavigation('contact')}>Get in contact</p>
                        <span></span>
                    </div>
                </div>

                <div className='social'>
                    <img
                        src={LinkedIn}
                        alt='LinkedIn'
                    />
                    <img
                        src={Instagram}
                        alt='Instagram'
                    />
                    <img
                        src={TikTok}
                        alt='TikTok'
                    />
                    <img
                        src={Facebook}
                        alt='Facebook'
                    />
                </div>

            </div>

            <div className='copyright'>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Copyright &copy;  Bestated, LLC {new Date().getFullYear()}</p>
            </div>

        </footer>
    )
};

export default Footer;

