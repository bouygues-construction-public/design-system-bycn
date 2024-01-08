import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasAlert  } from "projects/components/src/lib/alert";  
import { AllAlertServiceExample } from "./alert-service/alert-example.component";


 

export default {
  title: 'Components / Overlays / Alert',
  component: AllAlertServiceExample,
  decorators: [
    moduleMetadata({
      declarations: [AllAlertServiceExample],
    }),
  ], 

  parameters: {
    docs: {
      description: {
        component: 'Buttons serve as navigational elements and can be used independently or inline with text. They offer a lightweight option for navigation.',
      },
    },
  },
} as Meta;

const Template: Story<MasAlert> = (args: MasAlert) => ({
  props: args,
  template: `
    <mas-alert  [title]="title" [message]="message" [show]="show"></mas-alert>
    
            `,
});
 
/** Basic : A button with default settings */

export const Default = Template.bind({});
Default.args = {
  title: 'title',
  message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  show: false
};

export const Primary = () => ({
  template: `
  
  `,
});


   
 

  
 