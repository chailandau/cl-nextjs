import { FC } from 'react';

// import NotFound from '../404';

import { PROJECT_CONTENT_QUERY } from '@/api/graphqlQueries';
// import { Page_Sections } from '@/api/graphqlTypes';
import { getData } from '@/utils/getData';
// import RenderComponents from '@/utils/RenderComponents';

interface ProjectProps {
    slug: string;
}

const Project: FC<ProjectProps> = async ({ slug }) => {
    const { Projects } = await getData(PROJECT_CONTENT_QUERY, slug);

    console.log(Projects);

    return <></>;

    // const sections = Pages?.docs?.flatMap(
    //     (doc) => doc?.sections
    // ) as Page_Sections[];

    // if (!sections || !sections.length) {
    //     return <NotFound />;
    // }

    // return <RenderComponents components={sections} />;
};

export default Project;
