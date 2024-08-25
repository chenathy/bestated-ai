import React from 'react';
import useIsDesktop from '../../hooks/useIsDesktop';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';


const Footer = () => {
    const isDesktop = useIsDesktop();
    return isDesktop ? <DesktopFooter /> : <MobileFooter />
};

export default Footer;