import { FC } from 'react';

import styles from './Testimonial.module.scss';

import { Testimonial as TestimonialType } from '@/api/graphqlTypes';
import Image from '@/atoms/Image';
import Link from '@/atoms/Link';
import Text from '@/atoms/Text';
import Flex from '@/molecules/Flex';
import { parseRichText } from '@/utils/parseRichText';

interface TestimonialProps {
    /** Testimonial object */
    testimonial: TestimonialType;
}

const Testimonial: FC<TestimonialProps> = ({ testimonial }) => {
    const {
        image,
        author,
        jobTitle,
        company,
        linkedin,
        excerpt,
        testimonial: testimonialText
    } = testimonial;
    parseRichText(testimonialText);

    return (
        <Flex className={styles['testimonial']}>
            <Flex className={styles['testimonial-content']}>
                {excerpt ? (
                    <Text size='xs'>{excerpt}</Text>
                ) : (
                    parseRichText(testimonialText)
                )}
            </Flex>
            {/* TODO: Add full testimonial text
            https://github.com/chailandau/cl-nextjs/issues/25 */}
            <Flex className={styles['author']}>
                <Link
                    href={linkedin || ''}
                    className={styles['author-image']}
                    icon={false}
                    underline={false}
                >
                    {image && image?.url && (
                        <Image
                            src={image.url}
                            alt={image.alt || ''}
                            width={image?.width || 64}
                            height={image?.height || 64}
                            hasBorder={false}
                        />
                    )}
                </Link>
                <Flex className={styles['author-details']}>
                    <Link href={linkedin || ''} icon={false} underline={false}>
                        {author}
                    </Link>
                    <Text size='xs' font='secondary'>
                        {jobTitle} @ {company}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Testimonial;
