// button.stories.js
import Button from './button.twig';
import './_button.scss';
import buttonData from "./button.data.yml";

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    modifier: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

const Template = (args) => Button(args);

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = buttonData.primary;
Secondary.args = buttonData.secondary;
