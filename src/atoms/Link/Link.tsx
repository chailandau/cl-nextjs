import classNames from 'classnames';
import NextLink from 'next/link';
import { FC, ReactNode } from 'react';

import styles from './Link.module.scss';

import parseUrl from '@/utils/parseUrl';

interface LinkProps {
    /** Link text */
    children: ReactNode;
    /** Link href */
    href: string;
    /** CSS class name */
    className?: string;
    /** Enables underline */
    underline?: boolean;
}

const Link: FC<LinkProps> = ({
    href: destination,
    children,
    className,
    underline = true
}) => {
    const classList = classNames(
        styles['link'],
        underline && styles['underline'],
        className && className
    );

    const {
        href = '',
        target = undefined,
        rel = undefined
    } = parseUrl(destination) || {};

    return (
        <NextLink className={classList} href={href} rel={rel} target={target}>
            <span className={styles['link-text']}>{children}</span>
            <span className={styles['link-icon']}>{'>'}</span>
        </NextLink>
    );
};

export default Link;
