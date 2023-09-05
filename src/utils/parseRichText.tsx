import { JSX } from 'react';

import Text from '@/atoms/Text';

interface ChildSegment {
    text: string;
}

interface RichTextProps {
    children: ChildSegment[];
}

type RichText = JSX.Element[] | null | undefined;

/**
 * Parses rich text and returns an array of Text components.
 *
 * @param richText - An array of objects representing rich text.
 * @returns An array of Text components, or null if the input is falsy.
 */
export const parseRichText = (richText: RichTextProps[]): RichText | null => {
    if (!richText) {
        return null;
    }

    const results: JSX.Element[] = [];

    richText.flatMap(
        (segment) =>
            segment?.children?.forEach((child) => {
                const paragraphs = child.text
                    .split('\n')
                    .filter((paragraph) => paragraph.trim() !== '');

                paragraphs.forEach((par, parIndex) => {
                    results.push(
                        <Text size='xs' key={parIndex}>
                            {par}
                        </Text>
                    );
                });
            })
    );

    return results;
};
