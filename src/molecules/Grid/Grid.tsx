import classNames from 'classnames';
import { FC, forwardRef } from 'react';

import styles from './Grid.module.scss';

import Container, { ContainerProps } from '@/atoms/Container';

const Grid: FC<ContainerProps> = forwardRef(
    ({ children, as: GridTag = 'div', className }, ref) => {
        const classList = classNames(styles['grid'], className && className);

        return (
            <Container as={GridTag} className={classList} ref={ref}>
                {children}
            </Container>
        );
    }
);

export default Grid;
