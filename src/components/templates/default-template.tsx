import { FC } from 'react';
import { Header } from '@/components/organisms/header';
import { Card } from '@/components/organisms/card';

export const DefaultTemplate: FC = ({ children }) => (
  <div className="flex flex-col-reverse w-full min-h-screen md:flex-row">
    <Header />
    <main className="flex-grow pt-4 pb-12 md:py-8 md:pr-8 md:pl-64">
      {/* loadingContainer: flex items-center justify-center */}
      <div className="container">
        {/* <div className="loadingAnimation">
          <div />
          <div />
          <div />
        </div> */}
        <Card />
        {children}
      </div>
    </main>
  </div>
);
