import { FC } from 'react';

import NotFound from '../404';

import styles from './Project.module.scss';

import { PROJECT_CONTENT_QUERY } from '@/api/graphqlQueries';
import {
    CaseStudy as CaseStudyType,
    Project_Intro,
    Project_ProjectSections
} from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Link from '@/atoms/Link';
import Text from '@/atoms/Text';
import Breadcrumbs from '@/molecules/Breadcrumbs/Breadcrumbs';
import Flex from '@/molecules/Flex';
import Section from '@/molecules/Section';
import { getData } from '@/utils/getData';
import RenderComponents from '@/utils/RenderComponents';

interface ProjectProps {
    slug: string;
}

let title: string;
let intro: Project_Intro;

const Project: FC<ProjectProps> = async ({ slug }) => {
    const { Projects } = await getData(PROJECT_CONTENT_QUERY, slug);
    const projectSections: Project_ProjectSections[] = [];
    const caseStudies: CaseStudyType[] = [];

    Projects?.docs?.forEach((project) => {
        project?.title && (title = project.title);
        project?.intro && (intro = project.intro);
        project?.projectSections &&
            projectSections.push(...project.projectSections);
        project?.caseStudies && caseStudies.push(...project.caseStudies);
    });

    if (!intro && (!projectSections || !projectSections.length)) {
        return <NotFound />;
    }

    return (
        <>
            <Section className={styles['project']}>
                <Breadcrumbs />
                <Flex className={styles['project-intro']}>
                    {title && <Heading as='h1'>{title}</Heading>}
                    {intro?.description && <Text>{intro.description}</Text>}
                </Flex>

                {intro?.image?.url && (
                    <Image
                        src={intro.image.url}
                        alt={intro.image.alt}
                        width={intro?.image.width || 1000}
                        height={intro?.image.height || 1000}
                        base64={intro?.image.base64 || undefined}
                    />
                )}
                <RenderComponents components={projectSections} />
            </Section>
            <Section heading='Selected Case Studies'>
                {caseStudies?.map((caseStudy) => (
                    <Link
                        key={caseStudy?.slug}
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}/projects/${slug}/${caseStudy?.slug}`}
                    >
                        {caseStudy?.title}
                    </Link>
                ))}
            </Section>
        </>
    );
};

export default Project;
