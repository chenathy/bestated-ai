import React from 'react';
import useIsDesktop from '../../hooks/useIsDesktop';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Header = () => {
    const isDesktop = useIsDesktop();
    return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
};

export default Header;