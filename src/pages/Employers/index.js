import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeroComponent from '../../components/Hero';

import employersHero from '../../assets/images/employers-hero.jpg';
import './Employers.css';


const ForEmployers = () => {
    return (
        <div className='employers'>
            {/* Hero  */}
            <HeroComponent 
                h1Content={'Protect your employees if the worst comes to be.'}
                h4Content={'With Bestated, add employer-sponsored wills to your benefits package.'}
                heroLogo={employersHero}
                contactBtn={true}
                aboutBtn={false}
            />

            

        </div>
    );
};


export default ForEmployers;