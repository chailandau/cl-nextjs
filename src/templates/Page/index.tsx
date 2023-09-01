import { FC } from 'react';

import NotFound from '../404';

import { PAGE_CONTENT_QUERY } from '@/api/graphqlQueries';
import { Page_Sections } from '@/api/graphqlTypes';
import { getPageData } from '@/utils/getData';
import RenderComponents from '@/utils/RenderComponents';

interface PageProps {
    slug: string;
}

const Page: FC<PageProps> = async ({ slug }) => {
    const { Pages } = await getPageData(PAGE_CONTENT_QUERY, slug);

    const sections = Pages?.docs?.flatMap(
        (doc) => doc?.sections
    ) as Page_Sections[];

    if (!sections || !sections.length) {
        return <NotFound />;
    }

    return <RenderComponents components={sections} />;
};

export default Page;