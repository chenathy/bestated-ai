import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeroComponent from '../../components/Hero';

import employersHero from '../../assets/icons/employers-hero.jpg';
import './Employers.css';


const ForEmployers = () => {
    return (
        <div className='employers'>
            {/* Hero  */}
            <HeroComponent 
                h1Content={'Help your employees avoid the painful probate process.'}
                h4Content={'Bestated is the first employer-sponsored will, power of attorney, and medical directive platform.'}
                heroLogo={homeHero}
                contactBtn={true}
                aboutBtn={false}
            />

        </div>
    );
};


export default ForEmployers;