import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';
import Head from 'next/head';
import Script from 'next/script';

import './globals.css';

export const metadata: Metadata = {
    title: 'Hiro',
    description: 'hiro527.com',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <Script
                    id="AdobeFonts"
                    dangerouslySetInnerHTML={{
                        __html: `
                    (function(d) {
                        var config = {
                          kitId: '${process.env.NEXT_PUBLIC_TYPEKIT_ID}',
                          scriptTimeout: 3000,
                          async: true
                        },
                        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
                      })(document);`,
                    }}
                />
            </Head>
            <body>
                <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
            </body>
        </html>
    );
}