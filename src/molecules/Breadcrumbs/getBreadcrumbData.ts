import { capitalizeWord } from '@/utils/capitalizeWord';

/**
 * Splits the given "paths" string by "/" and filters out any empty paths.
 * Then, it replaces all dashes with spaces in each path and capitalizes the first letter of each word.
 * Handles special cases as needed.
 *
 * @param paths - The string containing the paths to be processed.
 * @returns An array of strings representing the processed paths.
 */
export const getBreadcrumbData = (paths: string) => {
    const pathsArray = paths.split('/').filter((path) => path);

    const breadcrumbs: { label: string; link: string }[] = [];

    let fullSlug = '/';

    pathsArray.forEach((path) => {
        fullSlug += path + '/';

        switch (path.toLowerCase()) {
            case 'projects': {
                breadcrumbs.push({
                    label: 'Home',
                    link: '/'
                });
                break;
            }
            case 'lineup-ai': {
                breadcrumbs.push({
                    label: 'Lineup.ai',
                    link: fullSlug
                });
                break;
            }
            default: {
                breadcrumbs.push({
                    label: capitalizeWord(path.replaceAll('-', ' ')),
                    link: fullSlug
                });
            }
        }
    });

    return breadcrumbs;
};
