import { Nav_MenuItems } from '@/api/graphqlTypes';

export const getPageLabel = (menuItem: Nav_MenuItems) => {
    const customLabel =
        menuItem?.overridePageName &&
        menuItem?.customLabel !== null &&
        menuItem.customLabel;

    return menuItem?.page && (customLabel || menuItem?.page?.title);
};
