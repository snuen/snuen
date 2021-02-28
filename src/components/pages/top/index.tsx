import Head from 'next/head';
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faSpotify,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { DefaultTemplate } from '@/components/templates/default-template';
import { Section } from '@/components/organisms/section';
import * as utils from '@/utils';

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
      return undefined;
  }
};

interface IMeData {
  createdAt: string;
  updatedAt: string;
  aboutTitle: string;
  aboutContent: string;
  skillsTitle: string;
  skillsContent: string;
  socialTitle: string;
  socialContent: {
    fieldId: string;
    socialName: string;
    socialLink: string;
  }[];
}

export const Top = () => {
  const { isLoading, isError, data, error } = useQuery<IMeData>(`meee`, () =>
    utils.httpClient.fetchRetry(`meee`),
  );

  if (isError) {
    // @ts-expect-error: not important
    return <>{error.message}</>;
  }

  if (isLoading || typeof data === `undefined`) {
    return null;
  }

  const skills = data.skillsContent
    .split(`,`)
    .map((s) => {
      const st = s.trim();
      const stl = st.toLowerCase();
      return `<li class="h-6 px-2 mr-2 border rounded text-xs leading-6 text-${stl}">${st}</li>`;
    })
    .join(``);

  return (
    <>
      <Head>
        <title>MrSung | Portfolio site of Sungjoon Park (MrSung)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultTemplate>
        <Section heading={data.aboutTitle}>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: data.aboutContent }} />
        </Section>
        <Section heading={data.skillsTitle}>
          <ul
            className="flex items-center"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: skills }}
          />
        </Section>
        <Section heading={data.socialTitle}>
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
    </>
  );
};
