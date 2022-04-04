import { GetStaticProps, NextPage } from 'next';

import { IWorkProps, Work as PageComponent } from '@/components/pages/work';
import { httpClient } from '@/utils';

const Work: NextPage<IWorkProps> = ({ pageData }) => (
  <PageComponent pageData={pageData} />
);

export default Work;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await httpClient.fetchRetry(`work`);

  return {
    props: {
      pageData,
    },
  };
};
