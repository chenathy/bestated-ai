
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from '../Button';
import logo from '../../assets/icons/logo-navy.svg';
import './Header.css';

const DesktopNavbar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Function to handle clicks outside the dropdown
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    // Attach event listener on mount and clean up on unmount
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Add underline for current session 
    const isActive = (path) => location.pathname === path;
    const isProfessionalActive = 
        location.pathname === '/professional-attorneys' ||
        location.pathname === '/professional-financialAdvisors' ;

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
                <div className='ul'>
                    <ul>
                        <li className={isActive('/employers') ? 'active' : ''}
                        >
                            <Link to='/employers'>For Employers</Link>
                        </li>

                        <li className={`nav-links ${isProfessionalActive ? 'active': ''}`}>
                            <div onClick={() => setDropdownOpen(!dropdownOpen)}>
                                <span>For Professionals</span>
                            </div>
                        </li>

                        <li className={isActive('/about') ? 'active' : ''}
                        >
                            <Link to='/about'>About</Link></li>
                        <li className={isActive('/contact') ? 'active' : ''}
                        >
                            <Button 
                                textDisplay='Get in contact'
                                onClick={() => navigate('/contact')}
                                state='primary'
                            />
                        </li>

                    </ul>
                </div>
            </nav>

            {dropdownOpen && (
                <div className='navbar ul dropdown' ref={dropdownRef}>
                    <li onClick={() => setDropdownOpen(false)}><Link to='/professional-attorneys'><p>For Attorneys &gt;</p></Link></li>
                    <li onClick={() => setDropdownOpen(false)}><Link to='/professional-financialAdvisors'><p>For Financial Advisors &gt;</p></Link></li>
                </div>
            )}

        </div>
    );
};

export default DesktopNavbar;