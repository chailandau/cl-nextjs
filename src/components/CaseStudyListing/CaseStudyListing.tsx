import { FC } from 'react';

import styles from './CaseStudyListing.module.scss';

import { CASE_STUDIES_QUERY } from '@/api/graphqlQueries';
import {
    CaseStudyListing as CaseStudyListingType,
    Maybe
} from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Link from '@/atoms/Link';
import Text from '@/atoms/Text';
import Flex from '@/molecules/Flex';
import Grid from '@/molecules/Grid';
import Section from '@/molecules/Section';
import { getData } from '@/utils/getData';

interface CaseStudyListingData {
    data?: Maybe<CaseStudyListingType> | undefined;
}
export const CaseStudyListingContent: FC<CaseStudyListingData> = ({ data }) => {
    const { title, icon, caseStudies } = data || {};

    return (
        <Section
            className={styles['case-study-listing']}
            heading={title}
            icon={icon}
        >
            {caseStudies?.map((caseStudy) => {
                const {
                    intro,
                    title: caseStudyTitle,
                    slug,
                    featuredImage
                } = caseStudy;

                return (
                    <Grid
                        key={caseStudy?.id}
                        className={styles['case-study-listing__card']}
                    >
                        {featuredImage?.url && (
                            <Image
                                src={featuredImage.url}
                                alt={featuredImage.alt}
                                width={featuredImage.width || 100}
                                height={featuredImage.height || 100}
                            />
                        )}
                        <Flex className={styles['case-study-listing__content']}>
                            {caseStudyTitle && (
                                <Heading as='h3' size='sm' color='black'>
                                    {caseStudyTitle}
                                </Heading>
                            )}
                            {intro?.description && (
                                <Text size='xs'>{intro.description}</Text>
                            )}
                            {slug && (
                                <Link
                                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/projects/${slug}`}
                                >
                                    view project
                                </Link>
                            )}
                        </Flex>
                    </Grid>
                );
            })}
        </Section>
    );
};

const CaseStudyListing: FC = async () => {
    const { CaseStudyListing: caseStudyData } =
        await getData(CASE_STUDIES_QUERY);

    return <CaseStudyListingContent data={caseStudyData} />;
};

export default CaseStudyListing;
