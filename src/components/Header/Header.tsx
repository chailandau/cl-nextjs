'use client';

import FocusTrap from 'focus-trap-react';
import { FC, useEffect } from 'react';

import { Nav_MenuItems } from '@/api/graphqlTypes';
import Logo from '@/assets/svg/Logo.svg';
import Image from '@/atoms/Image';
import Link from '@/atoms/Link';
import { DesktopNav, MobileNav } from '@/components/Header/Nav';
import Flex from '@/molecules/Flex';
import { MenuToggle } from '@/molecules/Menu';
import Section from '@/molecules/Section';
import useStore from '@/store/useStore';
import { tabletLgQuery, useMediaQuery } from '@/utils/hooks/useMediaQuery';

// eslint-disable-next-line import/order
import styles from './Header.module.scss';

export interface HeaderProps {
    /* Nav to pass into header */
    menuItems?: Nav_MenuItems[] | null;
    /* Enables icon */
    icon?: boolean;
}
const Header: FC<HeaderProps> = ({ menuItems }) => {
    const isTabletLg = useMediaQuery(tabletLgQuery);

    const { menuOpen, setMenuOpen } = useStore();

    useEffect(() => {
        if (isTabletLg) {
            setMenuOpen(false);
        }
    }, [isTabletLg]);

    return (
        <FocusTrap active={menuOpen}>
            <Section as='header' className={styles['header']}>
                <Link
                    href={process.env.NEXT_PUBLIC_BASE_URL as string}
                    className={styles['logo']}
                    underline={false}
                    icon={false}
                >
                    <Image src={Logo} alt='C.' priority hasBorder={false} />
                </Link>

                <Flex className={styles['nav']}>
                    {isTabletLg && <DesktopNav menuItems={menuItems} />}

                    <MenuToggle />
                </Flex>
                {!isTabletLg && menuOpen && <MobileNav menuItems={menuItems} />}
            </Section>
        </FocusTrap>
    );
};

export default Header;
