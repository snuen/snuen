import { Header } from '@/components/organisms/header';
import { Card } from '@/components/organisms/card';

interface IDefaultTemplate {
  isShowCard?: boolean;
  children: React.ReactNode;
}

export const DefaultTemplate = ({ isShowCard, children }: IDefaultTemplate) => (
  <div className="flex flex-col-reverse w-full min-h-screen md:flex-row">
    <Header />
    <main className="flex-grow pt-4 pb-12 md:py-8 md:pr-8 md:pl-64">
      <div className={isShowCard ? `container` : `container pt-4`}>
        {isShowCard && <Card />}
        {children}
      </div>
    </main>
  </div>
);
