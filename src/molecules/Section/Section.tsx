import classNames from 'classnames';
import { FC, forwardRef } from 'react';

import styles from './Section.module.scss';

import { ContainerProps } from '@/atoms/Container';
import Flex from '@/molecules/Flex';

const Section: FC<ContainerProps> = forwardRef(
    ({ children, as: SectionTag = 'section', className }, ref) => {
        const classList = classNames(styles['section'], className && className);

        return (
            <Flex as={SectionTag} className={classList} ref={ref}>
                {children}
            </Flex>
        );
    }
);

export default Section;
