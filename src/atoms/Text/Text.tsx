import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Text.module.scss';

export const textTags = ['p', 'span'] as const;

export const textSizes = ['xl', 'lg', 'md', 'sm', 'xs'] as const;

export const fontFamily = ['primary', 'secondary'] as const;
export interface TextProps {
    /** Semantic tag text is wrapped in */
    as?: (typeof textTags)[number];
    /** Text content */
    children: string | ReactNode;
    /** Text font family */
    font?: (typeof fontFamily)[number];
    /** Text size */
    size?: (typeof textSizes)[number];
    /** Background block color */
    backgroundColor?: string;
}

export const backgroundColors = ['aqua', 'white', 'pink'] as const;

const Text: FC<TextProps> = ({
    as: TextTag = 'p',
    backgroundColor,
    size = 'md',
    font = 'primary',
    children
}) => {
    const classList = classNames(
        styles['text'],
        styles[size],
        backgroundColor && styles[`bg-${backgroundColor}`],
        font && styles[font]
    );

    return <TextTag className={classList}>{children}</TextTag>;
};

export default Text;
