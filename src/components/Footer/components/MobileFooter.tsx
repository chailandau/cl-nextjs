import { FC } from 'react';

import { FooterProps } from '../Footer';

import styles from './MobileFooter.module.scss';

import Text from '@/atoms/Text';
import Flex from '@/molecules/Flex';
import { Menu } from '@/molecules/Menu';
import { getCopyrightText } from '@/utils/getCopyrightText';

const MobileFooter: FC<FooterProps> = ({ menuItems, copyrightText }) => (
    <Flex className={styles['mobile-footer']}>
        <Flex className={styles['nav']}>
            <Menu menuItems={menuItems} icon={false} />
        </Flex>
        <Flex className={styles['copyright']}>
            <Text size='xs'>{getCopyrightText(copyrightText)}</Text>
        </Flex>
    </Flex>
);

export default MobileFooter;
