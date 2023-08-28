import { FC } from 'react';

import styles from './Menu.module.scss';

import Link from '@/atoms/Link';
import { HeaderProps } from '@/components/Header';
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
    const menuContent = menuItems?.map((menuItem) => {
        if (!menuItem?.page || Object.keys(menuItem?.page).length === 0) {
            return null;
        }

        const menuLabel = getPageLabel(menuItem);

        return (
            <li key={menuItem?.page?.id}>
                <Link
                    key={menuItem?.page?.id}
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/${menuItem?.page?.slug}`}
                    className={styles['menu-link']}
                    underline={false}
                    icon={icon}
                >
                    {menuLabel}
                </Link>
            </li>
        );
    });

    return <ul className={className}>{menuContent}</ul>;
};

export default Menu;
