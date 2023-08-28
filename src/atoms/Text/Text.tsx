import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Text.module.scss';

export const textTags = ['p', 'span'] as const;

export const textSizes = ['lg', 'md', 'sm', 'xs'] as const;
interface TextProps {
    /** Semantic tag text is wrapped in */
    as?: (typeof textTags)[number];
    /** Text content */
    children: string | ReactNode;
    /** Text size */
    size?: (typeof textSizes)[number];
}

const Text: FC<TextProps> = ({ as: TextTag = 'p', size = 'sm', children }) => {
    const classList = classNames(styles['text'], styles[size]);

    return <TextTag className={classList}>{children}</TextTag>;
};

export default Text;
