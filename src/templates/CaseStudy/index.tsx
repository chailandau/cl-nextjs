import { FC } from 'react';

import NotFound from '../404';
import styles from '../Project/Project.module.scss';

import { CASE_STUDY_CONTENT_QUERY } from '@/api/graphqlQueries';
import {
    CaseStudy_CaseStudySections,
    CaseStudy_Intro
} from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Breadcrumbs from '@/molecules/Breadcrumbs/Breadcrumbs';
import Flex from '@/molecules/Flex';
import RichText from '@/molecules/RichText';
import Section from '@/molecules/Section';
import { getData } from '@/utils/getData';
import RenderComponents from '@/utils/RenderComponents';

interface CaseStudyProps {
    project: string;
}

let title: string;
let intro: CaseStudy_Intro;
const CaseStudy: FC<CaseStudyProps> = async ({ project }) => {
    const { CaseStudies } = await getData(CASE_STUDY_CONTENT_QUERY, project);
    const caseStudySections: CaseStudy_CaseStudySections[] = [];

    CaseStudies?.docs?.forEach((caseStudy) => {
        caseStudy?.title && (title = caseStudy.title);
        caseStudy?.intro && (intro = caseStudy.intro);
        caseStudy?.caseStudySections &&
            caseStudySections.push(...caseStudy.caseStudySections);
    });

    if (!intro && (!caseStudySections || !caseStudySections.length)) {
        return <NotFound />;
    }

    return (
        <Section className={styles['project']}>
            <Breadcrumbs />

            <Flex className={styles['project-intro']}>
                {title && <Heading as='h1'>{title}</Heading>}
                {intro?.text && <RichText richText={intro.text} />}
            </Flex>

            {intro?.image?.url && (
                <Image
                    src={intro.image.url}
                    alt={intro.image.alt}
                    width={intro.image.width || 1000}
                    height={intro.image.height || 1000}
                />
            )}
            <RenderComponents components={caseStudySections} />
        </Section>
    );
};

export default CaseStudy;
