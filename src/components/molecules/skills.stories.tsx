import { Meta, Story } from '@storybook/react';

import { Skills as SkillsComponent, ISkillsProps } from './skills';

export default {
  title: `Components/Molecules/Skills`,
  component: SkillsComponent,
} as Meta;

const Template: Story<ISkillsProps> = (args) => <SkillsComponent {...args} />;

export const Skills = Template.bind({});
Skills.args = {
  skillsText: `React, TypeScript`,
  classNameUl: `pl-0 flex flex-wrap items-center`,
  classNameLi: `h-6 px-2 mr-2 mb-2 border rounded text-xs leading-6`,
};
