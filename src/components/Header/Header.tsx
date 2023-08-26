'use client';

import FocusTrap from 'focus-trap-react';
import { FC, useEffect } from 'react';

import styles from './Header.module.scss';

import { Nav_MenuItems } from '@/api/graphqlTypes';
import Logo from '@/assets/svg/Logo.svg';
import Image from '@/atoms/Image';
import Link from '@/atoms/Link';
import { DesktopNav, MobileNav } from '@/components/Nav';
import Flex from '@/molecules/Flex';
import { MenuToggle } from '@/molecules/Menu';
import Section from '@/molecules/Section';
import useStore from '@/store/useStore';
import { laptopQuery, useMediaQuery } from '@/utils/hooks/useMediaQuery';

export interface HeaderProps {
    /* Nav to pass into header */
    menuItems?: Nav_MenuItems[] | null;
}
const Header: FC<HeaderProps> = ({ menuItems }) => {
    const isLaptop = useMediaQuery(laptopQuery);

    const { menuOpen, setMenuOpen } = useStore();

    useEffect(() => {
        if (isLaptop) {
            setMenuOpen(false);
        }
    }, [isLaptop]);

    return (
        <FocusTrap active={menuOpen}>
            <Section as='header' className={styles['header']}>
                <Link
                    href={process.env.NEXT_PUBLIC_BASE_URL as string}
                    className={styles['logo']}
                    underline={false}
                >
                    <Image src={Logo} alt='C.' priority hasBorder={false} />
                </Link>

                <Flex className={styles['right-content']}>
                    {isLaptop && <DesktopNav menuItems={menuItems} />}

                    <MenuToggle />
                </Flex>
                {!isLaptop && menuOpen && <MobileNav menuItems={menuItems} />}
            </Section>
        </FocusTrap>
    );
};

export default Header;
