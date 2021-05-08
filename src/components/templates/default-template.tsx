import { Header } from '@/components/organisms/header';
import { Card } from '@/components/organisms/card';

interface IDefaultTemplate {
  isShowCard?: boolean;
  children: React.ReactNode;
}

export const DefaultTemplate = ({ isShowCard, children }: IDefaultTemplate) => (
  <div className="flex flex-col-reverse w-full min-h-screen md:flex-row">
    <Header />
    <main className="flex flex-grow pb-12 md:pb-0 md:pl-64">
      <div
        className={isShowCard ? `container pt-4 md:pt-8` : `container pt-12`}
      >
        {isShowCard && <Card />}
        {children}
      </div>
      <div
        className="hidden w-full max-w-xs h-full bg-gradient-global-warming bg-contain 1.5xl:block"
        style={{ backgroundImage: `url(/concept-background.jpg)` }}
      />
    </main>
  </div>
);
