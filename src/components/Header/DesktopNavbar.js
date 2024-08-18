
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';
import logo from '../../assets/icons/logo-navy.svg';
import './Header.css';

const DesktopNavbar = () => {

    const navigate = useNavigate();
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
                <div className='ul'>
                    <ul>
                        <li><Link to='/employers'>For Employers</Link></li>

                        <li className='nav-links'>
                            <div onClick={() => setDropdownOpen(!dropdownOpen)}>
                                <span>For Professionals</span>
                            </div>
                        </li>

                        <li><Link to='/about'>About</Link></li>

                        <li>
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
                <div className='navbar ul dropdown'>
                    <li onClick={() => setDropdownOpen(false)}><Link to='/professional-attorneys'><p>For Attorneys &gt;</p></Link></li>
                    <li onClick={() => setDropdownOpen(false)}><Link to='/professional-financialAdvisors'><p>For Financial Advisors &gt;</p></Link></li>
                </div>
            )}

        </div>
    );
};

export default DesktopNavbar;