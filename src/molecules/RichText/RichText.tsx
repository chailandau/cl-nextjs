import { FC } from 'react';

import Container from '@/atoms/Container';
import { textSizes } from '@/atoms/Text/Text';
import {
    RichTextProps as RichTextPropsType,
    parseRichText
} from '@/utils/parseRichText';

interface RichTextProps {
    /** Colored subhead to display */
    richText: RichTextPropsType[];
    /** optional class name */
    className?: string;
    /** size of text */
    size?: (typeof textSizes)[number];
}

const RichText: FC<RichTextProps> = ({ richText, size, className }) => (
    <Container className={className}>{parseRichText(richText, size)}</Container>
);

export default RichText;
