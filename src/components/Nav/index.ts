import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';

import { Nav_MenuItems } from '@/api/graphqlTypes';

export { DesktopNav, MobileNav };

export interface NavProps {
    /* Menu items to display */
    menuItems?: Nav_MenuItems[] | null;
}
