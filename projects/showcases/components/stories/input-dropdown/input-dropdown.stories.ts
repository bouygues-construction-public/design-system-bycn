import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasErrorModule, MasHelperModule, MasLabelModule } from 'projects/components/src/lib/sub-elements';
import { MasInputDropdownModule, MasInputDropdown } from 'projects/components/src/public-api';

const meta: Meta<MasInputDropdown> = {
  component: MasInputDropdown,
  title: 'Components/Forms/Input Dropdown',
  // tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasErrorModule, MasHelperModule, MasLabelModule, MasInputDropdownModule],
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
  render: (args: MasInputDropdown) => ({
    props: {
      ...args,
    },
    template: `
    <mas-input-dropdown placeholder="placeholder text..." labelText="label text" helperText="helper Text" leadingIcon="mas-user-outlined mas-people--outlined">
      <mas-dropdown-option value="option1" icon="mas-user-outlined mas-people--outlined">option 1</mas-dropdown-option>
      <mas-dropdown-option value="option2" icon="mas-user-outlined mas-people--outlined">option 2</mas-dropdown-option>
      <mas-dropdown-option value="option3" icon="mas-user-outlined mas-people--outlined">option 3</mas-dropdown-option>
    </mas-input-dropdown>
    `,
  }),
  argTypes: {
    change: {action: 'click'}
  },
};

export default meta;
type Story = StoryObj<MasInputDropdown>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Basic: Story = {
  args: {

  },
};
export const Overview: Story = {
  render: (args: MasInputDropdown) => ({
    template: ``,
  }),
};
