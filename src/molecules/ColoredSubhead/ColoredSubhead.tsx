import classNames from 'classnames';
import { FC } from 'react';

// eslint-disable-next-line import/order
import styles from './ColoredSubhead.module.scss';
import Container from '@/atoms/Container';
import {
    ColoredSubheadProps as ColoredSubheadPropsType,
    parseColoredSubhead
} from '@/utils/parseColoredSubhead';

interface ColoredSubheadProps {
    /** Colored subhead to display */
    coloredSubhead: ColoredSubheadPropsType[];
    /** optional class name */
    className?: string;
}

const ColoredSubhead: FC<ColoredSubheadProps> = ({
    coloredSubhead,
    className
}) => {
    const classList = classNames(
        styles['colored-subhead'],
        className && className
    );

    return (
        <Container className={classList}>
            {parseColoredSubhead(coloredSubhead)}
        </Container>
    );
};

export default ColoredSubhead;
