import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasToast, MasToastModule } from "projects/components/src/lib/toast";  
import { DefaultToastServiceExample } from "./toast-service/alert-example.component";


  
const meta: Meta<DefaultToastServiceExample> = {
  component: DefaultToastServiceExample,
  title: 'Components / Overlays / Toast',
  decorators: [
    moduleMetadata({
      declarations: [DefaultToastServiceExample],
      imports: [ MasToastModule],
    }),
  ],
  render: (args: DefaultToastServiceExample) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<DefaultToastServiceExample>;

export const Default: Story = {
  args: {},
};
  
 

  
 