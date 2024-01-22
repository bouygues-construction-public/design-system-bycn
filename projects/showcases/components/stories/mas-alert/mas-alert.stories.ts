import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasAlert, MasAlertModule  } from "projects/components/src/lib/alert";  
import { AllAlertServiceExample, DefaultAlertServiceExample } from "./alert-service/alert-example.component";


 
const meta2: Meta<DefaultAlertServiceExample> = {
  component: DefaultAlertServiceExample,
  title: 'Components / Overlays / Alert',
  decorators: [
    moduleMetadata({
      declarations: [DefaultAlertServiceExample],
      imports: [ MasAlertModule],
    }),
  ],
  render: (args: DefaultAlertServiceExample) => ({
    props: {
      ...args,
    },
  }),
};

export default meta2;
type Story = StoryObj<DefaultAlertServiceExample>;

export const Default: Story = {
  args: {},
};


   
 

  
 