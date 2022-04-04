import { createContext, useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Icon, IconType } from '@/components/atoms/icon';

import { Lang } from './header';

export interface ICardData {
  createdAt: string;
  updatedAt: string;
  cardName: string;
  cardNameJa: string;
  cardAccountName: string;
  cardAccountLink: string;
  cardDescription: string;
  cardDescriptionJa: string;
  cardBottomTitle: string;
  cardBottomName: string;
  cardBlogLink: string;
}

export const CardContext = createContext({} as ICardData);

interface ILinkExternalProps {
  href: string;
}

const LinkExternal: React.FC<ILinkExternalProps> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center"
  >
    {children}
    <Icon type={IconType.ExternalLink} className="inline-block w-4 h-4 ml-1" />
  </a>
);

export const Card = () => {
  const data = useContext(CardContext);
  const { locale } = useRouter();

  return (
    <div className="flex flex-col mb-6 md:mb-8 md:flex-row md:items-center">
      <div
        className="mr-4 mb-6 sm:mr-6 md:mb-0 md:mr-8 overflow-hidden"
        style={{ minWidth: 250, minHeight: 250 }}
      >
        <Image src="/avatar.png" alt="avatar" width={250} height={250} />
      </div>
      <div>
        <h1
          className={
            locale === Lang.Ja
              ? `text-3xl font-bold mb-2`
              : `text-3xl font-bold mb-4`
          }
        >
          {locale === Lang.Ja ? data.cardNameJa : data.cardName}
        </h1>
        <div className="mb-2">
          <LinkExternal href={data.cardAccountLink}>
            {data.cardAccountName}
          </LinkExternal>
        </div>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html:
              locale === Lang.Ja
                ? data.cardDescriptionJa
                : data.cardDescription,
          }}
        />
        <dl className="mt-2">
          <dt>{data.cardBottomTitle}</dt>
          <dd>
            <LinkExternal href={data.cardBlogLink}>
              {data.cardBottomName}
            </LinkExternal>
          </dd>
        </dl>
      </div>
    </div>
  );
};
