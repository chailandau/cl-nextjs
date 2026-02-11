import { FC } from 'react';

import Image from '@/atoms/Image';
import Link from '@/atoms/Link';
import Text from '@/atoms/Text';
import Flex from '@/molecules/Flex';
import { SocialItem } from '@/types/content';

// Prevent Storybook styling issues due to cascade order
// eslint-disable-next-line import/order
import styles from './SocialLink.module.scss';

const SocialLink: FC<SocialItem> = ({ icon, label, socialLink }) => {
    if (!socialLink || !icon || !label) {
        return null;
    }

    return (
        <Flex className={styles['social-link']}>
            {icon && icon?.url && (
                <Image
                    src={icon?.url}
                    alt={icon?.alt || ''}
                    width={icon?.width || 64}
                    height={icon?.height || 64}
                    hasBorder={false}
                    className={styles['social-link-icon']}
                    base64={icon?.base64 || undefined}
                />
            )}
            <Link href={socialLink}>
                {label && <Text size='lg'>{label}</Text>}
            </Link>
        </Flex>
    );
};

export default SocialLink;
