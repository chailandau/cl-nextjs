import { SLUG_QUERY } from '@/api/graphqlQueries';
import Page from '@/templates/Page';
import { getData } from '@/utils/getData';

type Params = {
    params: {
        slug: string;
    };
};

export const generateStaticParams = async () => {
    const { Pages } = await getData(SLUG_QUERY);

    // Pages.docs?.map((doc) => console.log(doc?.id));

    return Pages?.docs?.map((doc) => ({
        params: {
            slug: doc?.slug
        }
    }));
};
const NextPage = async ({ params: { slug } }: Params) => <Page slug={slug} />;

export default NextPage;
