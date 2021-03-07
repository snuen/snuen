import Head from 'next/head';
import { useQuery } from 'react-query';
import { DefaultTemplate } from '@/components/templates/default-template';
import { Section } from '@/components/organisms/section';
import { Skills } from '@/components/molecules/skills';
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
          <div className="mt-8">
            <Section headingText={data.projectSortTitle1} headingLevel="three">
              {data.projectSortContent1.map((o) => (
                <Stack link={o.link} title={o.title} key={o.title}>
                  <p className="mt-1 mb-3">{o.desc}</p>
                  <Skills skillsText={o.skills} />
                </Stack>
              ))}
            </Section>
            <div className="h-6" />
            <Section headingText={data.projectSortTitle2} headingLevel="three">
              {data.projectSortContent2.map((o) => (
                <Stack link={o.link} title={o.title} key={o.title}>
                  <p className="mt-1 mb-3">{o.desc}</p>
                  <Skills skillsText={o.skills} />
                </Stack>
              ))}
            </Section>
          </div>
        </Section>
      </DefaultTemplate>
    </>
  );
};
