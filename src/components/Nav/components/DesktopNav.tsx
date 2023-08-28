import { FC } from 'react';

/**
 * Flex (and its styles) must be imported before
 * current styles for proper Storybook rendering
 */
// eslint-disable-next-line import/order
import styles from './DesktopNav.module.scss';
import { HeaderProps } from '@/components/Header';
import Flex from '@/molecules/Flex';
import { Menu } from '@/molecules/Menu';
import LazyMotionDom from '@/utils/framer/LazyMotionDom';

const DesktopNav: FC<HeaderProps> = ({ menuItems }) => (
    <LazyMotionDom>
        <Flex as='nav' className={styles['desktop-nav']}>
            <Menu menuItems={menuItems} icon={false} />
        </Flex>
    </LazyMotionDom>
);

export default DesktopNav;
