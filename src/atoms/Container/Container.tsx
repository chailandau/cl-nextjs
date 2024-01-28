import { FC, ReactNode, Ref, forwardRef } from 'react';

export const semanticTags = [
    'button',
    'div',
    'footer',
    'header',
    'nav',
    'section',
    'span',
    'ul'
] as const;

export type SectionId = string | undefined | null;

export interface ContainerProps {
    /** Section content */
    children?: ReactNode;
    /** Semantic tag */
    as?: (typeof semanticTags)[number];
    /** CSS class */
    className?: string | undefined;
    /** `onClick` event */
    onClick?: () => void;
    /** `Forwarded ref */
    ref?: Ref<never>;
    /** Aria label */
    ariaLabel?: string;
    /** Aria expanded */
    ariaExpanded?: boolean;
    /** Section id for anchor links*/
    sectionId?: SectionId;
}

const Container: FC<ContainerProps> = forwardRef(
    (
        {
            children,
            as: ContainerTag = 'div',
            className,
            onClick,
            ariaLabel,
            ariaExpanded,
            sectionId
        },
        ref
    ) => (
        <ContainerTag
            className={className}
            onClick={onClick}
            aria-label={ariaLabel}
            ref={ref}
            id={sectionId ? sectionId : undefined}
            aria-expanded={ariaExpanded}
        >
            {children}
        </ContainerTag>
    )
);

export default Container;
