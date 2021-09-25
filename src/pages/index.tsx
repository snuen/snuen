import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { ICardData } from '@/components/organisms/card';
import { Top as PageComponent } from '@/components/pages/top';
import { httpClient } from '@/utils';

interface IMeData {
  createdAt: string;
  updatedAt: string;
  aboutTitle: string;
  aboutContent: string;
  aboutContentJa: string;
  skillsTitle: string;
  skillsContent: string;
  socialTitle: string;
  socialContent: {
    fieldId: string;
    socialName: string;
    socialLink: string;
  }[];
  siteDescTitle: string;
  siteDescContent: string;
  siteDescContentJa: string;
  creditTitle: string;
  creditContent: string;
  creditContentJa: string;
}

const Top = ({
  pageData,
  commonData,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <PageComponent pageData={pageData} commonData={commonData} />
);

export default Top;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await httpClient.fetchRetry<IMeData>(`meee`);
  const commonData = await httpClient.fetchRetry<ICardData>(`card`);

  return {
    props: {
      pageData,
      commonData,
    },
  };
};
