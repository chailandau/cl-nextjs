'use client';

import FocusTrap from 'focus-trap-react';
import { FC, useEffect } from 'react';

import styles from './Header.module.scss';

import { Nav } from '@/api/graphqlTypes';
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
    nav?: Nav | null;
}
const Header: FC<HeaderProps> = ({ nav }) => {
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
                    <Image src={Logo} alt='Long Island Laser Tag' priority />
                </Link>

                <Flex className={styles['right-content']}>
                    {isLaptop && <DesktopNav menuItems={nav?.menuItems} />}

                    <MenuToggle />
                </Flex>
                {!isLaptop && menuOpen && (
                    <MobileNav menuItems={nav?.menuItems} />
                )}
            </Section>
        </FocusTrap>
    );
};

export default Header;
