import Head from 'next/head';
import { useQuery } from 'react-query';
import { DefaultTemplate } from '@/components/templates/default-template';
import { Section } from '@/components/organisms/section';
import * as utils from '@/utils';

interface IWorkData {
  createdAt: string;
  updatedAt: string;
  workTitle: string;
  workDesc: string;
  workContents: {
    fieldId: string;
    title: string;
    subtitle: string;
    term: string;
    desc: string;
  }[];
}

export const Work = () => {
  const { isLoading, isError, data, error } = useQuery<IWorkData>(`work`, () =>
    utils.httpClient.fetchRetry(`work`),
  );

  return (
    <>
      <Head>
        <title>Work | Portfolio site of Sungjoon Park (MrSung)</title>
      </Head>

      <DefaultTemplate>
        {(() => {
          if (isError) {
            // @ts-expect-error: not important
            return <>{error.message}</>;
          }

          if (isLoading || typeof data === `undefined`) {
            return null;
          }

          return (
            <>
              <Section headingText={data.workTitle} headingLevel="two">
                {/* eslint-disable-next-line react/no-danger */}
                <div dangerouslySetInnerHTML={{ __html: data.workDesc }} />
                <div className="mt-7">
                  {data.workContents.map((o) => (
                    <Section
                      headingText={o.title}
                      headingLevel="three"
                      key={o.title}
                    >
                      <h4 className="mb-2">
                        {o.subtitle}
                        <br />
                        <small>{o.term}</small>
                      </h4>
                      {/* eslint-disable-next-line react/no-danger */}
                      <div dangerouslySetInnerHTML={{ __html: o.desc }} />
                    </Section>
                  ))}
                </div>
              </Section>
            </>
          );
        })()}
      </DefaultTemplate>
    </>
  );
};
