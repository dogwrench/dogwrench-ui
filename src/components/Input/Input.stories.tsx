import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    inputSize: {
      name: 'inputSize',
    },
    label: {
      name: 'label',
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const ExtraSmallInput = Template.bind({});

ExtraSmallInput.args = {
  inputSize: 'xs',
};

export const SmallInput = Template.bind({});

SmallInput.args = {
  inputSize: 'sm',
};

export const MediumInput = Template.bind({});

MediumInput.args = {
  inputSize: 'md',
};

export const LargeInput = Template.bind({});

LargeInput.args = {
  inputSize: 'lg',
};
