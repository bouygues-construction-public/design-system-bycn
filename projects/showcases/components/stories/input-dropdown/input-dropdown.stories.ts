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
    <div style="height: 300px">
      <mas-input-dropdown [type]="type" [placeholder]="placeholder" [labelText]="labelText" [helperText]="helperText" [leadingIcon]="leadingIcon" [multi]="multi" [size]="size" [disabled]="disabled" [invalid]="invalid">
        <mas-dropdown-option value="option1" icon="mas-user-outlined mas-people--outlined">option 1</mas-dropdown-option>
        <mas-dropdown-option value="option2" icon="mas-user-outlined mas-people--outlined">option 2</mas-dropdown-option>
        <mas-dropdown-option value="option3" icon="mas-user-outlined mas-people--outlined">option 3</mas-dropdown-option>
        <mas-dropdown-option value="option4" icon="mas-user-outlined mas-people--outlined">option 4</mas-dropdown-option>
        <mas-dropdown-option value="option5" icon="mas-user-outlined mas-people--outlined">option 5</mas-dropdown-option>
        <mas-dropdown-option value="option6" icon="mas-user-outlined mas-people--outlined">option 6</mas-dropdown-option>
        <mas-dropdown-option value="option7" icon="mas-user-outlined mas-people--outlined">option 7</mas-dropdown-option>
        <mas-dropdown-option value="option8" icon="mas-user-outlined mas-people--outlined">option 8</mas-dropdown-option>
        <mas-dropdown-option value="option9" icon="mas-user-outlined mas-people--outlined">option 9</mas-dropdown-option>
        <mas-dropdown-option value="option10" icon="mas-user-outlined mas-people--outlined">option 10</mas-dropdown-option>
        <mas-dropdown-option value="option11" icon="mas-user-outlined mas-people--outlined">option 11</mas-dropdown-option>
        <mas-dropdown-option value="option12" icon="mas-user-outlined mas-people--outlined">option 12</mas-dropdown-option>
        <mas-error>Error message</mas-error>
      </mas-input-dropdown>
    </div>
    `,
  }),
  argTypes: {
    leadingIcon: {
      description:
        'A leading icon can be added inside the dropdown to give a clue to the type of data to be entered. example: mas-user-outlined mas-people--outlined',
    },
    placeholder: {
      description: 'Placeholder to be shown if no value has been selected',
    },
    helperText: {
      description: 'If required, an helper text can be displayed',
    },
    identifier: {
      description: 'A unique id for the input dropdown. If none is supplied, it will be auto-generated.',
    },
    invalid: { type: { name: 'boolean', required: false }, description: 'Whether the component is disabled' },
    disabled: { type: { name: 'boolean', required: false }, description: 'Whether the component is disabled' },
    size: {
      type: { name: 'string', required: false },
      control: 'radio',
      options: ['S', 'M'],
      description: "The size of the select. Availabel options: 'S', 'M'. Default: 'S'",
    },
    type: {
      description: "Input dropdown 's types of menu include: text, checkbox, image, icon.",
      options: ['text', 'checkbox', 'image', 'icon'],
      control: { type: 'select' },
    },
    multi: {
      description: 'Whether to select one or more items from the dropdown menu',
      type: 'boolean',
    },
    onChange: { action: 'onChange' },
  },
};

export default meta;
type Story = StoryObj<MasInputDropdown>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Basic: Story = {
  args: {
    invalid: false,
    disabled: false,
    labelText: 'Label text',
    helperText: 'Helper text',
    placeholder: 'Placeholder text...',
    leadingIcon: 'mas-user-outlined mas-people--outlined',
    multi: false,
    size: 'S',
    type: 'text',
  },
};
export const Overview: Story = {
  render: (args: MasInputDropdown) => ({
    template: `
      <div style="height: 500px">
        <mas-input-dropdown placeholder="Select dropdown item" labelText="Label text" type="text" [invalid]="true">
          <mas-dropdown-option value="option1">Dropdown item 1</mas-dropdown-option>
          <mas-dropdown-option value="option2">Dropdown item 2</mas-dropdown-option>
          <mas-dropdown-option value="option3">Dropdown item 3</mas-dropdown-option>
          <mas-dropdown-option value="option4">Dropdown item 4</mas-dropdown-option>
          <mas-dropdown-option value="option5">Dropdown item 5</mas-dropdown-option>
          <mas-error>Error Message</mas-error>
        </mas-input-dropdown>
        <br/>
        <mas-input-dropdown placeholder="Select type of function" labelText="Type of function" leadingIcon="mas-toolbox-outlined mas-commerce--outlined" type="icon" helperText="Helper text">
          <mas-dropdown-option value="option1" icon="mas-ear-outlined mas-media--outlined">Acoustic consultant</mas-dropdown-option>
          <mas-dropdown-option value="option2" icon="mas-buildings-outlined mas-commerce--outlined">Architect</mas-dropdown-option>
          <mas-dropdown-option value="option3" icon="mas-money-outlined mas-commerce--outlined">Investor</mas-dropdown-option>
          <mas-dropdown-option value="option4" icon="mas-wrench-outlined mas-commerce--outlined">Mechanical consultant</mas-dropdown-option>
          <mas-dropdown-option value="option5" icon="mas-user-outlined mas-people--outlined">Project manager</mas-dropdown-option>
          <mas-error>Error Message</mas-error>
        </mas-input-dropdown>
        <br/>
        <br/>
        <mas-input-dropdown placeholder="Select contact" labelText="Project contact" leadingIcon="mas-user-outlined mas-people--outlined" type="image">
          <mas-dropdown-option value="option1" imageUrl="/assets/img/Maxime.png">Maxime</mas-dropdown-option>
          <mas-dropdown-option value="option2" imageUrl="/assets/img/Mohamed.png">Mohamed</mas-dropdown-option>
          <mas-dropdown-option value="option3" imageUrl="/assets/img/Pauline.png">Pauline</mas-dropdown-option>
          <mas-dropdown-option value="option4" imageUrl="/assets/img/Phuc.png">Phuc</mas-dropdown-option>
          <mas-dropdown-option value="option5" imageUrl="/assets/img/Victor.png">Victor</mas-dropdown-option>
          <mas-dropdown-option value="option5" imageUrl="/assets/img/Khoa.png">Khoa</mas-dropdown-option>
        </mas-input-dropdown>
        <br/>
        <mas-input-dropdown placeholder="Select options..." labelText="Label text" [multi]="true" type="checkbox">
          <mas-dropdown-option value="option1">Dropdown item 1</mas-dropdown-option>
          <mas-dropdown-option value="option2">Dropdown item 2</mas-dropdown-option>
          <mas-dropdown-option value="option3">Dropdown item 3</mas-dropdown-option>
          <mas-dropdown-option value="option4">Dropdown item 4</mas-dropdown-option>
          <mas-dropdown-option value="option5">Dropdown item 5</mas-dropdown-option>
        </mas-input-dropdown>
      </div>
    `,
  }),
};

export const Icon: Story = {
  render: (args: MasInputDropdown) => ({
    template: `
      <div style="height: 250px">
        <mas-input-dropdown placeholder="Select type of function" labelText="Type of function" leadingIcon="mas-toolbox-outlined mas-commerce--outlined" type="icon" helperText="Helper text">
          <mas-dropdown-option value="option1" icon="mas-ear-outlined mas-media--outlined">Acoustic consultant</mas-dropdown-option>
          <mas-dropdown-option value="option2" icon="mas-buildings-outlined mas-commerce--outlined">Architect</mas-dropdown-option>
          <mas-dropdown-option value="option3" icon="mas-money-outlined mas-commerce--outlined">Investor</mas-dropdown-option>
          <mas-dropdown-option value="option4" icon="mas-wrench-outlined mas-commerce--outlined">Mechanical consultant</mas-dropdown-option>
          <mas-dropdown-option value="option5" icon="mas-user-outlined mas-people--outlined">Project manager</mas-dropdown-option>
          <mas-error>Error Message</mas-error>
        </mas-input-dropdown>
      </div>
    `,
  }),
};

export const Image: Story = {
  render: (args: MasInputDropdown) => ({
    template: `
      <div style="height: 300px">
        <mas-input-dropdown placeholder="Select contact" labelText="Project contact" leadingIcon="mas-user-outlined mas-people--outlined" type="image" helperText="Helper text">
          <mas-dropdown-option value="option1" imageUrl="/assets/img/chip-img.png">Maxime</mas-dropdown-option>
          <mas-dropdown-option value="option2" imageUrl="/assets/img/chip-img.png">Mohamed</mas-dropdown-option>
          <mas-dropdown-option value="option3" imageUrl="/assets/img/chip-img.png">Pauline</mas-dropdown-option>
          <mas-dropdown-option value="option4" imageUrl="/assets/img/chip-img.png">Phuc</mas-dropdown-option>
          <mas-dropdown-option value="option5" imageUrl="/assets/img/chip-img.png">Victor</mas-dropdown-option>
          <mas-dropdown-option value="option5" imageUrl="/assets/img/chip-img.png">Khoa</mas-dropdown-option>
        </mas-input-dropdown>
      </div>
    `,
  }),
};

export const Checkbox: Story = {
  render: (args: MasInputDropdown) => ({
    template: `
    <div style="height: 250px">
      <mas-input-dropdown placeholder="Select options..." labelText="Label text" [multi]="true" type="checkbox" helperText="Helper text">
        <mas-dropdown-option value="option1">Dropdown item 1</mas-dropdown-option>
        <mas-dropdown-option value="option2">Dropdown item 2</mas-dropdown-option>
        <mas-dropdown-option value="option3">Dropdown item 3</mas-dropdown-option>
        <mas-dropdown-option value="option4">Dropdown item 4</mas-dropdown-option>
        <mas-dropdown-option value="option5">Dropdown item 5</mas-dropdown-option>
      </mas-input-dropdown>
    </div>
    `,
  }),
};
