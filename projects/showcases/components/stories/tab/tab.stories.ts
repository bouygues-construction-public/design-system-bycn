import { Meta, Story, StoryObj, moduleMetadata } from '@storybook/angular';
import { MasBadgeModule } from 'projects/components/src/public-api';
import { MasTab, MasTabHeader, MasTabModule, MasTabView } from 'projects/components/src/lib/tab';

const icons = [
  'mas-arrow-arc-left-filled mas-arrows--filled',
  'mas-arrow-circle-left-filled mas-arrows--filled',
  'mas-arrow-arc-right-filled mas-arrows--filled',
  'mas-arrow-circle-right-filled mas-arrows--filled',
  'mas-arrow-square-out-filled mas-arrows--filled',
  'mas-info-filled mas-security-and-warnings--filled',
  'mas-warning-circle-filled mas-security-and-warnings--filled',
  'mas-calendar-blank-filled mas-time--filled',
  'mas-smiley-meh-filled mas-people--filled',
  'mas-upload-simple-filled mas-system-and-device--filled',
  'mas-currency-btc-filled mas-commerce--filled',
];
const colors = ['orange', 'amber', 'green', 'teal', 'blue', 'purple', 'red', 'roc'];
const argTypes = {
  size: {
    type: { name: 'string', required: false },
    description: "The size of the tab. Available options: 'medium', 'large'. Default: 'medium'",
    defaultValue: 'M',
    control: 'radio',
    options: ['M', 'L'],
  },
  orientation: {
    type: { name: 'string', required: false },
    description: '',
    control: 'radio',
    options: ['horizontal', 'vertical'],
  },
  leadingIcon: {
    type: { name: 'string', required: false },
    description: 'The name of the leading  icon to display on the left side of the tab.',
    defaultValue: '',
    control: 'select',
    options: ['', ...icons],
  },
  number: {
    type: { name: 'number', required: false },
    description: '',
    defaultValue: '0',
    control: 'number',
  },
};

export default {
  title: 'Components / Navigation / Tabs',
  component: MasTabView,
  decorators: [
    moduleMetadata({
      imports: [MasBadgeModule, MasTabModule],
    }),
  ],
  argTypes: argTypes,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
} as Meta;

const Template: Story<MasTab> = (args: MasTab) => ({
  props: args,
  template: `
            <mas-tab-view [skeleton]="false" size="M" orientation="horizontal">
              <mas-tab
                header="{{header}} 1"
                [leadingIcon]="leadingIcon"
                [number]="6">
                  <div style="display: grid;">
                    <span>Content 1</span>
                    <span>Content 2</span>
                    <span>Content 3</span>
                    <span>Content 4</span>
                  </div>
              </mas-tab>             
              <mas-tab
                header="{{header}} 2"
                [leadingIcon]="leadingIcon"
                [number]="10">
                  <div>
                    <span>Tab2's content: 2</span>
                  </div>
              </mas-tab>
            </mas-tab-view>
          `,
});

/** Basic : A tab with default settings */

export const Default = Template.bind({});
Default.args = {
  leadingIcon: '',
  number: 0,
  header: 'Header',
};

export const ShowcaseSizes = () => ({
  template: `
  <div style="display: flex; flex-wrap: wrap;">
    <mas-tab-view [skeleton]="false" size="M" orientation="horizontal">
      <mas-tab header="Header 1">Content 1</mas-tab>
      <mas-tab header="Header 2">Content 2</mas-tab>
    </mas-tab-view>
  </div>
  <div style="display: flex; flex-wrap: wrap;">
    <mas-tab-view [skeleton]="false" size="L" orientation="horizontal">
      <mas-tab header="Header 1">Content 1</mas-tab>
      <mas-tab header="Header 2">Content 2</mas-tab>
    </mas-tab-view>
  </div>
  `,
  props: {
    colors: colors,
  },
});
export const ShowcaseBadge = () => ({
  template: `
      <div style="display: flex; flex-wrap: wrap;">
          <mas-tab-view [skeleton]="false" size="M" orientation="horizontal">
            <mas-tab size="M" [number]="0" header="Header">Label text 1</mas-tab>
            <mas-tab size="M" [number]="10" header="Header">Label text 2</mas-tab>
            <mas-tab size="M" [number]="100" header="Header">Label text 3</mas-tab>
        </mas-tab-view>
      </div>
  `,
  props: {
    colors: colors,
  },
});
export const ShowcaseOrientation = () => ({
  template: `
    <div style="display: flex; flex-wrap: wrap; height: 200px;">
    <mas-tab-view [skeleton]="false" orientation="horizontal">
      <mas-tab size="M" header="Header 1">Horizontal view - Label text 1</mas-tab>
      <mas-tab size="M" header="Header 2">Horizontal view - Label text 2</mas-tab>
    </mas-tab-view>
  </div>
  <div style="display: flex; flex-wrap: wrap;">
    <mas-tab-view [skeleton]="false" orientation="vertical">
      <mas-tab size="M" header="Header 1">Vertical view - Label text 1</mas-tab>
      <mas-tab size="M" header="Header 2">Vertical view - Label text 2</mas-tab>
    </mas-tab-view>
  </div>
  `,
  props: {
    colors: colors,
  },
});
export const ShowcaseIcon = () => ({
  template: `
  <mas-tab-view [skeleton]="false" orientation="horizontal">
    <mas-tab leadingIcon="mas-bed-filled mas-health-and-wellness--filled" header="Header with Icon">Leading Icon 1</mas-tab>
    <mas-tab leadingIcon="mas-terminal-window-filled mas-development--filled" header="Header with Icon">Leading Icon 2</mas-tab>
    <mas-tab leadingIcon="mas-game-controller-filled mas-games--filled" header="Header with Icon">Leading Icon 3</mas-tab>
    <mas-tab leadingIcon="mas-barbell-filled mas-health-and-wellness--filled" header="Header with Icon">Leading Icon 4</mas-tab>
  </mas-tab-view>
  `,
});
