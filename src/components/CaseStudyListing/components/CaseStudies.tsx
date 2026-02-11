import { FC } from 'react';

import styles from './CaseStudies.module.scss';

import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Link from '@/atoms/Link';
import Text from '@/atoms/Text';
import Flex from '@/molecules/Flex';
import Grid from '@/molecules/Grid';
import { CaseStudyListingProject } from '@/types/content';

interface CaseStudiesProps {
    caseStudies?: CaseStudyListingProject[] | null;
    parent?: string;
}

const CaseStudies: FC<CaseStudiesProps> = ({ caseStudies, parent }) => {
    if (!caseStudies?.length) {
        return null;
    }

    return caseStudies?.map((caseStudy) => {
        const { intro, title, slug, featuredImage } = caseStudy;

        const isProject = !parent;

        return (
            <Grid key={caseStudy?.id} className={styles['case-study__card']}>
                {featuredImage?.url && (
                    <Image
                        src={featuredImage.url}
                        alt={featuredImage.alt || ''}
                        width={featuredImage.width || 100}
                        height={featuredImage.height || 100}
                        base64={featuredImage.base64 || undefined}
                    />
                )}
                <Flex className={styles['case-study__content']}>
                    {title && (
                        <Heading as='h3' size='sm' color='black'>
                            {title}
                        </Heading>
                    )}
                    {intro?.description && (
                        <Text size='xs'>{intro.description}</Text>
                    )}
                    {slug && (
                        <Link
                            href={`${process.env.NEXT_PUBLIC_BASE_URL}/${
                                isProject ? 'projects' : `projects/${parent}`
                            }/${slug}`}
                        >
                            view {isProject ? 'project' : 'case study'}
                        </Link>
                    )}
                </Flex>
            </Grid>
        );
    });
};

export default CaseStudies;
