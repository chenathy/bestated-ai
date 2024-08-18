import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import HamburgerIcon from './HamburgerMenu';
import logo from '../../assets/icons/logo-navy.svg';
import './Header.css';


const MobileNavbar = () => {


    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <Link to = '/'>
                    <img 
                        src={logo} 
                        alt='BestatedLogo' 
                        className='logo' 
                    />
                </Link>
                <div 
                    className='hamburger'
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
                {dropdownOpen && (
                    <div className='dropdown'>
                        <ul>
                            <li onClick={() => setDropdownOpen(false)}><Link to='/employers'>Employers</Link></li>
                            <li onClick={() => setDropdownOpen(false)}><Link to='/professional-attorneys'>Attorneys</Link></li>
                            <li onClick={() => setDropdownOpen(false)}><Link to='/professional-financialAdvisors'>Financial Advisors</Link></li>
                        </ul>
                    </div>
                )}
            </nav>

        </div>
    );
};

export default MobileNavbar;