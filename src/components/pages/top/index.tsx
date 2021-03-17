import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faSpotify,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { DefaultTemplate } from '@/components/templates/default-template';
import { CardContext } from '@/components/organisms/card';
import { Section } from '@/components/organisms/section';
import { Skills } from '@/components/molecules/skills';
import { ITopProps } from '@/pages/index';

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

export const Top = ({ pageData: data, commonData }: ITopProps) => (
  <>
    <Head>
      <title>MrSung | Portfolio site of Sungjoon Park (MrSung)</title>
    </Head>

    <CardContext.Provider value={commonData}>
      <DefaultTemplate>
        <Section headingText={data.aboutTitle} headingLevel="two">
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: data.aboutContent }} />
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
      </DefaultTemplate>
    </CardContext.Provider>
  </>
);
