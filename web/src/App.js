import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import ForEmployers from './Employers';
import ForAttorneys from './Attorneys';
import ForFinancialAdvisors from './FinancialAdvisor';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import './App.css';

const App = () => {
    return (
        <div className='container'>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/employers' element={<ForEmployers/>} />
                    <Route path='/professional-attorneys' element={<ForAttorneys/>} />
                    <Route path='/professional-financialAdvisors' element={<ForFinancialAdvisors/>} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} /> 
                    <Route path='/besated-org' element={<HomePage/>} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;