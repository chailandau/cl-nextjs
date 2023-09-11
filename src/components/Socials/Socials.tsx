import { FC } from 'react';

import SocialLink from './components/SocialLink';
import styles from './Socials.module.scss';

import { SocialsBlock } from '@/api/graphqlTypes';
import Grid from '@/molecules/Grid';
import Section from '@/molecules/Section';

const Socials: FC<SocialsBlock> = ({ socials }) => (
    <Section borderTop>
        <Grid className={styles['socials']}>
            {socials?.map((social) => (
                <SocialLink
                    key={social?.id}
                    label={social?.label}
                    icon={social?.icon}
                    socialLink={social?.socialLink}
                />
            ))}
        </Grid>
    </Section>
);

export default Socials;
