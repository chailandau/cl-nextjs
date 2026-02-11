import { FC } from 'react';

import DesktopFooter from './components/DesktopFooter';
import MobileFooter from './components/MobileFooter';
import styles from './Footer.module.scss';

import Section from '@/molecules/Section';
import { NavData, NavMenuItem } from '@/types/content';

export interface FooterProps {
    /* Nav to pass into footer */
    menuItems?: NavMenuItem[] | null;
    /* Footer copyright text */
    copyrightText?: NavData['footerCopyrightText'];
}
const Footer: FC<FooterProps> = ({ menuItems, copyrightText }) => (
    <Section as='footer' className={styles['footer']}>
        <MobileFooter menuItems={menuItems} copyrightText={copyrightText} />
        <DesktopFooter menuItems={menuItems} copyrightText={copyrightText} />
    </Section>
);

export default Footer;
