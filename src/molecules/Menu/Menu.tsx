import { FC } from 'react';

import styles from './Menu.module.scss';

import Link from '@/atoms/Link';
import { NavProps } from '@/components/Nav';
import { getPageLabel } from '@/utils/getPageLabel';

export interface MenuProps extends NavProps {
    /** Optional classname */
    className?: string;
    /** Enables underline */
    underline?: boolean;
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
                    underline={false}
                >
                    {menuLabel}
                </Link>
            </li>
        );
    });

    return <ul className={className}>{menuContent}</ul>;
};

export default Menu;
