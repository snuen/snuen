import { GetStaticProps, NextPage } from 'next';

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

export interface ITopProps {
  pageData: IMeData;
  commonData: ICardData;
}

const Top: NextPage<ITopProps> = ({ pageData, commonData }) => (
  <PageComponent pageData={pageData} commonData={commonData} />
);

export default Top;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await httpClient.fetchRetry(`meee`);
  const commonData = await httpClient.fetchRetry(`card`);

  return {
    props: {
      pageData,
      commonData,
    },
  };
};
