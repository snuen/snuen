import { GetStaticProps, NextPage } from 'next';

import { ITopProps, Top as PageComponent } from '@/components/pages/top';
import { httpClient } from '@/utils';

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
