import Head from 'next/head';
import { useQuery } from 'react-query';
import { DefaultTemplate } from '@/components/templates/default-template';
import { Section } from '@/components/organisms/section';
import * as utils from '@/utils';
import { Stack } from './stack';

interface IProjectsData {
  createdAt: string;
  updatedAt: string;
  projectOverviewTitle: string;
  projectOverviewDesc: string;
  projectSortTitle1: string;
  projectSortContent1: {
    fieldId: string;
    title: string;
    link: string;
    desc: string;
    skills: string;
  }[];
  projectSortTitle2: string;
  projectSortContent2: {
    fieldId: string;
    title: string;
    link: string;
    desc: string;
    skills: string;
  }[];
}

export const Projects = () => {
  const { isLoading, isError, data, error } = useQuery<IProjectsData>(
    `projects`,
    () => utils.httpClient.fetchRetry(`projects`),
  );

  if (isError) {
    // @ts-expect-error: not important
    return <>{error.message}</>;
  }

  if (isLoading || typeof data === `undefined`) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Projects | Portfolio site of Sungjoon Park (MrSung)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultTemplate>
        <Section headingText={data.projectOverviewTitle} headingLevel="two">
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: data.projectOverviewDesc }} />
          <div className="mt-7">
            <Section headingText={data.projectSortTitle1} headingLevel="three">
              {data.projectSortContent1.map((o) => (
                <Stack link={o.link} title={o.title} key={o.fieldId}>
                  <p className="mb-2">{o.desc}</p>
                </Stack>
              ))}
            </Section>
            <div className="h-7" />
          </div>
        </Section>
      </DefaultTemplate>
    </>
  );
};
