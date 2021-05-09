import Head from 'next/head';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faSpotify,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { DefaultTemplate } from '@/components/templates/default-template';
import { Lang } from '@/components/organisms/header';
import { CardContext } from '@/components/organisms/card';
import { Section } from '@/components/organisms/section';
import { Skills } from '@/components/molecules/skills';
import { ITopProps } from '@/pages/index';
import { GITHUB_USERNAME, SITE_LEAD, SITE_META } from '@/misc/meta';

const socialIconReducer = (iconName: string) => {
  const i = iconName.toLowerCase();
  switch (true) {
    case /github/.test(i):
      return <FontAwesomeIcon icon={faGithub} />;
    case /spotify/.test(i):
      return <FontAwesomeIcon icon={faSpotify} />;
    case /instagram/.test(i):
      return <FontAwesomeIcon icon={faInstagram} />;
    default:
      return <></>;
  }
};

export const Top = ({ pageData: data, commonData }: ITopProps) => {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{`${GITHUB_USERNAME} | ${SITE_LEAD}`}</title>
        <meta name="description" content={SITE_META} />
      </Head>

      <CardContext.Provider value={commonData}>
        <DefaultTemplate isShowCard>
          <Section headingText={data.aboutTitle} headingLevel="two">
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html:
                  locale === Lang.Ja ? data.aboutContentJa : data.aboutContent,
              }}
            />
          </Section>
          <Section headingText={data.siteDescTitle} headingLevel="two">
            <p>
              {locale === Lang.Ja
                ? data.siteDescContentJa
                : data.siteDescContent}
            </p>
          </Section>
          <Section headingText={data.skillsTitle} headingLevel="two">
            <Skills
              skillsText={data.skillsContent}
              classNameUl="flex flex-wrap items-center -mb-2"
              classNameLi="h-6 px-2 mr-2 mb-2 border rounded text-xs leading-6"
            />
          </Section>
          <Section headingText={data.socialTitle} headingLevel="two">
            <ul className="flex items-center">
              {data.socialContent.map((o) => (
                <li className="mr-4" key={o.socialName}>
                  <a
                    href={o.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialIconReducer(o.socialName)}
                  </a>
                </li>
              ))}
            </ul>
          </Section>
          <Section headingText={data.creditTitle} headingLevel="two">
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: data.creditContent,
              }}
            />
          </Section>
        </DefaultTemplate>
      </CardContext.Provider>
    </>
  );
};
