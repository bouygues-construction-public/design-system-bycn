import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasModal} from "projects/components/src/lib/Modal";  
import { MasButton,MasButtonDirective } from "projects/components/src/public-api";
const argTypes = {
  title: {
    type: { name: 'string', required: false },
    description: 'The title of the modal', 
  },
  content: {
    type: { name: 'string', required: false },
    description: 'The body of the modal', 
  },
  buttonLabelprimary: {
    type: { name: 'string', required: false },
    description: 'the action button inside the modal to close the modal', 
  },
  buttonLabelsecondary: {
    type: { name: 'string', required: false },
    description: 'the action button inside the modal to confirm the modal', 
  },
  size: {
    type: { name: 'string', required: false },
    description: 'The size of the Modal', 
    defaultValue: 'M',
    control: 'radio', 
    options: ['small','medium','large'],
  },
  buttonOptions: {
    type: { name: 'string', required: true },
    description: 'Select which buttons to display',
    defaultValue: 'Show_Buttons',
    control: 'select',
    options: [
      'Show_Buttons',
      'Show_Primary_Button',
      'Show_Secondary_Button',
      'No_Buttons',
    ],
  },


  };
 

  export default {
    title: 'Components / Overlays / Modal',
    component: MasModal,
    decorators: [
      moduleMetadata({
        declarations: [MasModal, MasButton,MasButtonDirective],
      }),
    ], 
    argTypes:argTypes,
    parameters: {
      docs: {
        description: {
          component: '',
        },
      },
    },
  } as Meta;
  
  const Template: Story<Partial<MasModal>> = (args: Partial<MasModal>) => ({
    props: args,
    template: `
      <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
        <mas-modal 
          [size]="size"
          [title]="title"
          [content]="content"
          [buttonLabelprimary]="buttonLabelprimary"
          [buttonLabelsecondary]="buttonLabelsecondary"
          [buttonOptions]="buttonOptions"
          (cancel)="closeModal()"
          (confirm)="confirmAction()" >
        

         
          
        </mas-modal>
        
      </div>
    `,
  });
  export const Default = Template.bind({});
  Default.args = {
    size: 'small',
    title: 'It’s the title',
    content: 'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport',
    buttonLabelprimary: 'Confirm',
    buttonLabelsecondary: 'Cancel',
    buttonOptions: 'Show_Buttons',

  };

export const Modal_Small = () => ({
  template: `
<div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
        <mas-modal 
          [size]="'small'"
          [title]="'It’s the title'"
          [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
          [buttonLabelprimary]="'Confirm'"
          [buttonLabelsecondary]="'Cancel'"
          [buttonOptions]="'Show_Buttons'"
          (cancel)="closeModal()"
          (confirm)="confirmAction()" >
        

         
          
        </mas-modal>
        
      </div>
  `,
});

export const Modal_Medium = () => ({
  template: `
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
  <mas-modal 
    [size]="'medium'"
    [title]="'It’s the title'"
    [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
    [buttonLabelprimary]="'Confirm'"
    [buttonLabelsecondary]="'Cancel'"
    [buttonOptions]="'Show_Buttons'"
    (cancel)="closeModal()"
    (confirm)="confirmAction()" >

  </mas-modal>
  
</div>

 
  `,
});

export const Modal_Large = () => ({
  template: `
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
  <mas-modal 
    [size]="'large'"
    [title]="'It’s the title'"
    [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
    [buttonLabelprimary]="'Confirm'"
    [buttonLabelsecondary]="'Cancel'"
    [buttonOptions]="'Show_Buttons'"
    (cancel)="closeModal()"
    (confirm)="confirmAction()" >

  </mas-modal>
  
</div>

  `,
});




export const Modal_WithoutButtonsSmall = () => ({
  template: `
 
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
  <mas-modal 
    [size]="'small'"
    [title]="'It’s the title'"
    [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
    [buttonLabelprimary]="'Confirm'"
    [buttonLabelsecondary]="'Cancel'"
    [buttonOptions]="'No_Buttons'"
    (cancel)="closeModal()"
    (confirm)="confirmAction()" >
  
  </mas-modal>
  </div>

 
  `,
});

