import React from 'react';
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
                <img
                    src={LinkedInIcon}
                    alt='LinkedIn'
                />
                <img
                    src={InstagramIcon}
                    alt='Instagram'
                />
                <img
                    src={TikTokIcon}
                    alt='TikTok'
                />
                <img
                    src={FacebookIcon}
                    alt='Facebook'
                />
            </div>

        </div>
    );
};

export default ThankyouPageComponent;
