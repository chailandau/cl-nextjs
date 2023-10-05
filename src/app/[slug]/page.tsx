import Script from 'next/script';

import { METADATA_QUERY, PAGE_CONTENT_QUERY } from '@/api/graphqlQueries';
import { Page_Meta } from '@/api/graphqlTypes';
import Page from '@/templates/Page';
import { getData } from '@/utils/getData';
import { getMetadataInfo } from '@/utils/getMetadataInfo';

interface Params {
    params: {
        slug: string;
    };
}

export const generateStaticParams = async () => {
    const { Pages } = await getData(METADATA_QUERY);

    if (!Pages?.docs || Pages.docs.length === 0) {
        return [];
    }

    return Pages.docs
        .filter((doc) => typeof doc?.slug === 'string')
        .map((doc) => ({
            params: {
                slug: doc?.slug
            }
        }));
};

export const generateMetadata = async ({ params: { slug } }: Params) => {
    const { Pages } = await getData(PAGE_CONTENT_QUERY, slug);
    const meta = Pages?.docs?.map((doc) => doc?.meta) as Page_Meta[];

    return getMetadataInfo(meta);
};

const NextPage = async ({ params: { slug } }: Params) => (
    <>
        <Script
            strategy='afterInteractive'
            src='https://www.googletagmanager.com/gtag/js?id=G-7Y1YQ9834N'
        />
        <Script
            id='google-analytics'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    gtag('config', 'G-7Y1YQ9834N');
                `
            }}
        />
        <Page slug={slug} />
    </>
);

export default NextPage;
