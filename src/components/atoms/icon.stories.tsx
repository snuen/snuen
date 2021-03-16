import { Meta, Story } from '@storybook/react';

import { Icon, IIconProps, IconType } from './icon';

export default {
  title: `Components/Atoms/Icon`,
  component: Icon,
} as Meta;

const Template: Story<IIconProps> = (args) => <Icon {...args} />;

export const Me = Template.bind({});
Me.args = {
  type: IconType.Me,
};

export const Projects = Template.bind({});
Projects.args = {
  type: IconType.Projects,
};

export const Work = Template.bind({});
Work.args = {
  type: IconType.Work,
};

export const Moon = Template.bind({});
Moon.args = {
  type: IconType.Moon,
};

export const Sun = Template.bind({});
Sun.args = {
  type: IconType.Sun,
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  type: IconType.ExternalLink,
};
