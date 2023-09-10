import classNames from 'classnames';
import { FC, forwardRef } from 'react';

import SectionHeading, {
    SectionHeadingProps
} from './components/SectionHeading';
import styles from './Section.module.scss';

import { ContainerProps } from '@/atoms/Container';
import Flex from '@/molecules/Flex';

interface SectionProps extends ContainerProps, SectionHeadingProps {
    /** Optional dashed border on top */
    borderTop?: boolean;
}

const Section: FC<SectionProps> = forwardRef(
    (
        {
            children,
            as: SectionTag = 'section',
            className,
            heading,
            icon,
            borderTop = false
        },
        ref
    ) => {
        const classList = classNames(
            styles['section'],
            className && className,
            borderTop && styles['border-top']
        );

        return (
            <Flex as={SectionTag} className={classList} ref={ref}>
                <SectionHeading heading={heading} icon={icon} />
                {children}
            </Flex>
        );
    }
);

export default Section;
