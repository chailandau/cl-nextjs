import { FC } from 'react';

import styles from './CaseStudies.module.scss';

import { CaseStudy, Project } from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Link from '@/atoms/Link';
import Text from '@/atoms/Text';
import Flex from '@/molecules/Flex';
import Grid from '@/molecules/Grid';
import RichText from '@/molecules/RichText';

interface CaseStudiesProps {
    caseStudies?: CaseStudy[] | Project[] | null;
    parent?: string;
}

const CaseStudies: FC<CaseStudiesProps> = ({ caseStudies, parent }) => {
    if (!caseStudies?.length) {
        return null;
    }

    return caseStudies?.map((caseStudy) => {
        const { intro, title, slug, featuredImage } = caseStudy;

        const isCaseStudy = intro && 'text' in intro;
        const isProject = intro && 'description' in intro;

        return (
            <Grid key={caseStudy?.id} className={styles['case-study__card']}>
                {featuredImage?.url && (
                    <Image
                        src={featuredImage.url}
                        alt={featuredImage.alt}
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
                    {isCaseStudy && <RichText richText={intro.text} />}
                    {isProject && <Text size='xs'>{intro.description}</Text>}
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
