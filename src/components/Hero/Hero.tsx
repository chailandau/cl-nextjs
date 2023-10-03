import { FC } from 'react';

import styles from './Hero.module.scss';

import { Hero as HeroType, Maybe } from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Link from '@/atoms/Link';
import Text from '@/atoms/Text';
import ColoredSubhead from '@/molecules/ColoredSubhead';
import Flex from '@/molecules/Flex';
import Section from '@/molecules/Section';

export interface HeroProps {
    /** Hero heading */
    heading?: string;
    /** Optional colored subheading */
    coloredSubhead?: HeroType['coloredSubhead'];
    /** Optional non-colored subheading */
    subhead?: HeroType['subhead'];
    /** Indicates whether to display doodles */
    doodles?: Maybe<boolean>;
    /** Indicates if hero is on homepage */
    homepage?: Maybe<boolean>;
    /** Hero icon */
    icon?: HeroType['icon'];
    /** Hero CTA */
    cta?: HeroType['cta'];
}
const Hero: FC<HeroProps> = ({
    heading,
    coloredSubhead,
    subhead,
    icon,
    doodles,
    homepage,
    cta
}) => {
    const isInternalCta = cta?.linkType === 'internal';
    const headingSize = homepage ? 'xl' : 'lg';
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
                        base64={icon?.base64 || undefined}
                    />
                </Flex>
            )}
            {doodles && (
                <Flex className={styles['doodles']}>
                    <Image
                        src='/icons/asterisk.png'
                        width={38}
                        height={40}
                        alt=''
                        hasBorder={false}
                        className={styles['asterisk']}
                    />
                    <Image
                        src='/icons/x.png'
                        width={37}
                        height={33}
                        alt=''
                        hasBorder={false}
                        className={styles['x']}
                    />
                    <Image
                        src='/icons/heart.png'
                        width={26}
                        height={45}
                        alt=''
                        hasBorder={false}
                        className={styles['heart']}
                    />
                </Flex>
            )}
            {heading && (
                <Heading as='h1' size={headingSize}>
                    {heading}
                </Heading>
            )}
            {coloredSubhead && (
                <ColoredSubhead
                    className={styles['colored-subhead']}
                    coloredSubhead={coloredSubhead}
                />
            )}
            {subhead && (
                <Text size='lg' font='secondary' className={styles['subhead']}>
                    {subhead}
                </Text>
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
