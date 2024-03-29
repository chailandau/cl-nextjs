'use client';

import classNames from 'classnames';
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
import { setNoScroll } from '@/utils/setNoScroll';

export interface HeaderProps {
    /* Nav to pass into header */
    menuItems?: Nav_MenuItems[] | null;
    /* Enables icon */
    icon?: boolean;
}
const Header: FC<HeaderProps> = ({ menuItems }) => {
    const isTabletLg = useMediaQuery(tabletLgQuery);

    const { menuOpen, setMenuOpen } = useStore();

    const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

    useEffect(() => {
        setNoScroll(menuOpen);
    }, [menuOpen]);

    useEffect(() => {
        if (isTabletLg) {
            setMenuOpen(false);
        }
    }, [isTabletLg]);

    const classList = classNames(
        styles['header'],
        menuOpen && styles['menu-open']
    );

    return (
        <FocusTrap active={menuOpen}>
            <Section as='header' className={classList}>
                <Flex className={styles['header__content']}>
                    <Link
                        href={process.env.NEXT_PUBLIC_BASE_URL as string}
                        className={styles['logo']}
                        underline={false}
                        icon={false}
                    >
                        <Image
                            className={styles['logo-image']}
                            src={Logo}
                            alt='C.'
                            priority
                            hasBorder={false}
                        />
                    </Link>

                    <Flex className={styles['nav']}>
                        {isTabletLg && <DesktopNav menuItems={menuItems} />}

                        <MenuToggle />
                    </Flex>
                    {!isTabletLg && menuOpen && (
                        <MobileNav
                            ariaHidden={!menuOpen}
                            menuItems={menuItems}
                        />
                    )}
                </Flex>
            </Section>
        </FocusTrap>
    );
};

export default Header;
