import { GetStaticProps } from 'next';
import { Work as PageComponent } from '@/components/pages/work';
import * as utils from '@/utils';

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
}

const Work = ({ pageData }: IWorkProps) => (
  <PageComponent pageData={pageData} />
);

export default Work;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await utils.httpClient.fetchRetry(`work`);

  return {
    props: {
      pageData,
    },
  };
};
