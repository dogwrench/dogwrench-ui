import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardComponent = Template.bind({});

CardComponent.args = {
  children: (
    <div>
      <h1>Hello, World</h1>
    </div>
  ),
};
