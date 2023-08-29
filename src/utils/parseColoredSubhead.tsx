import { JSX } from 'react';

import Text from '@/atoms/Text';

interface ChildSegment {
    text: string;
    bold?: boolean;
}

interface ColoredSubheadProps {
    children: ChildSegment[];
}

type ColoredSubhead = JSX.Element[] | null | undefined;

export const parseColoredSubhead = (
    coloredSubhead: ColoredSubheadProps[]
): ColoredSubhead => {
    if (!coloredSubhead) {
        return null;
    }

    return coloredSubhead?.flatMap(
        (segment, index) =>
            segment?.children?.map((child) =>
                child?.bold ? (
                    <Text backgroundColor='green' key={index}>
                        {child.text}
                    </Text>
                ) : (
                    <Text key={index}>{child.text}</Text>
                )
            )
    );
};
