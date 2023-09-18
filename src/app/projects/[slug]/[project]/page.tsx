import { SLUG_QUERY } from '@/api/graphqlQueries';
import CaseStudy from '@/templates/CaseStudy';
import { getData } from '@/utils/getData';

type Params = {
    params: {
        project: string;
    };
};

export const generateStaticParams = async () => {
    const { CaseStudies } = await getData(SLUG_QUERY);

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

const NextPage = ({ params: { project } }: Params) => {
    console.log('slug', project);

    return <CaseStudy project={project} />;
};

export default NextPage;
