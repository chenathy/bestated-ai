import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/global.css';
import Home from './pages/Home';


const App = () => {


    return (
        <div className='container'>
            <Router>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/employers' element={<ForEmployers/>} />
                    <Route path='/professional-attorneys' element={<ForAttorneys/>} />
                    <Route path='/professional-financialAdvisors' element={<ForFinancialAdvisors/>} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />  */}
                    <Route path='/besated-ai' element={<Home />} />
                </Routes>

                <Footer />

            </Router>
        </div>
    );
};

export default App;