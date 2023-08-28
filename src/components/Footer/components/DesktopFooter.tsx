import { FC } from 'react';

import { FooterProps } from '../Footer';

import styles from './DesktopFooter.module.scss';

import Text from '@/atoms/Text';
import Flex from '@/molecules/Flex';
import { Menu } from '@/molecules/Menu';
import { getCopyrightText } from '@/utils/getCopyrightText';

const DesktopFooter: FC<FooterProps> = ({ menuItems, copyrightText }) => (
    <Flex className={styles['desktop-footer']}>
        <Flex className={styles['copyright']}>
            <Text size='xs'>{getCopyrightText(copyrightText)}</Text>
        </Flex>
        <Flex className={styles['nav']}>
            <Menu menuItems={menuItems} icon={false} />
        </Flex>
    </Flex>
);

export default DesktopFooter;
