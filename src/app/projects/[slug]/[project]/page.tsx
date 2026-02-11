import { Metadata } from 'next';

import { getAllCaseStudySlugs, getCaseStudyContent } from '@/lib/content';
import CaseStudy from '@/templates/CaseStudy';
import { getMetadataInfo } from '@/utils/getMetadataInfo';

type Params = {
    params: {
        slug: string;
        project: string;
    };
};

export const generateStaticParams = () =>
    getAllCaseStudySlugs().map(({ projectSlug, caseStudySlug }) => ({
        slug: projectSlug,
        project: caseStudySlug
    }));

export const generateMetadata = ({
    params: { slug, project }
}: Params): Metadata => {
    const caseStudy = getCaseStudyContent(slug, project);

    if (!caseStudy?.frontmatter?.meta) {
        return { title: caseStudy?.frontmatter?.title || project };
    }

    return getMetadataInfo(caseStudy.frontmatter.meta);
};

const NextPage = ({ params: { slug, project } }: Params) => (
    <CaseStudy projectSlug={slug} caseStudySlug={project} />
);

export default NextPage;
