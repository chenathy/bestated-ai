import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/global.css';
import Home from './pages/Home';
import ForEmployers from './pages/Employers';
import ForAttorneys from './pages/Attorneys';
import ForFinancialAdvisors from './pages/FinancialAdvisors';
import About from './pages/About';
import Contact from './pages/Contact';


const App = () => {


    return (
        <div className='container'>
            <Router>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/employers' element={<ForEmployers />} />
                    <Route path='/professional-attorneys' element={<ForAttorneys />} />
                    <Route path='/professional-financialAdvisors' element={<ForFinancialAdvisors />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} /> 
                    <Route path='/bestated-ai' element={<Home />} />
                </Routes>

                <Footer />

            </Router>
        </div>
    );
};

export default App;