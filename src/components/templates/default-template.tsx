import { LiveChatLoaderProvider, Drift } from 'react-live-chat-loader';
import { Header } from '@/components/organisms/header';
import { Card } from '@/components/organisms/card';

interface IDefaultTemplate {
  isShowCard?: boolean;
  isShowTextile?: boolean;
  isShowDrift?: boolean;
  children: React.ReactNode;
}

export const DefaultTemplate = ({
  isShowCard,
  isShowTextile,
  isShowDrift,
  children,
}: IDefaultTemplate) => (
  <LiveChatLoaderProvider providerKey="kw3pc7vhwt3f" provider="drift">
    <div className="flex flex-col-reverse w-full min-h-screen md:flex-row">
      <Header />
      <main className="flex flex-grow pb-12 md:pb-0 md:pl-64">
        <div
          className={isShowCard ? `container pt-4 md:pt-8` : `container pt-12`}
        >
          {isShowCard && <Card />}
          {children}
        </div>
        {isShowTextile && (
          <div className="hidden w-full max-w-xs h-full bg-gradient-global-warming 1.5xl:block">
            <div
              className="w-full h-full bg-contain"
              style={{ backgroundImage: `url(/concept-background.jpg)` }}
            />
          </div>
        )}
        {isShowDrift && <Drift />}
      </main>
    </div>
  </LiveChatLoaderProvider>
);
