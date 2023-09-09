import { FC } from 'react';

import styles from './SocialLink.module.scss';

import { Social } from '@/api/graphqlTypes';
import Image from '@/atoms/Image';
import Link from '@/atoms/Link';
import Text from '@/atoms/Text';
import Flex from '@/molecules/Flex';

const SocialLink: FC<Social> = ({ icon, label, socialLink }) => {
    if (!socialLink) {
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
                />
            )}
            <Link href={socialLink}>
                {label && <Text size='lg'>{label}</Text>}
            </Link>
        </Flex>
    );
};

export default SocialLink;
