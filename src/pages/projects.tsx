import { GetStaticProps } from 'next';
import { ICardData } from '@/components/organisms/card';
import { Projects as PageComponent } from '@/components/pages/projects';
import { httpClient } from '@/utils';

interface IProjectsData {
  createdAt: string;
  updatedAt: string;
  projectOverviewTitle: string;
  projectDesc: string;
  projectDescJa: string;
  projectSortTitle1: string;
  projectSortContent1: {
    fieldId: string;
    title: string;
    link: string;
    desc: string;
    descJa: string;
    skills: string;
  }[];
  projectSortTitle2: string;
  projectSortContent2: {
    fieldId: string;
    title: string;
    link: string;
    desc: string;
    descJa: string;
    skills: string;
  }[];
}

export interface IProjectsProps {
  pageData: IProjectsData;
  commonData: ICardData;
}

const Projects = ({ pageData, commonData }: IProjectsProps) => (
  <PageComponent pageData={pageData} commonData={commonData} />
);

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await httpClient.fetchRetry(`projects`);
  const commonData = await httpClient.fetchRetry(`card`);

  return {
    props: {
      pageData,
      commonData,
    },
  };
};
