import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Heading.module.scss';

export const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export const headingSizes = ['sm', 'md', 'lg', 'xl'] as const;

export const headingColors = ['primary', 'black'] as const;

interface HeadingProps {
    /** Semantic tag heading is wrapped in */
    as?: (typeof headingTags)[number];
    /** Heading size */
    size?: (typeof headingSizes)[number];
    /** Heading color */
    color?: (typeof headingColors)[number];
    /** Heading content */
    children: string | ReactNode;
}

const Heading: FC<HeadingProps> = ({
    as: HeadingTag = 'h2',
    size = 'lg',
    color = 'primary',
    children
}) => {
    const classList = classNames(
        styles['heading'],
        styles[size],
        styles[color]
    );

    return <HeadingTag className={classList}>{children}</HeadingTag>;
};

export default Heading;
