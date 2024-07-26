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
  render: ({...args}) => ({
    props: args
  }),
};

export default meta;
type Story = StoryObj<DefaultToastServiceExample>;

export const Default: Story = {
  args: {},
  render: () => ({
    template: `
      <div style="height: 200px">
        <default-toast-sevice-example></default-toast-sevice-example>
      </div>
    `
  })
};
  
 

  
 