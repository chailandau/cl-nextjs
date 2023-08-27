import '@/assets/fonts/fonts.css';

import styles from './page.module.scss';

import { NAV_QUERY } from '@/api/graphqlQueries';
import Header from '@/components/Header/Header';
import { getData } from '@/utils/getData';

export default async function Home() {
    const { Nav } = await getData(NAV_QUERY);

    return (
        <main className={styles.main}>
            {Nav?.menuItems && <Header menuItems={Nav?.menuItems} />}
        </main>
    );
}
