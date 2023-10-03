import { FC } from 'react';

import { ABOUT_QUERY } from '@/api/graphqlQueries';
import { About as AboutType, Maybe } from '@/api/graphqlTypes';
import Container from '@/atoms/Container';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import ColoredSubhead from '@/molecules/ColoredSubhead';
import Flex from '@/molecules/Flex';
import RichText from '@/molecules/RichText';
import Section from '@/molecules/Section';
import { getData } from '@/utils/getData';

// Prevent Storybook styling issues due to cascade order
// eslint-disable-next-line import/order
import styles from './About.module.scss';

interface AboutContentProps {
    data?: Maybe<AboutType> | undefined;
}

export const AboutContent: FC<AboutContentProps> = ({ data }) => {
    if (!data) {
        return <></>;
    }
    const { title, coloredSubhead, image, pets, text } = data || {};

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
                {pets && (
                    <Container className={styles['pets']}>
                        {pets?.warren && pets?.warren?.url && (
                            <Image
                                src={pets?.warren?.url}
                                alt={pets?.warren?.alt || ''}
                                width={pets?.warren?.width || 102}
                                height={pets?.warren?.height || 60}
                                hasBorder={false}
                                className={styles['warren']}
                            />
                        )}
                        {pets?.harvey && pets?.harvey?.url && (
                            <Image
                                src={pets?.harvey?.url}
                                alt={pets?.harvey?.alt || ''}
                                width={pets?.harvey?.width || 55}
                                height={pets?.harvey?.height || 58}
                                hasBorder={false}
                                className={styles['harvey']}
                            />
                        )}
                        {pets?.athena && pets?.athena?.url && (
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
                )}
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
                {text && <RichText size='sm' richText={text} />}
            </Flex>
        </Section>
    );
};

const About: FC = async () => {
    const { About: aboutData } = await getData(ABOUT_QUERY);

    return <AboutContent data={aboutData} />;
};

export default About;
