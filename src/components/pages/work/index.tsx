import Head from 'next/head';
import { DefaultTemplate } from '@/components/templates/default-template';
import { CardContext } from '@/components/organisms/card';
import { Section } from '@/components/organisms/section';
import { IWorkProps } from '@/pages/work';

export const Work = ({ pageData: data, commonData }: IWorkProps) => (
  <>
    <Head>
      <title>Work | Portfolio site of Sungjoon Park (MrSung)</title>
    </Head>

    <CardContext.Provider value={commonData}>
      <DefaultTemplate>
        <Section headingText={data.workTitle} headingLevel="two">
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: data.workDesc }} />
          <div className="mt-7">
            {data.workContents.map((o) => (
              <Section headingText={o.title} headingLevel="three" key={o.title}>
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
      </DefaultTemplate>
    </CardContext.Provider>
  </>
);
