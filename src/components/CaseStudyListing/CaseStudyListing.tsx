import { FC } from 'react';

import styles from './CaseStudyListing.module.scss';
import CaseStudies from './components/CaseStudies';

import { CASE_STUDIES_QUERY } from '@/api/graphqlQueries';
import {
    CaseStudyListing as CaseStudyListingType,
    Maybe
} from '@/api/graphqlTypes';
import { SectionId } from '@/atoms/Container/Container';
import Section from '@/molecules/Section';
import { getData } from '@/utils/getData';

interface CaseStudyListingData {
    data?: Maybe<CaseStudyListingType> | undefined;
    sectionId?: SectionId;
}
export const CaseStudyListingContent: FC<CaseStudyListingData> = ({
    data,
    sectionId
}) => {
    const { title, icon, caseStudies } = data || {};

    return (
        <Section
            className={styles['case-study-listing']}
            heading={title}
            icon={icon}
            sectionId={sectionId}
        >
            <CaseStudies caseStudies={caseStudies} />
        </Section>
    );
};

interface CaseStudyListingProps {
    sectionId?: SectionId;
}

const CaseStudyListing: FC<CaseStudyListingProps> = async ({ sectionId }) => {
    const { CaseStudyListing: caseStudyData } =
        await getData(CASE_STUDIES_QUERY);

    return (
        <CaseStudyListingContent data={caseStudyData} sectionId={sectionId} />
    );
};

export default CaseStudyListing;
