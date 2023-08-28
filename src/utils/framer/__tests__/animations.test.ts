import * as framerAnimations from '../animations';

describe('Framer animations', () => {
    Object.keys(framerAnimations).forEach((animationName) => {
        const animation =
            framerAnimations[animationName as keyof typeof framerAnimations];
        it(`${animationName} matches snapshot`, () => {
            expect(animation).toMatchSnapshot();
        });
    });
});
