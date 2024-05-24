import { CommonModule } from "@angular/common";
import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasPagination } from "projects/components/src/lib/pagination";  
import { MasButton,MasActionDropdown,MasActionDropdownOption,MasButtonDirective,MasTextInput} from "projects/components/src/public-api";       
const argTypes = {
    type: {
     
      type: { name: 'string', required: false },
      description: 'The variant of the Pagination', 
      defaultValue: 'Numbers',
      control: 'select', 
      options: [
        'Numbers',
        'Input',
      ],
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the Pagination', 
      defaultValue: 'medium',
      control: 'radio', 
      options: ['small','medium'],
    },
    itemsPerPage: {
      type: { name: 'boolean', required: false },
      description: ' Show items Per Page',
      defaultValue: true,
      control:'boolean', 
    },
  };
 
  
export default {
  title: 'Components / Structure / Pagination',
  component: MasPagination,
  decorators: [
    moduleMetadata({
      declarations: [MasPagination, MasButton,MasActionDropdown,MasButtonDirective,MasTextInput,MasActionDropdownOption],
    }),
  ], 
  argTypes:argTypes,
  parameters: {
    docs: {
      description: {
        component: 'The Pagination component represents pagination with different variants (numbers, input) and sizes (small, medium).',
      },
    },
  },
} as Meta;

const Template: Story<MasPagination> = (args: MasPagination) => ({
  props: args,
  template: `
            <div style="height:250px; padding:0px">  
            <mas-pagination
            [type]="type"
            [size]="size"
            [itemsPerPage]="itemsPerPage"
            >
          </mas-pagination></div>
          
            `,
});
 
/** Basic : A avatar with default settings */

export const Default = Template.bind({});
Default.args = {
  type: 'Numbers',
  size: 'medium',
  itemsPerPage: true,

};


 


   
 

  
 
