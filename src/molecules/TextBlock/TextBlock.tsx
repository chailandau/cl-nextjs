import { FC } from 'react';

import Flex from '../Flex';
import RichText from '../RichText';

import styles from './TextBlock.module.scss';

import Heading from '@/atoms/Heading';
import { RichTextProps } from '@/utils/parseRichText';

interface TextBlockProps {
    /** optional text block heading */
    heading?: string | null;
    /** optional rich text content */
    richText: RichTextProps[];
}

const TextBlock: FC<TextBlockProps> = ({ heading, richText }) => (
    <Flex className={styles['text-block']}>
        {heading && (
            <Heading size='sm' color='black'>
                {heading}
            </Heading>
        )}
        {richText && <RichText richText={richText} />}
    </Flex>
);

export default TextBlock;
