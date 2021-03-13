import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import '@/styles/globals.scss';
import * as utils from '@/utils';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={utils.httpClient.queryClient}>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default MyApp;