export const Modal_WithoutButtonsMedium = () => ({
  template: `
 
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
  <mas-modal 
    [size]="'medium'"
    [title]="'It’s the title'"
    [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
    [buttonLabelprimary]="'Confirm'"
    [buttonLabelsecondary]="'Cancel'"
    [buttonOptions]="'No_Buttons'"
    (cancel)="closeModal()"
    (confirm)="confirmAction()" >
  
  </mas-modal>
  </div>

 
  `,
});

export const Modal_WithoutButtonsLarge = () => ({
  template: `
 
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
  <mas-modal 
    [size]="'large'"
    [title]="'It’s the title'"
    [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
    [buttonLabelprimary]="'Confirm'"
    [buttonLabelsecondary]="'Cancel'"
    [buttonOptions]="'No_Buttons'"
    (cancel)="closeModal()"
    (confirm)="confirmAction()" >
  
  </mas-modal>
  </div>

 
  `,
});

export const WithoutButtonPrimary_S = () => ({
  template: `
 
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
<mas-modal 
  [size]="'small'"
  [title]="'It’s the title'"
  [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
  [buttonLabelprimary]="'Confirm'"
  [buttonLabelsecondary]="'Cancel'"
  [buttonOptions]="'Show_Secondary_Button'"
  (cancel)="closeModal()"
  (confirm)="confirmAction()" >

</mas-modal>
</div>


 
  `,
});


export const WithoutButtonPrimary_M = () => ({
  template: `
 
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
<mas-modal 
  [size]="'medium'"
  [title]="'It’s the title'"
  [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
  [buttonLabelprimary]="'Confirm'"
  [buttonLabelsecondary]="'Cancel'"
  [buttonOptions]="'Show_Secondary_Button'"
  (cancel)="closeModal()"
  (confirm)="confirmAction()" >

</mas-modal>
</div>


 
  `,
});


export const WithoutButtonPrimary_L = () => ({
  template: `
 
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
<mas-modal 
  [size]="'large'"
  [title]="'It’s the title'"
  [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
  [buttonLabelprimary]="'Confirm'"
  [buttonLabelsecondary]="'Cancel'"
  [buttonOptions]="'Show_Secondary_Button'"
  (cancel)="closeModal()"
  (confirm)="confirmAction()" >

</mas-modal>
</div>

  `,
});



export const Modal_WithoutButtonSecondary_S = () => ({
  template: `
 
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
<mas-modal 
  [size]="'small'"
  [title]="'It’s the title'"
  [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
  [buttonLabelprimary]="'Confirm'"
  [buttonLabelsecondary]="'Cancel'"
  [buttonOptions]="'Show_Primary_Button'"
  (cancel)="closeModal()"
  (confirm)="confirmAction()" >

</mas-modal>
</div>

  `,
});


export const Modal_WithoutButtonSecondary_M = () => ({
  template: `
 
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
<mas-modal 
  [size]="'medium'"
  [title]="'It’s the title'"
  [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
  [buttonLabelprimary]="'Confirm'"
  [buttonLabelsecondary]="'Cancel'"
  [buttonOptions]="'Show_Primary_Button'"
  (cancel)="closeModal()"
  (confirm)="confirmAction()" >

</mas-modal>
</div>

  `,
});


export const Modal_WithoutButtonSecondary_L = () => ({
  template: `
 
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
<mas-modal 
  [size]="'large'"
  [title]="'It’s the title'"
  [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
  [buttonLabelprimary]="'Confirm'"
  [buttonLabelsecondary]="'Cancel'"
  [buttonOptions]="'Show_Primary_Button'"
  (cancel)="closeModal()"
  (confirm)="confirmAction()" >

</mas-modal>
</div>

  `,
});









 
   
 

  
 