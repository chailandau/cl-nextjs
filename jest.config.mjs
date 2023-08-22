import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './'
});

const customJestConfig = {
    collectCoverageFrom: ['**/*.{ts,tsx}'],
    coveragePathIgnorePatterns: [
        'node_modules',
        '<rootDir>/.*.stories.tsx$',
        'codegen.ts',
        '<rootDir>/.next/*',
        '<rootDir>/.storybook/*',
        'index.ts'
    ],
    coverageReporters: ['html', 'json', 'json-summary', 'text', 'text-summary'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    setupFiles: ['<rootDir>/jest.setup.js'],
    setupFilesAfterEnv: [
        'jest-axe/extend-expect',
        'react-intersection-observer/test-utils',
        '<rootDir>/setupTests.js'
    ],
    testEnvironment: 'jest-environment-jsdom',
    testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx)$'
};

export default createJestConfig(customJestConfig);
