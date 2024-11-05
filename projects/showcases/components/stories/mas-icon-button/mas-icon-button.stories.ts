import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
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
        'neutral',
      ],
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the button. Available options: \'small\', \'medium\', \'large\'. Default: \'medium\'', 
      defaultValue: 'medium',
      control: 'radio', 
      options: ['small', 'medium', 'large'],
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
    shape: {
      type: { name: 'string', required: false },
      description: 'The shape of the icon button, \'square\' is set by default.',
      defaultValue: 'square',
      control:'radio',
      options: ['rounded', 'square'],
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
  render: ({...args}) => ({
    props: args,
    template: `
            <mas-icon-button
              [variant]="variant"
              [size]="size"
              [disabled]="disabled"
              [shape]="shape"
              [iconAlone]="iconAlone">
              Button
            </mas-icon-button>
    `
  })
} as Meta;
 
/** Basic : A button with default settings */

export const Default: StoryObj<MasIconButton> = {}
Default.args = {
  variant: 'primary',
  size: 'medium',
  shape: 'square',
  disabled: false,
  iconAlone: "mas-eject-outlined mas-media--outlined",
};

export const IconButtonType = {
  render: () => ({
    template: `
      <div style="display: flex; justify-content: space-between">
        <mas-icon-button variant="primary" iconAlone="mas-hand-palm-outlined mas-people--outlined">Primary</mas-icon-button>
        <mas-icon-button variant="secondary" iconAlone="mas-hand-pointing-outlined mas-people--outlined">Secondary</mas-icon-button>
        <mas-icon-button variant="neutral" iconAlone="mas-hands-praying-outlined mas-people--outlined">Tertiary</mas-icon-button>
        <mas-icon-button variant="tertiary" iconAlone="mas-hand-waving-outlined mas-people--outlined">Tertiary</mas-icon-button>
      </div>
    `
  })
}

export const IconButtonSize = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 20px; align-items: center">
        <mas-icon-button variant="primary" size="large" iconAlone="mas-fingerprint-outlined mas-security-and-warnings--outlined">Medium</mas-icon-button>
        <mas-icon-button variant="primary" size="medium" iconAlone="mas-fingerprint-outlined mas-security-and-warnings--outlined">Medium</mas-icon-button>
        <mas-icon-button variant="primary" size="small" iconAlone="mas-fingerprint-outlined mas-security-and-warnings--outlined">Small</mas-icon-button>
      </div>

    `
  })
}

export const IconButtonShape = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 20px; align-items: center">
        <mas-icon-button variant="primary" size="medium" shape="rounded" iconAlone="mas-fingerprint-outlined mas-security-and-warnings--outlined">Medium</mas-icon-button>
        <mas-icon-button variant="primary" size="medium" shape="square" iconAlone="mas-fingerprint-outlined mas-security-and-warnings--outlined">Medium</mas-icon-button>
      </div>
    `
  })
}

export const ButtonOnlyIcon = () => ({
  template: `
    <mas-icon-button variant="primary" iconAlone="mas-check-outlined mas-system-and-device--outlined"></mas-icon-button>
  `,
});