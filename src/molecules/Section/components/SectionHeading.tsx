import { FC } from 'react';

import styles from '../Section.module.scss';

import { Icon } from '@/api/graphqlTypes';
import Container from '@/atoms/Container';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Flex from '@/molecules/Flex';

export interface SectionHeadingProps {
    /** Optional section heading */
    heading?: string | null;
    /** Optional section icon */
    icon?: Icon | null;
}

const SectionHeading: FC<SectionHeadingProps> = ({ heading, icon }) => {
    if (!heading && !icon) {
        return null;
    }

    return (
        <Flex className={styles['section-heading']}>
            {heading && (
                <Heading as='h2' size='md' color='black'>
                    {heading}
                </Heading>
            )}
            {icon && icon?.url && (
                <Container className={styles['icon']}>
                    <Image
                        src={icon?.url}
                        alt={icon?.alt}
                        width={icon?.width || 64}
                        height={icon?.height || 64}
                        hasBorder={false}
                        base64={icon?.base64 || undefined}
                    />
                </Container>
            )}
        </Flex>
    );
};
export default SectionHeading;
