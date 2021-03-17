import { Meta, Story } from '@storybook/react';

import { Section as SectionComponent, ISectionProps } from './section';

export default {
  title: `Components/Organisms/Section`,
  component: SectionComponent,
} as Meta;

const Template: Story<ISectionProps> = (args) => <SectionComponent {...args} />;

export const Section = Template.bind({});
Section.args = {
  headingText: `This is section heading`,
  headingLevel: `two`,
  children: <p>This is section body text.</p>,
};
