/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str - String to be capitalized.
 * @return {string} Capitalized string.
 */
export const capitalizeWord = (str: string): string => {
    if (!str) {
        return str;
    }

    const firstLetter = str.charAt(0).toUpperCase();
    const restOfWord = str.slice(1);

    return firstLetter + restOfWord;
};
