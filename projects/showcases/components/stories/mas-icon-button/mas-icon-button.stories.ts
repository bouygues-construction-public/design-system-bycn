import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasIconButton, MasIconButtonDirective } from "projects/components/src/lib/icon-button";  

const icons = ['mas-arrow-arc-left-outlined mas-arrows--outlined',
                'mas-arrow-circle-left-outlined mas-arrows--outlined',
                'mas-arrow-arc-right-outlined mas-arrows--outlined',
                'mas-arrow-circle-right-outlined mas-arrows--outlined',
                'mas-arrow-square-out-outlined mas-arrows--outlined',
                'mas-info-outlined mas-security-and-warnings--outlined',
                'mas-warning-circle-outlined mas-security-and-warnings--outlined',
                'mas-calendar-blank-outlined mas-time--outlined',
                'mas-smiley-meh-outlined mas-people--outlined',
                'mas-check-outlined mas-system-and-device--outlined',
                'mas-upload-simple-outlined mas-system-and-device--outlined',
                'mas-currency-btc-outlined mas-commerce--outlined']
const argTypes = {
  
    variant: {
      type: { name: 'string', required: false },
      description: 'The variant of the button', 
      defaultValue: 'medium',
      control: 'select', 
      options: [
        'primary',
        'secondary',
        'tertiary',
        'accent',
      ],
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the button. Available options: \'small\', \'medium\'. Default: \'medium\'', 
      defaultValue: 'medium',
      control: 'radio', 
      options: ['small', 'medium'],
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'Whether the button should be disabled. Default: false',
      defaultValue: false,
      control:'boolean', 
    },
    iconAlone: {
      type: { name: 'string', required: false },
      description: 'The name of the icon to display as the sole content of the button.',
      defaultValue: false,
      control:'select',
      options: ['', ...icons],
    },
  };
 

export default {
  title: 'Components / Actions / Icon Button',
  component: MasIconButton,
  decorators: [
    moduleMetadata({
      declarations: [MasIconButton, MasIconButtonDirective],
    }),
  ], 
  argTypes:argTypes,
  parameters: {
    docs: {
      description: {
        component: 'Buttons serve as navigational elements and can be used independently or inline with text. They offer a lightweight option for navigation.',
      },
    },
  },
} as Meta;

const Template: Story<MasIconButton> = (args: MasIconButton) => ({
  props: args,
  template: `
            <mas-icon-button
              [variant]="variant"
              [size]="size"
              [disabled]="disabled"
              [iconAlone]="iconAlone">
              Button
            </mas-icon-button>
            `,
});
 
/** Basic : A button with default settings */

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  iconAlone: "mas-eject-outlined mas-media--outlined",
};

export const Primary = () => ({
  template: `
    <mas-icon-button variant="primary" iconAlone="mas-hand-palm-outlined mas-people--outlined">Primary</mas-icon-button>
  `,
});

export const Secondary = () => ({
  template: `
    <mas-icon-button variant="secondary" iconAlone="mas-hand-pointing-outlined mas-people--outlined">Secondary</mas-icon-button>
  `,
});
export const Accent = () => ({
  template: `
    <mas-icon-button variant="accent" iconAlone="mas-hands-praying-outlined mas-people--outlined">Accent</mas-icon-button>
  `,
});
export const Tertiary = () => ({
  template: `
    <mas-icon-button variant="tertiary" iconAlone="mas-hand-waving-outlined mas-people--outlined">Tertiary</mas-icon-button>
  `,
});
 
export const ButtonMedium = () => ({
  template: `
    <mas-icon-button variant="primary" size="medium" iconAlone="mas-fingerprint-outlined mas-security-and-warnings--outlined">Medium</mas-icon-button>
  `,
});

export const ButtonSmall = () => ({
  template: `
    <mas-icon-button variant="primary" size="small" iconAlone="mas-fingerprint-outlined mas-security-and-warnings--outlined">Small</mas-icon-button>
  `,
});
export const ButtonOnlyIcon = () => ({
  template: `
    <mas-icon-button variant="primary" iconAlone="mas-check-outlined mas-system-and-device--outlined"></mas-icon-button>
  `,
});
 
   
 

  
 