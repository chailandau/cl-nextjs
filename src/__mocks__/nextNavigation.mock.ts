export const mockNextNavigation = () => {
    jest.mock('next/navigation', () => ({
        __esModule: true,
        useRouter: () => ({
            push: jest.fn(),
            replace: jest.fn(),
            prefetch: jest.fn()
        }),
        usePathname: jest.fn()
    }));
};
