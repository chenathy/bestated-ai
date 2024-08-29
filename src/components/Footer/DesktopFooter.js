import React from 'react';
import usePageNavigation from '../../hooks/usePageNavigation';
import socialLinks from './SocialLinks';
import './Footer.css';
import Logo from '../../assets/icons/logo-white.svg';
import LinkedIn from '../../assets/icons/LinkedIn.svg';
import Instagram from '../../assets/icons/Instagram.svg';
import TikTok from '../../assets/icons/TikTok.svg';
import Facebook from '../../assets/icons/Facebook.svg';


const DesktopFooter = () => {

    const handlePageNavigation= usePageNavigation();

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
                    <a 
                        href={socialLinks['LinkedIn']['url']} target='_blank' rel='noopener noreferrer'>
                        <img
                            src={LinkedIn}
                            alt='LinkedIn'
                        />
                    </a>

                    <a>
                        <img
                            src={Instagram}
                            alt='Instagram'
                        />
                    </a>

                    <a>
                        <img
                            src={TikTok}
                            alt='TikTok'
                        />
                    </a>
                    
                    <a>
                        <img
                            src={Facebook}
                            alt='Facebook'
                        />
                    </a>
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

export default DesktopFooter;
