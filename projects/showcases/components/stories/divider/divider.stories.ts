import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasDivider } from 'projects/components/src/public-api';

const meta: Meta<MasDivider> = {
  component: MasDivider,
  title: 'Components/Structure/Divider',
  // tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  parameters: {
    componentSubtitle: '',
    docs: {
      description: {
        component: `
        `,
      },
    },
  },
  render: (args: MasDivider) => ({
    props: {
      ...args,
    },
    template: `
      <div style="height: 124px">
        <mas-divider [orientation]="orientation"></mas-divider>
      </div>
    `,
  }),
  argTypes: {
    orientation: {
      type: { name: 'string', required: false },
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: '',
    },
  },
};

export default meta;
type Story = StoryObj<MasDivider>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Basic: Story = {
  args: {
    orientation: 'horizontal',
  },
};
export const Overview: Story = {
  render: (args: MasDivider) => ({
    template: `
    <div style="display: flex; flex-direction: column; align-items: center; font-family: var(--mas-typo_font-family);">
      <h2 style="font-weight: var(--mas-typo_headline-font-weight)">Bouygues Construction Expert in building</h2>
      <div style="display: flex; flex-direction: row; justify-content: center; flex: 1; margin-top: 16px">
        <div style="display: flex; flex-direction: column; align-items: center; padding: 8px; flex: 1;">
          <h3 style="font-weight: var(--mas-typo_caption-font-weight)">+10000</h3>
          <span>
            projects delivered in 10 years
          </span>
        </div>
        <mas-divider orientation="vertical"/>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 8px; flex: 1;">
          <h3 style="font-weight: var(--mas-typo_caption-font-weight)">+9</h3>
          <span>
            country supported by the supply
          </span>
        </div>
        <mas-divider orientation="vertical"/>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 8px; flex: 1;">
          <h3 style="font-weight: var(--mas-typo_caption-font-weight)">+3000</h3>
          <span>
            Construction experts
          </span>
        </div>
      </div>
    </div>
    `,
  }),
};
