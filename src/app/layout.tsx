import Script from 'next/script';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/assets/fonts/fonts.css';
import '@/styles/main.scss';
import { getNavData } from '@/lib/data';
import BackToTop from '@/molecules/BackToTop';

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const navData = getNavData();

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
                {navData?.menuItems && <Header menuItems={navData.menuItems} />}
                {children}
                {navData?.menuItems && (
                    <Footer
                        menuItems={navData.menuItems}
                        copyrightText={navData?.footerCopyrightText}
                    />
                )}
                <BackToTop />
            </body>
        </html>
    );
}
