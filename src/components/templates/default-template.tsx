import { FC } from 'react';
import { Header } from '@/components/organisms/header';

export const DefaultTemplate: FC = ({ children }) => (
  <div className="flex w-full min-h-screen pt-4 pb-12 md:flex-row-reverse md:pl-14 pt-8 pr-8 pb-8 pl-16">
    <Header />
    <main className="flex-grow pt-8 pr-8 pb-8 pr-16">
      <div className="container flex items-center justify-center h-96">
        {/* <div className="loadingAnimation">
          <div />
          <div />
          <div />
        </div> */}
        {children}
      </div>
    </main>
  </div>
);
