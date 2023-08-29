import '@/assets/fonts/fonts.css';

import styles from './page.module.scss';

import { NAV_QUERY, PAGES_QUERY } from '@/api/graphqlQueries';
import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import { getData } from '@/utils/getData';
import { parseColoredSubhead } from '@/utils/parseColoredSubhead';

export default async function Home() {
    const { Nav } = await getData(NAV_QUERY);

    const { Pages } = await getData(PAGES_QUERY);

    const subhead =
        Pages?.docs &&
        Pages.docs?.map(
            (doc) =>
                doc?.sections?.map((section) =>
                    parseColoredSubhead(section?.hero?.coloredSubhead)
                )
        );

    return (
        <main className={styles.main}>
            {Nav?.menuItems && <Header menuItems={Nav.menuItems} />}

            {subhead && <>{subhead}</>}

            {Nav?.menuItems && (
                <Footer
                    menuItems={Nav.menuItems}
                    copyrightText={Nav?.footerCopyrightText}
                />
            )}
        </main>
    );
}
