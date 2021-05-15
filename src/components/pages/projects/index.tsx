import Head from 'next/head';
import { useRouter } from 'next/router';
import { DefaultTemplate } from '@/components/templates/default-template';
import { Lang } from '@/components/organisms/header';
import { CardContext } from '@/components/organisms/card';
import { Section } from '@/components/organisms/section';
import { Skills } from '@/components/molecules/skills';
import { IProjectsProps } from '@/pages/projects';
import {
  GITHUB_USERNAME,
  SITE_LEAD,
  SITE_META,
  SITE_LEAD_JA,
  SITE_META_JA,
} from '@/misc/meta';
import { Stack } from './stack';

export const Projects = ({ pageData: data, commonData }: IProjectsProps) => {
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

      <CardContext.Provider value={commonData}>
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
              <Section
                headingText={data.projectSortTitle1}
                headingLevel="three"
              >
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
              <Section
                headingText={data.projectSortTitle2}
                headingLevel="three"
              >
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
      </CardContext.Provider>
    </>
  );
};
