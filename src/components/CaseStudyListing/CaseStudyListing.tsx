import { FC } from 'react';

import styles from './CaseStudyListing.module.scss';
import CaseStudies from './components/CaseStudies';

import { SectionId } from '@/atoms/Container/Container';
import { getCaseStudyListingData } from '@/lib/data';
import Section from '@/molecules/Section';
import { CaseStudyListingData, Maybe } from '@/types/content';

interface CaseStudyListingContentProps {
    data?: Maybe<CaseStudyListingData> | undefined;
    sectionId?: SectionId;
}
export const CaseStudyListingContent: FC<CaseStudyListingContentProps> = ({
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

const CaseStudyListing: FC<CaseStudyListingProps> = ({ sectionId }) => {
    const caseStudyData = getCaseStudyListingData();

    return (
        <CaseStudyListingContent data={caseStudyData} sectionId={sectionId} />
    );
};

export default CaseStudyListing;
