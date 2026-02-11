import { FC } from 'react';

import Testimonial from './components/Testimonial';
import styles from './TestimonialListing.module.scss';

import { SectionId } from '@/atoms/Container/Container';
import { getTestimonialsData } from '@/lib/data';
import Flex from '@/molecules/Flex';
import Section from '@/molecules/Section';
import { Maybe, TestimonialsData } from '@/types/content';

interface TestimonialListingData {
    data?: Maybe<TestimonialsData> | undefined;
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

const TestimonialListing: FC<TestimonialListingProps> = ({ sectionId }) => {
    const testimonialsData = getTestimonialsData();

    return (
        <TestimonialListingContent
            data={testimonialsData}
            sectionId={sectionId}
        />
    );
};

export default TestimonialListing;
