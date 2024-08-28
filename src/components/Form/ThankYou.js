import React from 'react';
import footerLinks from '../Footer/FooterLinks';
import LinkedInIcon from '../../assets/icons/LinkedIn.svg';
import InstagramIcon from '../../assets/icons/Instagram.svg';
import TikTokIcon from '../../assets/icons/TikTok.svg';
import FacebookIcon from '../../assets/icons/Facebook.svg';
import './Form.css';


const ThankyouPageComponent = () => {
    return (
        <div className='thank-you'>
            <h3>
                Thanks for submitting a form.
                <br/> 
                Someone from our team will be in contact shortly!
            </h3>

            <p>In the meantime, follow along with us on socials:</p>

            <div className='social-icons'>
                <a
                    href={footerLinks['LinkedIn']['url']} target='_blank' rel='noopener noreferrer'>
                    <img
                        src={LinkedInIcon}
                        alt='LinkedIn'
                    />
                </a>
                <a>
                    <img
                        src={InstagramIcon}
                        alt='Instagram'
                    />
                </a>
                <a>
                    <img
                        src={TikTokIcon}
                        alt='TikTok'
                    />
                </a>
                <a>
                    <img
                        src={FacebookIcon}
                        alt='Facebook'
                    />
                </a>
            </div>

        </div>
    );
};

export default ThankyouPageComponent;
