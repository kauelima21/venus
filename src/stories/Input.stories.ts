import { Story, Meta } from '@storybook/angular/types-6-0';
import { VenusInputComponent } from '@kauelima21/venus';

export default {
  title: 'Stories/Input',
  component: VenusInputComponent,
} as Meta;

const Template: Story<VenusInputComponent> = (args: VenusInputComponent) => ({
  props: args,
});

export const Base = Template.bind({});
Base.args = {
  name: 'generic_name',
  type: 'text',
  placeholder: 'Placeholder',
  isDisabled: false,
};
