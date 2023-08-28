export const menuAnimations = {
    closed: {
        y: '20%',
        opacity: 0,
        transition: {
            delay: 0.15,
            length: 1
        }
    },
    open: {
        y: 0,
        opacity: 1,

        transition: {
            type: 'spring',
            duration: 0.4
        }
    }
};

export const iconFlip = {
    closed: { rotate: 0, transition: { type: 'spring', duration: 0.25 } },
    open: {
        rotate: 180,
        transition: {
            type: 'spring',
            duration: 0.25
        }
    }
};
