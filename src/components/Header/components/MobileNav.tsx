import { m } from 'framer-motion';
import { FC } from 'react';

import { HeaderProps } from '../Header';

import Menu from './Menu';
import styles from './MobileNav.module.scss';

import useStore from '@/store/useStore';
import { menuAnimations } from '@/utils/framer/animations';
import LazyAnimatePresence from '@/utils/framer/LazyAnimatePresence';

const MobileNav: FC<HeaderProps> = ({ menuItems }) => {
    const { menuOpen } = useStore();

    return (
        <LazyAnimatePresence>
            <m.nav
                className={styles['mobile-nav']}
                variants={menuAnimations}
                animate={menuOpen ? 'open' : 'closed'}
                initial='closed'
                exit='closed'
            >
                <Menu menuItems={menuItems} />
            </m.nav>
        </LazyAnimatePresence>
    );
};

export default MobileNav;
