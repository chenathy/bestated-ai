import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Header = () => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
};

export default Header;