import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeroComponent from '../../components/Hero';
import homeHero from '../../assets/images/hero-home.jpg';
import './Home.css';


const Home = () => {

    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <div className='home'>
            <HeroComponent 
                h1Content={'Help your employees avoid the painful probate process.'}
                h4Content={'Bestated is the first employer-sponsored will, power of attorney, and medical directive platform.'}
                heroLogo={homeHero}
                contactBtn={true}
                aboutBtn={true}
            />

            <hr/>

            {isDesktop ? (
                <div className='numbers'>
                    <div className='number'>
                        <h1>67%</h1>
                        <p>of US adults don't have a will</p>
                    </div>
                    <div className='number'>
                        <h1>72%</h1>
                        <p>of minority adults don’t have a will</p>
                    </div>
                    <div className='number'>
                        <h1>80%</h1>
                        <p>of people under 30 don’t have a will</p>
                    </div>
                </div>
            ) : (
                <div className='numbers'>
                    <div className='number'>
                        <span>US ADULTS</span>
                        <h1>67%</h1>
                        <p>don’t have a will</p>
                    </div>
                    <div className='number'>
                        <span>MINORITY</span>
                        <h1>72%</h1>
                        <p>don’t have a will</p>
                    </div>
                    <div className='number'>
                        <span>UNDER 30</span>
                        <h1>80%</h1>
                        <p>don’t have a will</p>
                    </div>

                </div>
            )}


            <hr/>

        </div>
    );
};

export default Home;