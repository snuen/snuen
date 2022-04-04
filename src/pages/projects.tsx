import { GetStaticProps, NextPage } from 'next';

import {
  IProjectsProps,
  Projects as PageComponent,
} from '@/components/pages/projects';
import { httpClient } from '@/utils';

const Projects: NextPage<IProjectsProps> = ({ pageData }) => (
  <PageComponent pageData={pageData} />
);

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await httpClient.fetchRetry(`projects`);

  return {
    props: {
      pageData,
    },
  };
};
