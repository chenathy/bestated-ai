import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import HomeMobile from './pages/mobile/HomeMobile';
import AboutMobile from './pages/mobile/AboutMobile';
import HomeDesktop from './pages/desktop/HomeDesktop';
import AboutDesktop from './pages/desktop/AboutDesktop';


const AppRouter = () => {


    return (
        <Router>
            <Routes>
                {isMobile ? (
                    <>
                        <Route path='/' element={<HomeMobile />} />
                        <Route path='/about' element={<AboutMobile /> } />
                    </>
                ) : (
                    <>
                        <Route path='/' element={<HomeDesktop />} /> 
                        <Route path='/about' element={<AboutDesktop />} />
                    </>
                )}
            </Routes>
        </Router>
    );
};

export default AppRouter;
