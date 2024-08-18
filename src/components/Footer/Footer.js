import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';


const Footer = () => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    return isDesktop ? <DesktopFooter /> : <MobileFooter />
};

export default Footer;