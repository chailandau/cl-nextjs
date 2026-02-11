import { FC } from 'react';

import NotFound from '../404';
import styles from '../Project/Project.module.scss';

import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Link from '@/atoms/Link';
import Text from '@/atoms/Text';
import { getCaseStudyContent } from '@/lib/content';
import Breadcrumbs from '@/molecules/Breadcrumbs/Breadcrumbs';
import Flex from '@/molecules/Flex';
import Section from '@/molecules/Section';

interface CaseStudyProps {
    projectSlug: string;
    caseStudySlug: string;
}

const CaseStudy: FC<CaseStudyProps> = ({ projectSlug, caseStudySlug }) => {
    const caseStudy = getCaseStudyContent(projectSlug, caseStudySlug);

    if (!caseStudy) {
        return <NotFound />;
    }

    const { frontmatter } = caseStudy;
    const { title, intro } = frontmatter;

    return (
        <Section className={styles['project']}>
            <Breadcrumbs />

            <Flex className={styles['project-intro']}>
                {title && <Heading as='h1'>{title}</Heading>}
                {intro?.text && <Text>{intro.text}</Text>}
            </Flex>
            {intro?.cta &&
                intro.cta?.map((cta) => (
                    <Link key={cta?.id} href={cta?.externalLink || ''}>
                        {cta?.label}
                    </Link>
                ))}
            {intro?.image?.url && (
                <Image
                    src={intro.image.url}
                    alt={intro.image.alt || ''}
                    width={intro?.image.width || 1000}
                    height={intro?.image.height || 1000}
                />
            )}
        </Section>
    );
};

export default CaseStudy;
