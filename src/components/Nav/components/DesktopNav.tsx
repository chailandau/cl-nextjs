import { FC } from 'react';

import { NavProps } from '..';

/**
 * Flex (and its styles) must be imported before
 * current styles for proper Storybook rendering
 */
// eslint-disable-next-line import/order
import styles from './DesktopNav.module.scss';
import Flex from '@/molecules/Flex';
import { Menu } from '@/molecules/Menu';
import LazyMotionDom from '@/utils/framer/LazyMotionDom';

const DesktopNav: FC<NavProps> = ({ menuItems }) => (
    <LazyMotionDom>
        <Flex as='nav' className={styles['desktop-nav']}>
            <Menu underline={false} menuItems={menuItems} />
        </Flex>
    </LazyMotionDom>
);

export default DesktopNav;
