import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import Logo from '../../assets/icons/logo-white.svg';
import LinkedIn from '../../assets/icons/LinkedIn.svg';
import Instagram from '../../assets/icons/Instagram.svg';
import TikTok from '../../assets/icons/TikTok.svg';
import Facebook from '../../assets/icons/Facebook.svg';


const MobileFooter = () => {

    const navigate = useNavigate();
    const handlePageNavigation= (page) => {
        const pagePrefix = `/${page}`
        navigate(pagePrefix);
        window.scrollTo(0, 0);
    }

    return (
        <div className='footer'>
            <hr />
            <div className='main'>
                <img 
                    src={Logo}
                    alt='logo'
                    onClick={() => handlePageNavigation('')}
                />
                <div className='menu'>
                    <p onClick={() => handlePageNavigation('employers')}>For Employers</p>
                    <p onClick={() => handlePageNavigation('professional-attorneys')}>For Attorneys</p>
                    <p onClick={() => handlePageNavigation('professional-financialAdvisors')}>For Financial Advisors</p>
                    <p onClick={() => handlePageNavigation('about')}>About</p>
                    <p onClick={() => handlePageNavigation('contact')}>Get in contact</p>
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


        </div>
    )
};

export default MobileFooter;