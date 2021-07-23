import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import '@/styles/tailwinds.css';
import '@/styles/base.css';
import '@/styles/utils.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
