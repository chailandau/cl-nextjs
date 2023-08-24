import '@/assets/fonts/fonts.css';

import styles from './page.module.scss';

import { NAV_QUERY } from '@/api/graphqlQueries';
import { getData } from '@/utils/getData';

export default async function Home() {
    const { Nav } = await getData(NAV_QUERY);

    console.log(Nav);

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <ul>
                    {Nav?.menuItems?.map((item) => (
                        <li key={item.id}>{item?.internalLink?.title}</li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
