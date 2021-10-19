import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Page } from './Page';
export default {
  title: 'Page',
  component: Page,
  argTypes: {},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const PageComponent = Template.bind({});

PageComponent.args = {
  children: 'Hi',
};
