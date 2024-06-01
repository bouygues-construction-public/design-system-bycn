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
    totalItems: {
      type: { name: 'string', required: false },
      description: 'total Items', 
      defaultValue: 500 ,
      control: 'text', 
    },
    initialPageSize: {
      type: { name: 'string', required: false },
      description: 'Initial Page Size', 
      defaultValue: 24,
      control: 'text', 
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
            [totalItems]="totalItems"
            [initialPageSize]="initialPageSize"
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
  totalItems:200,
  initialPageSize:24,

};


 

export const PaginationSmallNumbers = () => ({
  template: `
  <div style="height:250px; padding:0px">
      <mas-pagination
          [type]="'Numbers'"
          [size]="'small'"
          [itemsPerPage]="true"
          [totalItems]="240"
          [initialPageSize]="24">
      </mas-pagination>
 </div>
  `,
});
export const PaginationSmallInput = () => ({
  template: `
  <div style="height:250px; padding:0px">
      <mas-pagination
          [type]="'Input'"
          [size]="'small'"
          [itemsPerPage]="true"
          [totalItems]="240"
          [initialPageSize]="24">
      </mas-pagination>
  </div> 
  `,
});   
 
export const PaginationMediumNumbers = () => ({
  template: `
  <div style="height:250px; padding:0px">
      <mas-pagination
          [type]="'Numbers'"
          [size]="'medium'"
          [itemsPerPage]="true"
          [totalItems]="240"
          [initialPageSize]="24">
      </mas-pagination>
    </div>  
  `,
});
export const PaginationMediumInput = () => ({
  template: `
  <div style="height:250px; padding:0px">
      <mas-pagination
          [type]="'Input'"
          [size]="'medium'"
          [itemsPerPage]="true"
          [totalItems]="240"
          [initialPageSize]="24">
      </mas-pagination>
    </div>  
  `,
});   
  
 
export const PaginationNumber = () => ({
  template: `
  <div style="height:250px; padding:0px">
      <mas-pagination
          [type]="'Numbers'"
          [size]="'small'"
          [itemsPerPage]="true"
          [totalItems]="240"
          [initialPageSize]="24">
      </mas-pagination>
  </div>
  `,
});
export const PaginationInput = () => ({
  template: `
  <div style="height:250px; padding:0px">
        <mas-pagination
            [type]="'Input'"
            [size]="'small'"
            [itemsPerPage]="true"
            [totalItems]="240"
            [initialPageSize]="24"
            >
        </mas-pagination>
  </div>
  `,
}); 