'use client';

import FocusTrap from 'focus-trap-react';
import { FC, useEffect, useState } from 'react';

import DesktopNav from './components/DesktopNav';
import MenuToggle from './components/MenuToggle';
import MobileNav from './components/MobileNav';
import styles from './Header.module.scss';

import { Nav, Nav_MenuItems } from '@/api/graphqlTypes';
// import Logo from '@/assets/svg/Logo.svg';
// import Image from '@/atoms/Image/Image';
// import Link from '@/atoms/Link/Link';
import Flex from '@/molecules/Flex/Flex';
import Section from '@/molecules/Section/Section';
import useStore from '@/store/useStore';
import { laptopQuery, useMediaQuery } from '@/utils/hooks/useMediaQuery';

export interface HeaderProps {
    /* Nav to pass into header */
    nav?: Nav | null;
    /* Menu items to display */
    menuItems?: Nav_MenuItems[] | null;
}
const Header: FC<HeaderProps> = ({ nav }) => {
    const isLaptop = useMediaQuery(laptopQuery);

    const { menuOpen, setMenuOpen } = useStore();
    const [headerEl, setHeaderEl] = useState<HTMLElement | null>(null);
    useEffect(() => {
        setHeaderEl(
            document.querySelector(`.${styles['header']}`) as HTMLElement
        );
    }, []);

    useEffect(() => {
        if (isLaptop) {
            setMenuOpen(false);
        }
    }, [isLaptop]);

    return (
        <>
            <FocusTrap
                active={menuOpen}
                containerElements={headerEl ? [headerEl] : []}
            />
            <Section as='header' className={styles['header']}>
                {/* <Link
                    href={process.env.NEXT_PUBLIC_BASE_URL as string}
                    className={styles['logo']}
                >
                    <Image src={Logo} alt='Long Island Laser Tag' priority />
                </Link> */}

                <Flex className={styles['right-content']}>
                    {isLaptop && <DesktopNav menuItems={nav?.menuItems} />}

                    <MenuToggle />
                </Flex>
                {!isLaptop && menuOpen && (
                    <MobileNav menuItems={nav?.menuItems} />
                )}
            </Section>
        </>
    );
};

export default Header;
