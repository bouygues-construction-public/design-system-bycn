import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasErrorModule, MasHelperModule, MasLabelModule } from 'projects/components/src/lib/sub-elements';
import { MasDropdownModule, MasDropdown } from 'projects/components/src/public-api';

const meta: Meta<MasDropdown> = {
  component: MasDropdown,
  title: 'Components/Forms/Dropdown',
  // tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasErrorModule, MasHelperModule, MasLabelModule, MasDropdownModule],
    }),
  ],
  parameters: {
    componentSubtitle: '',
    docs: {
      description: {
        component: ``,
      },
    },
  },
  render: (args: MasDropdown) => ({
    props: {
      ...args,
    },
    template: `

    `,
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<MasDropdown>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Basic: Story = {
  args: {},
};
export const Overview: Story = {
  render: (args: MasDropdown) => ({
    template: ``,
  }),
};
