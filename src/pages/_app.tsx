import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '@/styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
