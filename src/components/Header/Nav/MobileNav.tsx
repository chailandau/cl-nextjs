import classNames from 'classnames';
import { m, useReducedMotion } from 'framer-motion';
import { FC } from 'react';

import styles from './MobileNav.module.scss';

import { HeaderProps } from '@/components/Header';
import { Menu } from '@/molecules/Menu';
import useStore from '@/store/useStore';
import { menuAnimations } from '@/utils/framer/animations';
import LazyAnimatePresence from '@/utils/framer/LazyAnimatePresence';

interface MobileNavProps extends HeaderProps {
    ariaHidden: boolean;
}

const MobileNav: FC<MobileNavProps> = ({ menuItems, ariaHidden }) => {
    const prefersReducedMotion = useReducedMotion() || false;

    const { menuOpen } = useStore();

    const classList = classNames(
        styles['mobile-nav'],
        menuOpen && styles['open']
    );

    return (
        <LazyAnimatePresence>
            <m.nav
                className={classList}
                variants={menuAnimations(prefersReducedMotion)}
                animate={menuOpen ? 'open' : 'closed'}
                initial='closed'
                exit='closed'
                aria-hidden={ariaHidden}
            >
                <Menu menuItems={menuItems} />
            </m.nav>
        </LazyAnimatePresence>
    );
};

export default MobileNav;
