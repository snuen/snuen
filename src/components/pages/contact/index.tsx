import Head from 'next/head';
import { useRouter } from 'next/router';

import { DefaultTemplate } from '@/components/templates/default-template';
import { Lang } from '@/components/organisms/header';
import { Section } from '@/components/organisms/section';
import {
  GITHUB_USERNAME,
  SITE_LEAD,
  SITE_META,
  SITE_LEAD_JA,
  SITE_META_JA,
} from '@/contents/meta';

export const Contact = () => {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{`Contact | ${GITHUB_USERNAME} | ${
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
        <Section headingText="Contact" headingLevel="two">
          {locale === Lang.Ja ? (
            <>
              <p className="text-lg mb-2">
                ご連絡は、
                <span className="text-gray-900 dark:text-white border-b-2 border-gray-300 dark:border-gray-600">
                  sungjoon512[atmark]gmail.com
                </span>
                {` `}
                までどうぞ！
              </p>
              <p className="text-lg mb-6">
                <small>（[atmark] は @ マークに変換してください）</small>
              </p>
              <p className="text-lg">※現在、問い合わせフォーム作成中です</p>
            </>
          ) : (
            <>
              <p className="text-lg mb-2">
                Feel free to contact me:{` `}
                <span className="text-gray-900 dark:text-white border-b-2 border-gray-300 dark:border-gray-600">
                  sungjoon512[atmark]gmail.com
                </span>
              </p>
              <p className="text-lg mb-6">
                <small>（convert [atmark] to @）</small>
              </p>
              <p className="text-lg">※Contact form work in progress</p>
            </>
          )}
        </Section>
      </DefaultTemplate>
    </>
  );
};
