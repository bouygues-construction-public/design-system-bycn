import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasChip } from "projects/components/src/lib/chip";

 

export default {
  title: 'Components/Chip',
  component: MasChip,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [MasChip],
    }),
  ], 
  parameters: {
    docs: {
      description: {
        component: 'Chips can display data or be used for short action.<br/>',
      },
    },
  },
} as Meta;

const Template: Story<MasChip> = (args: MasChip) => ({
  props: args,
});


/** Default: A chip with default settings */
export const Default = Template.bind({});
Default.args = {
  label: 'Default'
};
Default.argTypes = {
  label: {
    description: 'The label of the chip.',
    control: 'text', // Optionally, you can specify the control type for Storybook's controls addon
  },
  selectable: { 
    type: { name: 'boolean', required: false },
    description: 'Determines if the chip is selectable.',
    control: 'boolean',
    defaultValue: false,
  },
  removable: {
    type: { name: 'boolean', required: false },
    description: 'Determines if the chip is removable.',
    control: 'boolean',
    defaultValue: false,
  },
  leadingIcon: {
    type: { name: 'string', required: false },
    description: 'Icon name for the leading icon of the chip.', 
    defaultValue: null,
    control: 'select',
    options: ['', 'mas-times', 'mas-music-note'],  
  },
  actionIcon: {
    type: { name: 'string', required: false },
    description: 'Icon name for the action icon of the chip.',
    defaultValue: null,
    control: 'select',
    options: ['', 'mas-times', 'mas-music-note'],  
  },
  imageUrl: {
    type: { name: 'string', required: false },
    description: 'Imgage url to show on the left side of the chip.',
    defaultValue: null,
    control: 'select',
    options: ['', '/assets/img/chip-img.png'],  
  },
};
/** FilterChip: A chip with selectable for filtering */
export const FilterChip = Template.bind({});
FilterChip.args = { 
  label: 'Filter chip',
  selectable:true,
};
/*
FilterChip.parameters= {
  docs: {
    description: {
      story: 'Filter.',
    },
  },
};*/

/** REMOVABLE CHIP */
export const Removable = Template.bind({});
Removable.args = { 
  label: 'Input chip',
  removable:true,
};

Removable.argTypes = { onRemove: { action: 'Remove clicked' } };

/** CHIP WITH IMAGE*/
export const Image = Template.bind({});
Image.args = {
  label: 'Input chip',
    removable:true,
    imageUrl:'/assets/img/chip-img.png',
};
Removable.argTypes = { onRemove: { action: 'Remove clicked' } };
 

/** CHIP WITH LEADING ICON*/
export const leadingIcon = Template.bind({});
leadingIcon.args = {
  label: 'Input chip',
  removable:false, 
  leadingIcon:'mas-music-note',
};


/** CHIP WITH ACTION ICON*/
export const actionIcon = Template.bind({});
actionIcon.args = {
  label: 'Input chip',
    removable:false,
    actionIcon:'mas-times',
};
actionIcon.argTypes = {onAction: { action: 'Action clicked' } };


/** CHIP WITH LEADING AND ACTION ICONS*/
export const LeadingAndActionIcon = Template.bind({});
LeadingAndActionIcon.args = {
  
  label: 'Input chip',
  removable:false,
  leadingIcon:'mas-music-note',
  actionIcon:'mas-times',
};

LeadingAndActionIcon.argTypes = {onAction: { action: 'Action clicked' } };
 


 
 