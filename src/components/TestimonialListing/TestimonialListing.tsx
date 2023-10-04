import { FC } from 'react';

import Testimonial from './components/Testimonial';
import styles from './TestimonialListing.module.scss';

import { TESTIMONIALS_QUERY } from '@/api/graphqlQueries';
import {
    Maybe,
    TestimonialListing as TestimonialListingType
} from '@/api/graphqlTypes';
import { SectionId } from '@/atoms/Container/Container';
import Flex from '@/molecules/Flex';
import Section from '@/molecules/Section';
import { getData } from '@/utils/getData';

interface TestimonialListingData {
    data?: Maybe<TestimonialListingType> | undefined;
    sectionId?: SectionId;
}

export const TestimonialListingContent: FC<TestimonialListingData> = ({
    data,
    sectionId
}) => {
    const { title, icon, testimonials } = data || {};

    return (
        <Section
            className={styles['testimonial-listing']}
            heading={title}
            icon={icon}
            sectionId={sectionId}
        >
            <Flex className={styles['testimonials']}>
                {testimonials?.map((testimonial) => (
                    <Testimonial
                        key={testimonial?.id}
                        testimonial={testimonial}
                    />
                ))}
            </Flex>
        </Section>
    );
};

interface TestimonialListingProps {
    sectionId?: SectionId;
}

const TestimonialListing: FC<TestimonialListingProps> = async ({
    sectionId
}) => {
    const { TestimonialListing: testimonialsData } =
        await getData(TESTIMONIALS_QUERY);

    return (
        <TestimonialListingContent
            data={testimonialsData}
            sectionId={sectionId}
        />
    );
};

export default TestimonialListing;
