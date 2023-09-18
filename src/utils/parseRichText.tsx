import { JSX } from 'react';

import styles from '../atoms/Text/Text.module.scss';

import Text from '@/atoms/Text';
import { textSizes } from '@/atoms/Text/Text';

interface ChildSegment {
    children: ChildSegment[];
    text: string;
}

export interface RichTextProps {
    type?: 'ul' | 'ol';
    children: ChildSegment[];
}

type RichText = JSX.Element[] | null | undefined;

/**
 * Parses rich text and returns an array of Text components.
 *
 * @param richText - An array of objects representing rich text.
 * @returns An array of Text components, or null if the input is falsy.
 */
export const parseRichText = (
    richText: RichTextProps[],
    size: (typeof textSizes)[number] = 'xs'
): RichText | null => {
    if (!richText) {
        return null;
    }

    const results: JSX.Element[] = [];

    richText.forEach((segment, index) => {
        const listItems: JSX.Element[] = [];

        segment?.children?.forEach((child) => {
            const paragraphs = child?.text
                ?.split('\n')
                ?.filter((paragraph) => paragraph?.trim() !== '');

            if (paragraphs) {
                paragraphs?.forEach((par, parIndex) => {
                    results?.push(
                        <Text
                            className={styles['rich-text']}
                            size={size}
                            key={`par-${parIndex}`}
                        >
                            {par}
                        </Text>
                    );
                });
            }

            if (segment?.type === 'ul' || segment?.type === 'ol') {
                child?.children?.forEach((listItem) => {
                    listItem?.text &&
                        listItems?.push(
                            <li key={`li-${index}`}>
                                <Text
                                    as='span'
                                    className={styles['rich-text']}
                                    size={size}
                                >
                                    {listItem.text}
                                </Text>
                            </li>
                        );
                });
            }
        });

        if (listItems.length > 0) {
            if (segment?.type === 'ul') {
                results?.push(<ul key={`ul-${index}`}>{listItems}</ul>);
            }
            if (segment?.type === 'ol') {
                results?.push(<ol key={`ol-${index}`}>{listItems}</ol>);
            }
        }
    });

    return results;
};
