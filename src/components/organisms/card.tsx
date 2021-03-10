import { FC } from 'react';
import { useQuery } from 'react-query';
import * as utils from '@/utils';
import { IconExternalLink } from '@/components/atoms/icons';

interface ILinkExternalProps {
  href: string;
}

const LinkExternal: FC<ILinkExternalProps> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center"
  >
    {children}
    <span className="inline-block w-4 h-4 ml-1">
      <IconExternalLink />
    </span>
  </a>
);

interface ICardData {
  createdAt: string;
  updatedAt: string;
  cardName: string;
  cardAccountName: string;
  cardAccountLink: string;
  cardDescription: string;
  cardBottomTitle: string;
  cardBottomName: string;
  cardBlogLink: string;
}

export const Card = () => {
  const { isLoading, isError, data, error } = useQuery<ICardData>(`card`, () =>
    utils.httpClient.fetchRetry(`card`),
  );

  return (
    <div className="flex flex-col mb-6 md:mb-8 md:flex-row md:items-center">
      <div
        className="mr-4 mb-6 sm:mr-6 md:mb-0 md:mr-8 overflow-hidden"
        style={{ minWidth: 250, minHeight: 250 }}
      >
        <img src="/avatar.png" alt="avatar" width="250" height="250" />
      </div>
      {(() => {
        if (isError) {
          // @ts-expect-error: not important
          return <>{error.message}</>;
        }

        if (isLoading || typeof data === `undefined`) {
          return null;
        }

        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">{data.cardName}</h1>
            <div className="mb-2">
              <LinkExternal href={data.cardAccountLink}>
                {data.cardAccountName}
              </LinkExternal>
            </div>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: data.cardDescription }} />
            <dl className="mt-2">
              <dt>{data.cardBottomTitle}</dt>
              <dd>
                <LinkExternal href={data.cardBlogLink}>
                  {data.cardBottomName}
                </LinkExternal>
              </dd>
            </dl>
          </div>
        );
      })()}
    </div>
  );
};
