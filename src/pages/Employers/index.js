import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeroComponent from '../../components/Hero';

import employersHero from '../../assets/images/employers-hero.jpg';

import AttractIcon from '../../assets/icons/Attract.svg';
import LoyaltyIcon from '../../assets/icons/Loyalty.svg';
import ProductivityIcon from '../../assets/icons/Productivity.svg';
import './Employers.css';
import { isDesktop } from 'react-device-detect';


const ForEmployers = () => {

    const isDesktop = useMediaQuery({ minWidth: 768 });

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

            {/* Benefits for Employers */}
            {isDesktop ? <></> : <hr/>}
            <div className='benefits-container'>
                <h2>Why consider employer-sponsored wills?</h2>

                <div className='benefits'>

                    <div className='benefit'>
                        <img
                            src={AttractIcon}
                            alt='AttractIcon'
                        />
                        <div className='text'>
                            <h4>Attract top talent</h4>
                            <p>
                                Leading companies must stay on the cutting edge of the benefits landscape. 
                                Expand your reputation as a forward-thinking employer to attract and retain the highest-quality candidates.
                            </p>
                        </div>
                    </div>

                    <div className='benefit'>
                        <img
                            src={LoyaltyIcon}
                            alt='LoyaltyIcon'
                        />
                        <div className='text'>
                            <h4>Employee loyalty</h4>
                            <p>
                                Demonstrate your company’s commitment to supporting your employees and their families, and increase retention rates. 
                                This reduces the high cost of employee turnover.
                            </p>
                        </div>
                    </div >

                    <div className='benefit'>
                        <img
                            src={ProductivityIcon}
                            alt='ProductivityIcon'
                        />
                        <div className='text'>
                            <h4>Enhanced productivity</h4>
                            <p>
                                People who are less stressed in their personal lives can be more present when at work. 
                                Boost productivity by adding to your employees’ sense of work-life balance.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            

        </div>
    );
};


export default ForEmployers;