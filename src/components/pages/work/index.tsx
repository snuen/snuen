import Head from 'next/head';
import { useRouter } from 'next/router';
import { DefaultTemplate } from '@/components/templates/default-template';
import { Lang } from '@/components/organisms/header';
import { Section } from '@/components/organisms/section';
import { IWorkProps } from '@/pages/work';
import {
  GITHUB_USERNAME,
  SITE_LEAD,
  SITE_META,
  SITE_LEAD_JA,
  SITE_META_JA,
} from '@/misc/meta';

export const Work = ({ pageData: data }: IWorkProps) => {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{`Work | ${GITHUB_USERNAME} | ${
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

      <DefaultTemplate isShowTextile>
        <Section headingText={data.workTitle} headingLevel="two">
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: locale === Lang.Ja ? data.workDescJa : data.workDesc,
            }}
          />
          <div className="mt-7">
            {data.workContents.map((o) => (
              <Section
                headingText={locale === Lang.Ja ? o.titleJa : o.title}
                headingLevel="three"
                key={locale === Lang.Ja ? o.titleJa : o.title}
              >
                <h4 className="mb-2">
                  {locale === Lang.Ja ? o.subtitleJa : o.subtitle}
                  <br />
                  <small>{locale === Lang.Ja ? o.termJa : o.term}</small>
                </h4>
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: locale === Lang.Ja ? o.descJa : o.desc,
                  }}
                />
              </Section>
            ))}
          </div>
        </Section>
      </DefaultTemplate>
    </>
  );
};
