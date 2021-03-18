import Head from 'next/head';
import { DefaultTemplate } from '@/components/templates/default-template';
import { CardContext } from '@/components/organisms/card';
import { Section } from '@/components/organisms/section';
import { Skills } from '@/components/molecules/skills';
import { IProjectsProps } from '@/pages/projects';
import { SITE_LEAD, SITE_META } from '@/misc/meta';
import { Stack } from './stack';

export const Projects = ({ pageData: data, commonData }: IProjectsProps) => (
  <>
    <Head>
      <title>{`Projects | ${SITE_LEAD}`}</title>
      <meta name="description" content={SITE_META} />
    </Head>

    <CardContext.Provider value={commonData}>
      <DefaultTemplate>
        <Section headingText={data.projectOverviewTitle} headingLevel="two">
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: data.projectOverviewDesc }}
          />
          <div className="mt-8">
            <Section headingText={data.projectSortTitle1} headingLevel="three">
              {data.projectSortContent1.map((o) => (
                <Stack link={o.link} title={o.title} key={o.title}>
                  <p className="mt-1 mb-3">{o.desc}</p>
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
                  <p className="mt-1 mb-3">{o.desc}</p>
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
