import { composeStory } from '@storybook/react';
import { act, fireEvent, render, screen } from '@testing-library/react';

import HeaderMeta, { Default as HeaderDefault } from './Header.stories';

import { menuItems, menuItemsNullPage } from '@/__mocks__/Header.mock';
import { mockIsLaptop } from '@/__mocks__/useMediaQuery.mock';
import { DesktopNav, MobileNav } from '@/components/Header/Nav';
import { Menu, MenuToggle } from '@/molecules/Menu';
import { testAxeAndSnapshot } from '@/utils/testHelpers';

const Header = composeStory(HeaderDefault, HeaderMeta);

describe('Header', () => {
    describe('Menu', () => {
        it('renders menu items correctly', () => {
            render(<Menu menuItems={menuItems} />);
            const menuItemsElements = screen.getAllByRole('listitem');
            expect(menuItemsElements).toHaveLength(3);
        });
        it('returns null if page in menuItems is null', () => {
            render(<Menu menuItems={menuItemsNullPage} />);
            expect(screen.queryByRole('listitem')).toBeNull();
        });
        testAxeAndSnapshot({ component: <Menu menuItems={menuItems} /> });
    });
    describe('Menu Toggle', () => {
        it('opens navigation on click', async () => {
            const header = render(<Header />);
            const menuToggle = await header.findByLabelText('menu toggle');
            fireEvent.click(menuToggle);
            expect(menuToggle).toHaveClass('open');
        });
        testAxeAndSnapshot({ component: <MenuToggle /> });
    });
    describe('Mobile Nav', () => {
        beforeEach(async () => {
            act(() => {
                mockIsLaptop(false);
            });
            render(<Header />);
            fireEvent.click(await screen.findByLabelText('menu toggle'));
        });
        it('removes mobile nav when isLaptop is true', async () => {
            act(() => {
                mockIsLaptop(true);
            });
            expect(await screen.findByRole('navigation')).not.toHaveClass(
                'mobile-nav'
            );
        });
        testAxeAndSnapshot({ component: <MobileNav menuItems={menuItems} /> });
    });
    describe('DesktopNav', () => {
        const DesktopNavEl = <DesktopNav menuItems={menuItems} />;
        beforeEach(() => {
            render(DesktopNavEl);
            act(() => {
                mockIsLaptop(true);
            });
        });
        it('renders correctly', () => {
            expect(screen.getByRole('navigation')).toBeInTheDocument();
        });
        testAxeAndSnapshot({ component: DesktopNavEl });
    });
});
