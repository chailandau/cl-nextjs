import { NavMenuItem } from '@/types/content';

export const getPageLabel = (menuItem: NavMenuItem) => {
    const customLabel =
        menuItem?.overridePageName &&
        menuItem?.customLabel !== null &&
        menuItem.customLabel;

    return menuItem?.page && (customLabel || menuItem?.page?.title);
};
