import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
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
    shape: {
      type: { name: 'string', required: false },
      description: 'The shape of the button, \'square\' is set by default.',
      defaultValue: 'square',
      control:'radio',
      options: ['rounded', 'square'],
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
  render: ({...args}) => ({
    props: args,
    template: `
            <mas-button
              [variant]="variant"
              [size]="size"
              [disabled]="disabled"
              [iconLeft]="iconLeft"
              [iconRight]="iconRight"
              [shape]="shape">
              Button
            </mas-button>
    `
  })
} as Meta;
 
/** Basic : A button with default settings */

export const Default: StoryObj<MasButton> = {}
Default.args = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  iconLeft: null,
  iconRight: null,
};

export const ButtonType = {
  render: () => ({
    template: `
      <div style="display: flex; justify-content: space-between">
        <mas-button variant="primary">Primary</mas-button>
        <mas-button variant="secondary">Secondary</mas-button>
        <mas-button variant="tertiary">Tertiary</mas-button>
      </div>
    `
  })
}

export const ButtonSize = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 20px; align-items: center">
        <mas-button variant="primary" size="small">Small</mas-button>
        <mas-button variant="primary" size="medium">Medium</mas-button>
        <mas-button variant="primary" size="large">Large</mas-button>
      </div>
    `
  })
}

export const ButtonIcon = {
  render: () => ({
    template: `
      <div style="display: flex; justify-content: space-between">
        <mas-button variant="primary" iconLeft="mas-check-outlined mas-system-and-device--outlined">Left button</mas-button>
        <mas-button variant="primary" iconRight="mas-check-outlined mas-system-and-device--outlined">Right button</mas-button>
        <mas-button variant="primary" iconRight="mas-check-outlined mas-system-and-device--outlined" iconLeft="mas-check-outlined mas-system-and-device--outlined">Icon button</mas-button>      
      </div>
      `
  })
}

export const ButtonShape = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 20px; align-items: center">
        <mas-button variant="secondary" shape="rounded">Rounded</mas-button>
        <mas-button variant="secondary" shape="square">Square</mas-button>
      </div>
    `
  })
}

export const Directive = () => ({
  template: `
    <a MasButton variant="primary">Link</a>
  `,
});
 
   
 

  
 