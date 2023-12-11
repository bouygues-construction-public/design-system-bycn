import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasPopOver , MasPopoverDirective } from "projects/components/src/lib/popover";  

const argTypes = {
  text: {
    type: { name: 'string', required: true },
    description: 'The text to hover ', 
  },
  title: {
    type: { name: 'string', required: false },
    description: 'The title of the Popover', 
  },
  content: {
    type: { name: 'string', required: false },
    description: 'The body of the Popover', 
  },
  buttonLabel: {
    type: { name: 'string', required: false },
    description: 'the action button inside the popover to close the Popover', 
  },
    placement: {
      type: { name: 'string', required: false },
      description: 'Placement to display the Popover', 
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
   
    width: {
      type: { name: 'boolean', required: false },
      description: 'th wdith of the Popover. Default: 200px',
      defaultValue: '200px',
      control:'text', 
    },
    
  };
 

export default {
  title: 'Components / Overlays / Popover',
  component: MasPopOver,
  decorators: [
    moduleMetadata({
      declarations: [MasPopOver, MasPopoverDirective],
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

const Template: Story<MasPopOver> = (args: MasPopOver) => ({
  props: args,
  template: `
  <div style="padding:200px 400px">
    <mas-popover
      [text]="text" 
      [title]="title" 
      [content]="content" 
      [placement]="placement"
      [buttonLabel]="buttonLabel"
      [width]="width">
    </mas-popover>
  <div>

            `,
});
 
/** Basic : A button with default settings */

export const Default = Template.bind({});
Default.args = {
  text: 'Hover me!' ,
  title: 'Popover Title' ,
  content :'Popover can be used to provide additional content on an element or for discovery.', 
  placement : 'bottom-left',
  buttonLabel : 'Got it',
  width : "250px"
};

export const WithTitle = () => ({
  template: `
  <div style="padding:25px 150px 150px">
     <mas-popover
        [text]="'Popover with title'" 
        [title]="'Popover title'" 
        [content]="'Popover can be used to provide additional content on an element or for discovery.'" 
        [placement]="'bottom'"
        [buttonLabel]="'Got it'"
        >
     </mas-popover>
  </div>
  `,
});

export const WithoutTitle = () => ({
  template: `
 
  <mas-popover
  [text]="'Popover without title'" 
  [content]="'Popover can be used to provide additional content on an element or for discovery.'" 
  [placement]="'bottom'"
  [buttonLabel]="'Got it'"
  >
</mas-popover>

 
  `,
});

export const WithButton = () => ({
  template: `
  <div style="padding:25px 150px 150px">
     <mas-popover
        [text]="'Popover with button'" 
        [title]="'Popover title'" 
        [content]="'Popover content'" 
        [placement]="'bottom'"
        [buttonLabel]="'Got it'"
        >
     </mas-popover>
  </div>
  `,
});

export const WithoutButton = () => ({
  template: `
 
  <mas-popover
  [text]="'Popover without button'" 
  [title]="'Popover title'" 
  [content]="'Popover content'" 
  [placement]="'bottom'"
  >
</mas-popover>

 
  `,
});



export const Directive = () => ({
  template: `
  <div  MasPopover title="Popover content" content="Popover Content" placement="bottom" buttonLabel="Got it"
  style="margin:100px 400px 150px"> 
  Directive  </div>
  `,
});


export const TOPWithDirective = () => ({
  template: `
  <div 
  MasPopover title="Popover content" content="Popover Content" placement="top" buttonLabel="Got it"

  style="color: #0C0C0D; 
  borderRadius: 8px;  
  border: 1px solid #D7D7DB;  
  width: fit-content;
  padding: 8px 16px 8px 16px;
  cursor: pointer; 
  margin:10px"
  >TOP
  
  </div>
  `,
});

export const TOPLEFTWithDirective = () => ({
  template: `
  <div 
  MasPopover title="Popover content" content="Popover Content" placement="top-left" buttonLabel="Got it"

  style="color: #0C0C0D; 
  borderRadius: 8px;  
  border: 1px solid #D7D7DB;  
  width: fit-content;
  padding: 8px 16px 8px 16px;
  cursor: pointer; 
  margin:10px"
  >TOP LEFT
  
  </div>
  `,
});

export const TOPRIGHTWithDirective = () => ({
  template: `
  <div 
  MasPopover title="Popover content" content="Popover Content" placement="top-right" buttonLabel="Got it"

  style="color: #0C0C0D; 
  borderRadius: 8px;  
  border: 1px solid #D7D7DB;  
  width: fit-content;
  padding: 8px 16px 8px 16px;
  cursor: pointer; 
  margin:10px"
  >TOP RIGHT
  
  </div>
  `,
});

export const BOTTOMWithDirective = () => ({
  template: `
  <div 
  MasPopover title="Popover content" content="Popover Content" placement="bottom" buttonLabel="Got it"

  style="color: #0C0C0D; 
  borderRadius: 8px;  
  border: 1px solid #D7D7DB;  
  width: fit-content;
  padding: 8px 16px 8px 16px;
  cursor: pointer; 
  margin:10px"
  >BOTTOM 
  
  </div>
  `,
});


export const BOTTOMRIGHTWithDirective = () => ({
  template: `
  <div 
  MasPopover title="Popover content" content="Popover Content" placement="bottom-right" buttonLabel="Got it"

  style="color: #0C0C0D; 
  borderRadius: 8px;  
  border: 1px solid #D7D7DB;  
  width: fit-content;
  padding: 8px 16px 8px 16px;
  cursor: pointer; 
  margin:10px"
  >BOTTOM RIGHT
  
  </div>
  `,
});

export const BOTTOMLEFTWithDirective = () => ({
  template: `
  <div 
  MasPopover title="Popover content" content="Popover Content" placement="bottom-left" buttonLabel="Got it"

  style="color: #0C0C0D; 
  borderRadius: 8px;  
  border: 1px solid #D7D7DB;  
  width: fit-content;
  padding: 8px 16px 8px 16px;
  cursor: pointer; 
  margin:10px"
  >BOTTOM LEFT
  
  </div>
  `,
});

export const RIGHTWithDirective = () => ({
  template: `
  <div 
  MasPopover title="Popover content" content="Popover Content" placement="right" buttonLabel="Got it"

  style="color: #0C0C0D; 
  borderRadius: 8px;  
  border: 1px solid #D7D7DB;  
  width: fit-content;
  padding: 8px 16px 8px 16px;
  cursor: pointer; 
  margin:10px"
  >RIGHT 
  
  </div>
  `,
});

export const LEFTWithDirective = () => ({
  template: `
  <div 
  MasPopover title="Popover content" content="Popover Content" placement="left" buttonLabel="Got it"

  style="color: #0C0C0D; 
  borderRadius: 8px;  
  border: 1px solid #D7D7DB;  
  width: fit-content;
  padding: 8px 16px 8px 16px;
  cursor: pointer; 
  margin:10px"
  >LEFT 
  
  </div>
  `,
});







 
   
 

  
 