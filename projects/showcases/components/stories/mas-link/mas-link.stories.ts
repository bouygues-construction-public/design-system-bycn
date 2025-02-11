import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MasLink, MasLinkDirective } from 'projects/components/src/lib/link';

const argTypes = {
  href: {
    type: { name: 'string', required: true },
    description: "The URL the link should navigate to. Default: '#'",
    defaultValue: '#',
    control: 'text',
  },
  size: {
    type: { name: 'string', required: false },
    description: "The size of the link. Available options: `x-small`, `small`, `medium`, `large`. Default: 'medium'",
    defaultValue: 'medium',
    control: 'radio',
    options: ['x-small', 'small', 'medium', 'large'],
  },
  label: {
    type: { name: 'string', required: false },
    description: 'The label of the link',
  },
  icon: {
    type: { name: 'string', required: false },
    description: 'Icon should be displayed alongside the link text. Default: false',
    defaultValue: false,
    control: 'boolean',
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'Whether the link should be disabled. Default: false',
    defaultValue: false,
    control:'boolean', 
  },
};

export default {
  title: 'Components / Actions / Link',
  component: MasLink,
  decorators: [
    moduleMetadata({
      declarations: [MasLink, MasLinkDirective],
    }),
  ],
  argTypes: argTypes,
  parameters: {
    docs: {
      description: {
        component:
          'Links serve as navigational elements and can be used independently or inline with text. They offer a lightweight option for navigation.',
      },
    },
  },
  render: ({...args}) => ({
    template: `<mas-link [size]="size" [label]="label" [icon]="icon" [href]="href" [disabled]="disabled">
            </mas-link>`,
    props: args
  }),
} as Meta;

/** Basic : A link with default settings */
export const Overview: StoryObj<MasLink> = {};
Overview.args = {
  size: 'medium',
  label: 'Link',
  icon: 'mas-arrow-square-out-filled mas-arrows--filled',
  href: '#/link',
  disabled: false,
};

export const LinkIcon = () => ({
  template: `
    <mas-link label="Link" href="#" icon="mas-arrow-square-out-filled mas-arrows--filled">
    </mas-link>
  `,
});

export const LinkSize = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 20px">
        <mas-link label="X-Small Link" size="x-small" href="#" icon="mas-arrow-square-out-filled mas-arrows--filled">
        </mas-link>
        <mas-link label="Small Link" size="small" href="#" icon="mas-arrow-square-out-filled mas-arrows--filled">
        </mas-link>
        <mas-link label="Medium Link" size="medium" href="#" icon="mas-arrow-square-out-filled mas-arrows--filled">
        </mas-link>
        <mas-link label="Large Link" size="large" href="#" icon="mas-arrow-square-out-filled mas-arrows--filled">
        </mas-link>
      </div>
    `
  })
}

/** Directive : A link with default settings */
export const Directive: StoryObj<MasLinkDirective> = {
  render: () => ({
    template: `<a masLink [size]="size" [label]="label" [icon]="icon" [href]="href" [disabled]="disabled"></a>`,
  }),
};
Directive.args = {};
