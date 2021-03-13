import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import '@/styles/globals.scss';
import * as utils from '@/utils';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <QueryClientProvider client={utils.httpClient.queryClient}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </RecoilRoot>
);

export default MyApp;
