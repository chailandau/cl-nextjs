import { FC } from 'react';

import styles from './About.module.scss';

import { ABOUT_QUERY } from '@/api/graphqlQueries';
import Container from '@/atoms/Container';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import ColoredSubhead from '@/molecules/ColoredSubhead';
import Flex from '@/molecules/Flex';
import RichText from '@/molecules/RichText';
import Section from '@/molecules/Section';
import { getData } from '@/utils/getData';

const About: FC = async () => {
    const { About: AboutData } = await getData(ABOUT_QUERY);

    const { title, coloredSubhead, image, pets, content } = AboutData || {};

    return (
        <Section className={styles['about']}>
            <Container className={styles['image']}>
                {image && image?.url && (
                    <Image
                        src={image.url}
                        alt={image.alt || ''}
                        width={image?.width || 1000}
                        height={image?.height || 1000}
                    />
                )}
                <Container className={styles['pets']}>
                    {pets && pets?.warren && pets?.warren?.url && (
                        <Image
                            src={pets?.warren?.url}
                            alt={pets?.warren?.alt || ''}
                            width={pets?.warren?.width || 102}
                            height={pets?.warren?.height || 60}
                            hasBorder={false}
                            className={styles['warren']}
                        />
                    )}
                    {pets && pets?.harvey && pets?.harvey?.url && (
                        <Image
                            src={pets?.harvey?.url}
                            alt={pets?.harvey?.alt || ''}
                            width={pets?.harvey?.width || 55}
                            height={pets?.harvey?.height || 58}
                            hasBorder={false}
                            className={styles['harvey']}
                        />
                    )}
                    {pets && pets?.athena && pets?.athena?.url && (
                        <Image
                            src={pets?.athena?.url}
                            alt={pets?.athena?.alt || ''}
                            width={pets?.athena?.width || 46}
                            height={pets?.athena?.height || 54}
                            hasBorder={false}
                            className={styles['athena']}
                        />
                    )}
                </Container>
            </Container>

            <Flex className={styles['content']}>
                {title && (
                    <Heading as='h1' size='lg'>
                        {title}
                    </Heading>
                )}
                {coloredSubhead && (
                    <ColoredSubhead
                        className={styles['subhead']}
                        coloredSubhead={coloredSubhead}
                    />
                )}
                {content && <RichText size='sm' richText={content} />}
            </Flex>
        </Section>
    );
};

export default About;
