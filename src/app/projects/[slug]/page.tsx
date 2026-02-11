import { Metadata } from 'next';

import { getAllProjectSlugs, getProjectContent } from '@/lib/content';
import Project from '@/templates/Project';
import { getMetadataInfo } from '@/utils/getMetadataInfo';

type Params = {
    params: {
        slug: string;
    };
};

export const generateStaticParams = () =>
    getAllProjectSlugs().map((slug) => ({ slug }));

export const generateMetadata = ({ params: { slug } }: Params): Metadata => {
    const project = getProjectContent(slug);

    if (!project?.frontmatter?.meta) {
        return { title: project?.frontmatter?.title || slug };
    }

    return getMetadataInfo(project.frontmatter.meta);
};

const NextPage = ({ params: { slug } }: Params) => <Project slug={slug} />;

export default NextPage;
