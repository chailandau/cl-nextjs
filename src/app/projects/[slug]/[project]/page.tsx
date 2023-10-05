import { CASE_STUDY_CONTENT_QUERY, METADATA_QUERY } from '@/api/graphqlQueries';
import { Page_Meta } from '@/api/graphqlTypes';
import CaseStudy from '@/templates/CaseStudy';
import { getData } from '@/utils/getData';
import { getMetadataInfo } from '@/utils/getMetadataInfo';

type Params = {
    params: {
        project: string;
    };
};

export const generateStaticParams = async () => {
    const { CaseStudies } = await getData(METADATA_QUERY);

    if (!CaseStudies?.docs || CaseStudies.docs.length === 0) {
        return [];
    }

    return CaseStudies.docs
        .filter((caseStudy) => typeof caseStudy?.slug === 'string')
        .map((caseStudy) => ({
            params: {
                project: caseStudy?.slug
            }
        }));
};

export const generateMetadata = async ({ params: { project } }: Params) => {
    const { CaseStudies } = await getData(CASE_STUDY_CONTENT_QUERY, project);
    const meta = CaseStudies?.docs?.map((doc) => doc?.meta) as Page_Meta[];

    return getMetadataInfo(meta);
};

const NextPage = ({ params: { project } }: Params) => (
    <CaseStudy project={project} />
);

export default NextPage;
