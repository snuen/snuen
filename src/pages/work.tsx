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
  data: IWorkData;
}

const Work = ({ data }: IWorkProps) => <PageComponent data={data} />;

export default Work;

export const getStaticProps: GetStaticProps = async () => {
  const data = await utils.httpClient.fetchRetry(`work`);

  return {
    props: {
      data,
    },
  };
};
