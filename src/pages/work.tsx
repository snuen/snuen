import { GetStaticProps } from 'next';
import { ICardData } from '@/components/organisms/card';
import { Work as PageComponent } from '@/components/pages/work';
import { httpClient } from '@/utils';

interface IWorkData {
  createdAt: string;
  updatedAt: string;
  workTitle: string;
  workDesc: string;
  workContents: {
    fieldId: string;
    title: string;
    subtitle: string;
    term: string;
    desc: string;
  }[];
}

export interface IWorkProps {
  pageData: IWorkData;
  commonData: ICardData;
}

const Work = ({ pageData, commonData }: IWorkProps) => (
  <PageComponent pageData={pageData} commonData={commonData} />
);

export default Work;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await httpClient.fetchRetry(`work`);
  const commonData = await httpClient.fetchRetry(`card`);

  return {
    props: {
      pageData,
      commonData,
    },
  };
};
