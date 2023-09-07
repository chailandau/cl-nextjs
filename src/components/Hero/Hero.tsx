import { FC } from 'react';

import styles from './Hero.module.scss';

import { Hero as HeroType } from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Link from '@/atoms/Link';
import ColoredSubhead from '@/molecules/ColoredSubhead';
import Flex from '@/molecules/Flex';
import Section from '@/molecules/Section';

export interface HeroProps {
    heading?: string;
    coloredSubhead?: HeroType['coloredSubhead'];
    icon?: HeroType['icon'];
    cta?: HeroType['cta'];
}
const Hero: FC<HeroProps> = ({ heading, coloredSubhead, icon, cta }) => {
    const isInternalCta = cta?.linkType === 'internal';
    const ctaLink =
        (isInternalCta
            ? `${process.env.NEXT_PUBLIC_BASE_URL}/${cta?.internalLink?.slug}`
            : cta?.externalLink) || '';

    return (
        <Section className={styles['hero']}>
            {icon?.url && (
                <Flex className={styles['icon']}>
                    <Image
                        src={icon.url}
                        width={icon?.width || 64}
                        height={icon?.height || 64}
                        alt={icon?.alt || ''}
                        hasBorder={false}
                    />
                </Flex>
            )}
            {heading && (
                <Heading as='h1' size='xl'>
                    {heading}
                </Heading>
            )}
            {coloredSubhead && (
                <ColoredSubhead
                    className={styles['subhead']}
                    coloredSubhead={coloredSubhead}
                />
            )}
            {cta && (
                <Link href={ctaLink} className={styles['cta']}>
                    {cta?.label}
                </Link>
            )}
        </Section>
    );
};
export default Hero;
