import Head from 'next/head';
import { useRouter } from 'next/router';
import { DefaultTemplate } from '@/components/templates/default-template';
import { Lang } from '@/components/organisms/header';
import {
  GITHUB_USERNAME,
  SITE_LEAD,
  SITE_META,
  SITE_LEAD_JA,
  SITE_META_JA,
} from '@/misc/meta';

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
        {locale === Lang.Ja ? (
          <>
            <p>ご連絡は、sungjoon512[atmark]gmail.com までどうぞ！</p>
            <p>
              <small>（[atmark] は @ マークに変換してください）</small>
            </p>
          </>
        ) : (
          <>
            <p>Feel free to contact me: sungjoon512[atmark]gmail.com</p>
            <p>
              <small>（convert [atmark] to @）</small>
            </p>
          </>
        )}
      </DefaultTemplate>
    </>
  );
};
