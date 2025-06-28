import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import Script from 'next/script';

import Copyright from '@/components/Copyright';
import './globals.css';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'hiro527.com',
    description: 'About Hiro',
    openGraph: {
        url: 'https://hiro527.com',
        type: 'website',
        images: ['https://storage.hiro527.com/assets/hiro_icon_colorbg.png'],
    },
    twitter: {
        card: 'summary',
        site: '@hirx527',
        creator: '@hirx527',
        images: ['https://storage.hiro527.com/assets/hiro_icon_colorbg.png'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            {/* Google Analytics */}
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
            <body>
                {/* Adobe Fonts */}
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
                <AppRouterCacheProvider>
                    {children}
                    <Copyright />
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
