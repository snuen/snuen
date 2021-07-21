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

      <DefaultTemplate isShowDrift>
        {locale === Lang.Ja ? (
          <>
            <p className="text-lg mb-2">
              ご連絡は、右下の Drift messenger もしくは
              <br />
              sungjoon512[atmark]gmail.com までどうぞ！
            </p>
            <p className="text-lg">
              <small>（[atmark] は @ マークに変換してください）</small>
            </p>
          </>
        ) : (
          <>
            <p className="text-lg mb-2">
              Feel free to contact me via Drift messenger on the right bottom or
              <br />
              email: sungjoon512[atmark]gmail.com
            </p>
            <p className="text-lg">
              <small>（convert [atmark] to @）</small>
            </p>
          </>
        )}
      </DefaultTemplate>
    </>
  );
};
