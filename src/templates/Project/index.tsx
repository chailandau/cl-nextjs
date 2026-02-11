import { FC } from 'react';

import NotFound from '../404';

import styles from './Project.module.scss';

import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Link from '@/atoms/Link';
import Text from '@/atoms/Text';
import CaseStudies from '@/components/CaseStudyListing/components/CaseStudies';
import { getProjectContent } from '@/lib/content';
import Breadcrumbs from '@/molecules/Breadcrumbs/Breadcrumbs';
import Flex from '@/molecules/Flex';
import Section from '@/molecules/Section';

interface ProjectProps {
    slug: string;
}

const Project: FC<ProjectProps> = ({ slug }) => {
    const project = getProjectContent(slug);

    if (!project) {
        return <NotFound />;
    }

    const { frontmatter } = project;
    const { title, intro, caseStudies } = frontmatter;

    return (
        <>
            <Section className={styles['project']}>
                <Breadcrumbs />
                <Flex className={styles['project-intro']}>
                    {title && <Heading as='h1'>{title}</Heading>}
                    {intro?.description && <Text>{intro.description}</Text>}
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
            {caseStudies && caseStudies?.length > 0 && (
                <Section heading='Selected Case Studies'>
                    <CaseStudies
                        caseStudies={caseStudies.map((cs) => ({
                            ...cs,
                            intro: cs.intro
                                ? { description: cs.intro.heading }
                                : undefined
                        }))}
                        parent={slug}
                    />
                </Section>
            )}
        </>
    );
};

export default Project;
