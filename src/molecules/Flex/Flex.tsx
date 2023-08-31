import classNames from 'classnames';
import { FC, forwardRef } from 'react';

import styles from './Flex.module.scss';

import Container, { ContainerProps } from '@/atoms/Container';

const Flex: FC<ContainerProps> = forwardRef(
    ({ children, as: FlexTag = 'div', className }, ref) => {
        const classList = classNames(styles['flex'], className && className);

        return (
            <Container as={FlexTag} className={classList} ref={ref}>
                {children}
            </Container>
        );
    }
);

export default Flex;