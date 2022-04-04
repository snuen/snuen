import Head from 'next/head';
import { useRouter } from 'next/router';

import { DefaultTemplate } from '@/components/templates/default-template';
import { Lang } from '@/components/organisms/header';
import { Section } from '@/components/organisms/section';
import { Skills } from '@/components/molecules/skills';
import {
  GITHUB_USERNAME,
  SITE_LEAD,
  SITE_META,
  SITE_LEAD_JA,
  SITE_META_JA,
} from '@/contents/meta';

import { Stack } from './stack';

interface IProjectsData {
  createdAt: string;
  updatedAt: string;
  projectOverviewTitle: string;
  projectDesc: string;
  projectDescJa: string;
  projectSortTitle1: string;
  projectSortContent1: {
    fieldId: string;
    title: string;
    link: string;
    desc: string;
    descJa: string;
    skills: string;
  }[];
  projectSortTitle2: string;
  projectSortContent2: {
    fieldId: string;
    title: string;
    link: string;
    desc: string;
    descJa: string;
    skills: string;
  }[];
}

export interface IProjectsProps {
  pageData: IProjectsData;
}

export const Projects = ({ pageData: data }: IProjectsProps) => {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{`Projects | ${GITHUB_USERNAME} | ${
          locale === Lang.Ja ? SITE_LEAD_JA : SITE_LEAD
        }`}</title>
        <meta
          name="description"
          content={locale === Lang.Ja ? SITE_META_JA : SITE_META}
        />
        <meta
          property="og:description"
          content={locale === Lang.Ja ? SITE_LEAD_JA : SITE_LEAD}
        />
      </Head>

      <DefaultTemplate>
        <Section headingText={data.projectOverviewTitle} headingLevel="two">
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html:
                locale === Lang.Ja ? data.projectDescJa : data.projectDesc,
            }}
          />
          <div className="mt-8">
            <Section headingText={data.projectSortTitle1} headingLevel="three">
              {data.projectSortContent1.map((o) => (
                <Stack link={o.link} title={o.title} key={o.title}>
                  <p className="mt-1 mb-3">
                    {locale === Lang.Ja ? o.descJa : o.desc}
                  </p>
                  <Skills
                    skillsText={o.skills}
                    classNameUl="flex flex-wrap items-center -mb-2"
                    classNameLi="h-6 px-2 mr-2 mb-2 border rounded text-xs leading-6"
                  />
                </Stack>
              ))}
            </Section>
            <div className="h-6" />
            <Section headingText={data.projectSortTitle2} headingLevel="three">
              {data.projectSortContent2.map((o) => (
                <Stack link={o.link} title={o.title} key={o.title}>
                  <p className="mt-1 mb-3">
                    {locale === Lang.Ja ? o.descJa : o.desc}
                  </p>
                  <Skills
                    skillsText={o.skills}
                    classNameUl="flex flex-wrap items-center -mb-2"
                    classNameLi="h-6 px-2 mr-2 mb-2 border rounded text-xs leading-6"
                  />
                </Stack>
              ))}
            </Section>
          </div>
        </Section>
      </DefaultTemplate>
    </>
  );
};
