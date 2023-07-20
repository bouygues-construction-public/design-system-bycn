import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasSelect } from 'projects/components/src/lib/select/select.component';
import { MasSelectModule } from 'projects/components/src/lib/select/select.module';
import { FormControl, Validators } from '@angular/forms';
const meta: Meta<MasSelect> = {
  component: MasSelect,
  title: 'Components/Select',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasSelectModule],
    }),
  ],
  render: (args: MasSelect) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<MasSelect>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Overview: Story = {
  args: {},
};
