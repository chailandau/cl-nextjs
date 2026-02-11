import { FC } from 'react';

import SocialLink from './components/SocialLink';
import styles from './Socials.module.scss';

import Grid from '@/molecules/Grid';
import Section from '@/molecules/Section';
import { SocialsBlock } from '@/types/content';

const Socials: FC<SocialsBlock> = ({ socials, sectionId }) => (
    <Section borderTop sectionId={sectionId}>
        <Grid className={styles['socials']}>
            {socials?.map((social) => (
                <SocialLink
                    key={social?.label}
                    label={social?.label}
                    icon={social?.icon}
                    socialLink={social?.socialLink}
                />
            ))}
        </Grid>
    </Section>
);

export default Socials;
