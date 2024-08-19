import React from "react";
import HeroComponent from "../../components/Hero";
import homeHero from '../../assets/images/hero-home.jpg';


const Home = () => {
    return (
        <div className="home">
            <HeroComponent 
                h1Content={'Help your employees avoid the painful probate process.'}
                h4Content={'Bestated is the first employer-sponsored will, power of attorney, and medical directive platform.'}
                heroLogo={homeHero}
                contactBtn={true}
                aboutBtn={true}
            />
        </div>
    );
};

export default Home;