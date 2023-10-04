'use client';

import classNames from 'classnames';
import { m, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

import styles from './BackToTop.module.scss';

import Text from '@/atoms/Text';
import { backToTop } from '@/utils/framer/animations';
import LazyAnimatePresence from '@/utils/framer/LazyAnimatePresence';
import { useScrollDirection } from '@/utils/useScrollDirection';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const prefersReducedMotion = useReducedMotion() || false;

    const scrollDirection = useScrollDirection();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200 && scrollDirection === 'up') {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility, { passive: true });

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, [scrollDirection]);
    const scrollToTop = () => {
        isVisible &&
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
    };

    const classList = classNames(
        styles['back-to-top'],
        isVisible && styles['visible']
    );

    return (
        <LazyAnimatePresence>
            {isVisible && (
                <m.button
                    className={classList}
                    onClick={scrollToTop}
                    variants={backToTop(prefersReducedMotion)}
                    initial='hidden'
                    animate={isVisible ? 'visible' : 'hidden'}
                    exit='hidden'
                    whileHover='hovered'
                    whileTap='tapped'
                >
                    <Text size='md'>{'^'}</Text>
                </m.button>
            )}
        </LazyAnimatePresence>
    );
};

export default BackToTopButton;
