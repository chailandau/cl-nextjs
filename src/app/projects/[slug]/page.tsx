import { METADATA_QUERY, PROJECT_CONTENT_QUERY } from '@/api/graphqlQueries';
import { Page_Meta } from '@/api/graphqlTypes';
import Project from '@/templates/Project';
import { getData } from '@/utils/getData';
import { getMetadataInfo } from '@/utils/getMetadataInfo';

type Params = {
    params: {
        slug: string;
    };
};

export const generateStaticParams = async () => {
    const { Projects } = await getData(METADATA_QUERY);

    if (!Projects?.docs || Projects.docs.length === 0) {
        return [];
    }

    return Projects.docs
        .filter((project) => typeof project?.slug === 'string')
        .map((project) => ({
            params: {
                slug: project?.slug
            }
        }));
};

export const generateMetadata = async ({ params: { slug } }: Params) => {
    const { Projects } = await getData(PROJECT_CONTENT_QUERY, slug);
    const meta = Projects?.docs?.map((doc) => doc?.meta) as Page_Meta[];

    return getMetadataInfo(meta);
};

const NextPage = async ({ params: { slug } }: Params) => (
    <Project slug={slug} />
);

export default NextPage;
