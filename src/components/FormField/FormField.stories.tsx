import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormField } from './FormField';

export default {
  title: 'FormField',
  component: FormField,
  argTypes: {},
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => (
  <FormField {...args} />
);

export const FormFieldComponent = Template.bind({});

FormFieldComponent.args = {
  label: 'Email',
  placeholder: 'developers@dogwrench.com',
};

export const FormFieldError = Template.bind({});

FormFieldError.args = {
  label: 'Email',
  placeholder: 'developers@dogwrench.com',
  error: {
    message: 'Error',
  },
};
