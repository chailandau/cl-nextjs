import { FC } from 'react';

import Testimonial from './components/Testimonial';
import styles from './TestimonialListing.module.scss';

import { TESTIMONIALS_QUERY } from '@/api/graphqlQueries';
import Flex from '@/molecules/Flex';
import Section from '@/molecules/Section';
import { getData } from '@/utils/getData';

const TestimonialListing: FC = async () => {
    const { TestimonialListing: Testimonials } =
        await getData(TESTIMONIALS_QUERY);

    const { title, icon, testimonials } = Testimonials || {};

    return (
        <Section
            className={styles['testimonial-listing']}
            heading={title}
            icon={icon}
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

export default TestimonialListing;
