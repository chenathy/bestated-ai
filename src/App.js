import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import Header from './components/Header/Header';
// import HomeMobile from './pages/mobile/HomeMobile';
// import AboutMobile from './pages/mobile/AboutMobile';
// import HomeDesktop from './pages/desktop/HomeDesktop';
// import AboutDesktop from './pages/desktop/AboutDesktop';


const App = () => {


    return (
        <div className='container'>
            <Router>
                <Header />

                {/* <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/employers' element={<ForEmployers/>} />
                    <Route path='/professional-attorneys' element={<ForAttorneys/>} />
                    <Route path='/professional-financialAdvisors' element={<ForFinancialAdvisors/>} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} /> 
                    <Route path='/besated-org' element={<HomePage/>} />
                </Routes> */}

                {/* <Footer /> */}

            </Router>
        </div>
    );
};

export default App;