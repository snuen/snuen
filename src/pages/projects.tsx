import { GetStaticProps } from 'next';
import { Projects as PageComponent } from '@/components/pages/projects';
import * as utils from '@/utils';

interface IProjectsData {
  createdAt: string;
  updatedAt: string;
  projectOverviewTitle: string;
  projectOverviewDesc: string;
  projectSortTitle1: string;
  projectSortContent1: {
    fieldId: string;
    title: string;
    link: string;
    desc: string;
    skills: string;
  }[];
  projectSortTitle2: string;
  projectSortContent2: {
    fieldId: string;
    title: string;
    link: string;
    desc: string;
    skills: string;
  }[];
}

export interface IProjectsProps {
  data: IProjectsData;
}

const Projects = ({ data }: IProjectsProps) => <PageComponent data={data} />;

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const data = await utils.httpClient.fetchRetry(`projects`);

  return {
    props: {
      data,
    },
  };
};
