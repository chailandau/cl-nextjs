import { FC } from 'react';

import DesktopFooter from './components/DesktopFooter';
import MobileFooter from './components/MobileFooter';

import { Nav, Nav_MenuItems } from '@/api/graphqlTypes';
import Section from '@/molecules/Section';

export interface FooterProps {
    /* Nav to pass into footer */
    menuItems?: Nav_MenuItems[] | null;
    /* Footer copyright text */
    copyrightText?: Nav['footerCopyrightText'];
}
const Footer: FC<FooterProps> = ({ menuItems, copyrightText }) => (
    <Section as='footer'>
        <MobileFooter menuItems={menuItems} copyrightText={copyrightText} />
        <DesktopFooter menuItems={menuItems} copyrightText={copyrightText} />
    </Section>
);

export default Footer;
