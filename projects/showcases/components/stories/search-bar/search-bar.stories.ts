import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormControl, Validator } from '@angular/forms';
import { MasSearchBar } from 'projects/components/src/lib/search-bar/search-bar.component';
import { MasSearchBarModule } from 'projects/components/src/lib/search-bar/search-bar.module';
const meta: Meta<MasSearchBar> = {
  component: MasSearchBar,
  title: 'Components/Navigation/Search Bar',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasSearchBarModule],
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
  render: (args: MasSearchBar) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    
  },
};

export default meta;
type Story = StoryObj<MasSearchBar>;

export const Basic: Story = {
  args: {
    placeholder: '',
    query: '',
    
    disabled: false,
  },
};
export const Overview: Story = {
  render: (args: MasRadioButton) => ({
    template: `
    
    `,
  }),
};