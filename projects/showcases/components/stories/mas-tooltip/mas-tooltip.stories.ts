import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasTooltip, MasTooltipDirective  } from "projects/components/src/lib/tooltip";  
import { MasButton } from "projects/components/src/public-api";

const argTypes = {
  text: {
    type: { name: 'string', required: false },
    description: 'The text to hover ', 
  },
  content: {
    type: { name: 'string', required: true },
    description: 'The content of the Tooltip', 
  },
    placement: {
      type: { name: 'string', required: false },
      description: 'Placement to display the Tooltip', 
      defaultValue: 'bottom',
      control: 'select', 
      options: [
        'top',
        'top-left',
        'top-right',
        'bottom',
        'bottom-left',
        'bottom-right',
        'left',
        'right',
      ],
    },
  
  };
 

export default {
  title: 'Components / Overlays / Tooltip',
  component: MasTooltip,
  decorators: [
    moduleMetadata({
      declarations: [MasTooltip,MasTooltipDirective,MasButton],
    }),
  ], 
  argTypes:argTypes,
  parameters: {
    docs: {
      description: {
        component: 'Buttons serve as navigational elements and can be used independently or inline with text. They offer a lightweight option for navigation.',
      },
    },
  },
} as Meta;

const Template: Story<MasTooltip> = (args: MasTooltip) => ({
  props: args,
  template: `
  <div style="padding:60px 400px">
    <mas-tooltip
      [text]="text" 
      [content]="content" 
      [placement]="placement">
    </mas-tooltip>
  <div>

            `,
});
 
/** Basic : A button with default settings */

export const Default = Template.bind({});
Default.args = {
  text: 'Hover me!' ,
  content :'Tooltip text.', 
  placement : 'bottom-left'
};




export const Examples = () => ({
  template: `
  <div style="padding:50px 180px">
    <div style="display:flex;justifyContent:space-between;align-items:end;width:450px">
    
          <mas-tooltip
            [content]="'Sentence tooltip text'" 
            [placement]="'bottom'">
              <div style="display: flex;
              padding: 3px 6px;
              justify-content: center;
              align-items: center;
              gap: 8px;border-radius: 100px;
              background: rgba(144, 144, 162, 0.08)">
                 <i class="mas-circle-outlined mas-design--outlined"></i> 
              </div>
           
        </mas-tooltip>

        <mas-tooltip
          [content]="'Sentence tooltip text'" 
          [placement]="'bottom'">
           <mas-button>Button</mas-button>
      </mas-tooltip>

       <mas-tooltip
          [text]="'Sentence explanation'" 
          [content]="'Sentence tooltip text'" 
          [placement]="'bottom'">
      </mas-tooltip>
     
    </div>
  <div>
  `,
});


export const AllPlacements = () => ({
  template: `

  <div style="margin:70px 250px">
  <div style="display : flex;justifyContent :space-between">
    <mas-tooltip  
    style="color: #0C0C0D; 
    borderRadius: 8px;  
    border: 1px solid #D7D7DB;  
    width: fit-content;
    padding: 8px 16px 8px 16px;
    cursor: pointer; 
    margin:10px"
      [text]="'top-left'" 
      [content]="'tooltip desxription'" 
      [placement]="'top-left'">
     </mas-tooltip>

     <mas-tooltip  
     style="color: #0C0C0D; 
     borderRadius: 8px;  
     border: 1px solid #D7D7DB;  
     width: fit-content;
     padding: 8px 16px 8px 16px;
     cursor: pointer; 
     margin:10px"
      [text]="'top'" 
      [content]="'tooltip desxription'" 
      [placement]="'top'">
     </mas-tooltip>

     <mas-tooltip  
     style="color: #0C0C0D; 
     borderRadius: 8px;  
     border: 1px solid #D7D7DB;  
     width: fit-content;
     padding: 8px 16px 8px 16px;
     cursor: pointer; 
     margin:10px"
      [text]="'top-right'" 
      [content]="'tooltip desxription'" 
      [placement]="'top-right'">
     </mas-tooltip>
  
  </div>
 <div style="display : flex; justifyContent : space-between">
      <mas-tooltip  
      style="color: #0C0C0D; 
      borderRadius: 8px;  
      border: 1px solid #D7D7DB;  
      width: fit-content;
      padding: 8px 16px 8px 16px;
      cursor: pointer; 
      margin:10px"
          [text]="'left'" 
          [content]="'tooltip desxription'" 
          [placement]="'left'">
        </mas-tooltip>
          <mas-tooltip  
          style="color: #0C0C0D; 
          borderRadius: 8px;  
          border: 1px solid #D7D7DB;  
          width: fit-content;
          padding: 8px 16px 8px 16px;
          cursor: pointer; 
          margin:10px"
          [text]="'right'" 
          [content]="'tooltip desxription'" 
          [placement]="'right'">
        </mas-tooltip>

  </div>
   <div style="display:flex; justifyContent:space-between" >
   <mas-tooltip  
   [text]="'bottom-left'" 
   style="color: #0C0C0D; 
   borderRadius: 8px;  
   border: 1px solid #D7D7DB;  
   width: fit-content;
   padding: 8px 16px 8px 16px;
   cursor: pointer; 
   margin:10px"
   [content]="'tooltip desxription'" 
   [placement]="'bottom-left'">
  </mas-tooltip>

  <mas-tooltip  
  style="color: #0C0C0D; 
  borderRadius: 8px;  
  border: 1px solid #D7D7DB;  
  width: fit-content;
  padding: 8px 16px 8px 16px;
  cursor: pointer; 
  margin:10px"
   [text]="'bottom'" 
   [content]="'tooltip desxription'" 
   [placement]="'bottom'">
  </mas-tooltip>

  <mas-tooltip  
  style="color: #0C0C0D; 
  borderRadius: 8px;  
  border: 1px solid #D7D7DB;  
  width: fit-content;
  padding: 8px 16px 8px 16px;
  cursor: pointer; 
  margin:10px"
   [text]="'bottom-left'" 
   [content]="'tooltip desxription'" 
   [placement]="'bottom-right'">
  </mas-tooltip>
    
  </div>

</div>

  `,
});



export const Directive = () => ({
  template: `
  <div 
  MasTooltip content="Tooltip text" placement="right"

  style="color: #0C0C0D; 
  borderRadius: 8px;  
  border: 1px solid #D7D7DB;  
  width: fit-content;
  padding: 8px 16px 8px 16px;
  cursor: pointer; 
  margin:10px"
  >Directive
  
  </div>
  `,
});












 
   
 

  
 