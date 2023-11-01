import Script from 'next/script';

import { NAV_QUERY } from '@/api/graphqlQueries';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/assets/fonts/fonts.css';
import '@/styles/main.scss';
import BackToTop from '@/molecules/BackToTop';
import { getData } from '@/utils/getData';

export const revalidate = 60;

export default async function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const { Nav } = await getData(NAV_QUERY);

    return (
        <html lang='en'>
            <Script
                strategy='afterInteractive'
                src='https://www.googletagmanager.com/gtag/js?id=G-7Y1YQ9834N'
            />
            <Script
                id='google-analytics'
                strategy='afterInteractive'
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    gtag('config', 'G-7Y1YQ9834N');
                `
                }}
            />
            <body>
                {Nav?.menuItems && <Header menuItems={Nav.menuItems} />}
                {children}
                {Nav?.menuItems && (
                    <Footer
                        menuItems={Nav.menuItems}
                        copyrightText={Nav?.footerCopyrightText}
                    />
                )}
                <BackToTop />
            </body>
        </html>
    );
}
