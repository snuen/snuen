import { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import '@/styles/tailwinds.css';
import '@/styles/base.css';
import '@/styles/utils.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    {/* Global site tag (gtag.js) - Google Analytics */}
    <Script
      id="google-tag-manager-source"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-LZWCFFXX4J"
    />
    <Script id="google-tag-manager-script">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-LZWCFFXX4J');
    `}</Script>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
