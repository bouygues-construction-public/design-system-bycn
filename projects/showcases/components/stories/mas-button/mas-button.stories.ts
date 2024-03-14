import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasButton, MasButtonDirective } from "projects/components/src/lib/button";  

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
    iconLeft: {
      type: { name: 'string', required: false },
      description: 'The name of the icon to display on the left side of the button.',
      defaultValue: false,
      control:'select',
      options: ['', ...icons],
    },
    iconRight: {
      type: { name: 'string', required: false },
      description: 'The name of the icon to display on the right side of the button.',
      defaultValue: false,
      control:'select',
      options: ['', ...icons],
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
  title: 'Components / Actions / Button',
  component: MasButton,
  decorators: [
    moduleMetadata({
      declarations: [MasButton, MasButtonDirective],
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

const Template: Story<MasButton> = (args: MasButton) => ({
  props: args,
  template: `
            <mas-button
              [variant]="variant"
              [size]="size"
              [disabled]="disabled"
              [iconLeft]="iconLeft"
              [iconRight]="iconRight"
              [iconAlone]="iconAlone">
              Button
            </mas-button>
            `,
});
 
/** Basic : A button with default settings */

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  iconLeft: null,
  iconRight: null,
  iconAlone: null,
};

export const Primary = () => ({
  template: `
    <mas-button variant="primary">Primary</mas-button>
  `,
});

export const Secondary = () => ({
  template: `
    <mas-button variant="secondary">Secondary</mas-button>
  `,
});
export const Accent = () => ({
  template: `
    <mas-button variant="accent">Accent</mas-button>
  `,
});
export const Tertiary = () => ({
  template: `
    <mas-button variant="tertiary">Tertiary</mas-button>
  `,
});
 
export const ButtonMedium = () => ({
  template: `
    <mas-button variant="primary" size="medium">Medium</mas-button>
  `,
});

export const ButtonSmall = () => ({
  template: `
    <mas-button variant="primary" size="small">Small</mas-button>
  `,
});
export const ButtonOnlyIcon = () => ({
  template: `
    <mas-button variant="primary"  iconAlone="mas-check-outlined mas-system-and-device--outlined"></mas-button>
  `,
});
export const ButtonLeftIcon = () => ({
  template: `
    <mas-button variant="primary" iconLeft="mas-check-outlined mas-system-and-device--outlined">Left button</mas-button>
  `,
});
export const ButtonRightIcon = () => ({
  template: `
    <mas-button variant="primary" iconRight="mas-check-outlined mas-system-and-device--outlined">Right button</mas-button>
  `,
});
export const ButtonRightAndLeftIcon = () => ({
  template: `
    <mas-button variant="primary" iconRight="mas-check-outlined mas-system-and-device--outlined" iconLeft="mas-check-outlined mas-system-and-device--outlined">Icon button</mas-button>
  `,
});

export const Directive = () => ({
  template: `
    <a MasButton variant="primary">Link</a>
  `,
});
 
   
 

  
 