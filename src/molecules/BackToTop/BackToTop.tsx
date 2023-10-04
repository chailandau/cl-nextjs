'use client';

import classNames from 'classnames';
import { m } from 'framer-motion';
import { useEffect, useState } from 'react';

import styles from './BackToTop.module.scss';

import Text from '@/atoms/Text';
import LazyAnimatePresence from '@/utils/framer/LazyAnimatePresence';
import { useScrollDirection } from '@/utils/useScrollDirection';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

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
                    initial={{ y: 100, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.6 }
                    }}
                    exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 1 }}
                >
                    <Text size='md'>{'^'}</Text>
                </m.button>
            )}
        </LazyAnimatePresence>
    );
};

export default BackToTopButton;
