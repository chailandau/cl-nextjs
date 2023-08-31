import { FC } from 'react';

import styles from './Hero.module.scss';

import { Hero as HeroType } from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Flex from '@/molecules/Flex';
import Section from '@/molecules/Section';
import { parseColoredSubhead } from '@/utils/parseColoredSubhead';

export interface HeroProps {
    heading?: string;
    coloredSubhead?: HeroType['coloredSubhead'];
    icon?: HeroType['icon'];
}
const Hero: FC<HeroProps> = ({ heading, coloredSubhead, icon }) => (
    <Section className={styles['hero']}>
        <Flex className={styles['icon']}>
            {icon?.url && (
                <Image
                    src={icon.url}
                    width={icon?.width || 64}
                    height={icon?.height || 64}
                    alt={icon?.alt || ''}
                    hasBorder={false}
                />
            )}
        </Flex>
        {heading && (
            <Heading as='h1' size='xl'>
                {heading}
            </Heading>
        )}
        <Flex className={styles['subhead']}>
            {parseColoredSubhead(coloredSubhead)}
        </Flex>
    </Section>
);
export default Hero;
