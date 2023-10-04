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
    /** Enables icon */
    icon?: boolean;
    /** Optional onClick event */
    onClick?: () => void;
}

const Link: FC<LinkProps> = ({
    href: destination,
    children,
    className,
    underline = true,
    icon = true,
    onClick
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
        <NextLink
            className={classList}
            href={href}
            rel={rel}
            target={target}
            onClick={onClick}
        >
            <span className={styles['link-text']}>{children}</span>
            {icon && <span className={styles['link-icon']}>{'>'}</span>}
        </NextLink>
    );
};

export default Link;
