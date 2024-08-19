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
    description: "The size of the link. Available options: 'small', 'medium', 'large'. Default: 'medium'",
    defaultValue: 'medium',
    control: 'radio',
    options: ['small', 'medium', 'large'],
  },
  standalone: {
    type: { name: 'boolean', required: false },
    description: 'Whether the link should have a standalone appearance. Default: false',
    defaultValue: false,
    control: 'boolean',
  },
  iconAlong: {
    type: { name: 'boolean', required: false },
    description: 'Whether an icon should be displayed alongside the link text. Default: false',
    defaultValue: false,
    control: 'boolean',
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
    template: `<mas-link [size]="size" [standalone]="standalone" [iconAlong]="iconAlong" [href]="href">
                Link
            </mas-link>`,
    props: args
  }),
} as Meta;

/** Basic : A link with default settings */
export const Overview: StoryObj<MasLink> = {};
Overview.args = {};

export const LinkIcon = () => ({
  template: `
    <mas-link  iconAlong="true"  href="#">
      Link
    </mas-link>
  `,
});

export const LinkSize = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 20px">
        <mas-link size="small"  href="#">
          Small Link
        </mas-link>
        <mas-link size="medium"  href="#">
          Medium Link
        </mas-link>
        <mas-link size="large"  href="#">
          Large Link
        </mas-link>
      </div>
    `
  })
}

/** Directive : A link with default settings */
export const Directive: StoryObj<MasLinkDirective> = {
  render: () => ({
    template: `<a masLink [size]="size" [standalone]="standalone" [iconAlong]="iconAlong" 
                    href="https://www.example.com">Link</a>`,
  }),
};
Directive.args = {};
