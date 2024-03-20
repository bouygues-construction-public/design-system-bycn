import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormControl, Validator } from '@angular/forms';
import { MasSearchBar } from 'projects/components/src/lib/search-bar/search-bar.component';
import { MasSearchBarModule } from 'projects/components/src/lib/search-bar/search-bar.module';
import { FormsModule } from '@angular/forms';

const meta: Meta<MasSearchBar> = {
  component: MasSearchBar,
  title: 'Components/Navigation/Search Bar',
  // tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, MasSearchBarModule],
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
    template: `
    <div>
      <mas-search-bar [placeholder]="placeholder" ></mas-search-bar>
    </div>
  `,
  }),
  argTypes: { onSearch: { action: 'search' } },
};

export default meta;
type Story = StoryObj<MasSearchBar>;

export const Basic: Story = {
  args: {
    placeholder: 'Search "Suggestion"',
  },
};
export const Overview: Story = {
  render: (args: MasSearchBar) => ({
    template: `
      <div style="display: flex; gap: 16px; justify-content: center; flex-direction: column;">
        <mas-search-bar placeholder='Search "Suggestion"'></mas-search-bar>
        <mas-search-bar placeholder='Search "Suggestion"' query="What's Design System?"></mas-search-bar>
      </div>
    `,
  }),
};
