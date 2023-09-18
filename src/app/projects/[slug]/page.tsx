import { SLUG_QUERY } from '@/api/graphqlQueries';
import Project from '@/templates/Project';
import { getData } from '@/utils/getData';

type Params = {
    params: {
        slug: string;
    };
};

export const generateStaticParams = async () => {
    const { Projects } = await getData(SLUG_QUERY);

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

const NextPage = async ({ params: { slug } }: Params) => (
    <Project slug={slug} />
);

export default NextPage;
