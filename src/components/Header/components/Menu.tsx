import { FC } from 'react';

import { HeaderProps } from '../Header';

import styles from './Menu.module.scss';

import Link from '@/atoms/Link/Link';
import { getPageLabel } from '@/utils/getPageLabel';

export interface MenuProps extends HeaderProps {
    /** Optional classname */
    className?: string;
}

const Menu: FC<MenuProps> = ({ menuItems, className = styles['menu'] }) => {
    const menuContent = menuItems?.map((menuItem) => {
        if (!menuItem.page) {
            return null;
        }

        const menuLabel = getPageLabel(menuItem);

        return (
            <li key={menuItem?.page?.id}>
                <Link
                    key={menuItem?.page?.id}
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/${menuItem?.page?.slug}`}
                    className={styles['menu-link']}
                >
                    {menuLabel}
                </Link>
            </li>
        );
    });

    return <ul className={className}>{menuContent}</ul>;
};

export default Menu;
