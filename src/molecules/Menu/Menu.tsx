'use client';

import { useReducedMotion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';

import styles from './Menu.module.scss';

import Link from '@/atoms/Link';
import { HeaderProps } from '@/components/Header';
import useStore from '@/store/useStore';
import { getPageLabel } from '@/utils/getPageLabel';

export interface MenuProps extends HeaderProps {
    /** Optional classname */
    className?: string;
}

const Menu: FC<MenuProps> = ({
    menuItems,
    className = styles['menu'],
    icon
}) => {
    const { setMenuOpen } = useStore();

    const menuContent = menuItems?.map((menuItem) => {
        if (!menuItem?.page || Object.keys(menuItem?.page).length === 0) {
            return null;
        }

        const menuLabel = getPageLabel(menuItem);

        const pageSlug =
            menuItem?.page?.slug === 'home' ? '' : menuItem?.page?.slug;

        const hasAnchorLink = menuItem?.linkToSection && menuItem?.sectionId;

        const currentPath = usePathname()?.replace('/', '');

        const router = useRouter();

        const prefersReducedMotion = useReducedMotion() || false;

        const anchorScroll = (e: { preventDefault: () => void }) => {
            if (
                currentPath === pageSlug &&
                hasAnchorLink &&
                menuItem?.linkToSection &&
                menuItem?.sectionId
            ) {
                e.preventDefault();
                const anchoredSection = document.getElementById(
                    menuItem?.sectionId
                );
                window.scrollTo({
                    top: anchoredSection?.offsetTop,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });

                setTimeout(() => {
                    router.push(`#${menuItem?.sectionId}`);
                }, 1000);
            }
        };

        const handleClick = (e: { preventDefault: () => void }) => {
            setMenuOpen(false);
            anchorScroll(e);
        };

        return (
            <li key={menuItem?.page?.id}>
                <Link
                    key={menuItem?.page?.id}
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/${pageSlug}`}
                    className={styles['menu-link']}
                    underline={false}
                    icon={icon}
                    onClick={(e) => handleClick(e)}
                    anchorLink={hasAnchorLink ? menuItem?.sectionId : null}
                    ariaLabel={menuLabel || ''}
                >
                    {menuLabel}
                </Link>
            </li>
        );
    });

    return <ul className={className}>{menuContent}</ul>;
};

export default Menu;
