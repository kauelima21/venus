import { componentWrapperDecorator } from '@storybook/angular';
import { Meta, StoryObj } from '@storybook/angular/types-6-0';
import { VenusInputComponent } from 'venus';

export default {
  title: 'Form/Input',
  component: VenusInputComponent,
  decorators: [
    componentWrapperDecorator((story) => {
      return `<div style='width: 300px;'>${story}</div>`;
    }),
  ],
} as Meta;

export const Base: StoryObj<VenusInputComponent> = {
  args: {
    name: 'generic_name',
    placeholder: 'Placeholder',
  },
};

export const Disabled: StoryObj<VenusInputComponent> = {
  args: {
    name: 'generic_name',
    placeholder: 'Placeholder',
    isDisabled: true,
  },
};
