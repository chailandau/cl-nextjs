import { JSX } from 'react';

import Text, { TextProps } from '@/atoms/Text';

interface ChildSegment {
    text: string;
    bold?: boolean;
}

export interface ColoredSubheadProps {
    children: ChildSegment[];
}

type ColoredSubhead = JSX.Element[] | null | undefined;

/**
 * Parses a colored subhead and returns an array of Text components with appropriate styling.
 *
 * @param coloredSubhead - An array of objects representing the colored subhead.
 * @returns An array of Text components with appropriate styling, or null if the input is falsy.
 */
export const parseColoredSubhead = (
    coloredSubhead: ColoredSubheadProps[]
): ColoredSubhead | null => {
    if (!coloredSubhead) {
        return null;
    }

    const colors = ['aqua', 'white', 'pink'];

    return coloredSubhead.flatMap((segment) => {
        const boldIndexes: number[] = [];

        return segment?.children?.map((child, index) => {
            const isBold = child?.bold;
            let textBgColor;

            if (isBold) {
                boldIndexes.push(index);
                const position = boldIndexes?.indexOf(index);
                textBgColor = colors[position % colors?.length];
            }

            const textProps = {
                as: 'span' as TextProps['as'],
                size: 'md' as TextProps['size'],
                font: 'secondary' as TextProps['font'],
                backgroundColor: textBgColor
            };

            return (
                <Text key={index} {...textProps}>
                    {child?.text}
                </Text>
            );
        });
    });
};
