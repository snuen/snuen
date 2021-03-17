import { Meta, Story } from '@storybook/react';

import { Skills, ISkillsProps } from './skills';

export default {
  title: `Components/Molecules/Skills`,
  component: Skills,
} as Meta;

const Template: Story<ISkillsProps> = (args) => <Skills {...args} />;

export const SkillsSample = Template.bind({});
SkillsSample.args = {
  skillsText: `React, TypeScript`,
  classNameUl: `pl-0 flex flex-wrap items-center`,
  classNameLi: `h-6 px-2 mr-2 mb-2 border rounded text-xs leading-6`,
};
