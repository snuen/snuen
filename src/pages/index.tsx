import { GetStaticProps } from 'next';
import { Top as PageComponent } from '@/components/pages/top';
import * as utils from '@/utils';

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

export interface ITopProps {
  data: IMeData;
}

const Top = ({ data }: ITopProps) => <PageComponent data={data} />;

export default Top;

export const getStaticProps: GetStaticProps = async () => {
  const data = await utils.httpClient.fetchRetry(`meee`);

  return {
    props: {
      data,
    },
  };
};
