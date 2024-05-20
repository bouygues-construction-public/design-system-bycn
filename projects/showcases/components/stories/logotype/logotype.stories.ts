import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasLogotype } from "projects/components/src/lib/logotype";  




const argTypes = {

  variant: {
      description: 'The variant of the logotype', 
      defaultValue: 'Default',
      control: 'radio', 
      options: ['Default', 'Black','White'],
    },

 


  };

export default {
  title: 'Components / Foundations / Logotype',
  component: MasLogotype,
  decorators: [
    moduleMetadata({
      declarations: [MasLogotype],
    }),
  ], 
  argTypes:argTypes,
  parameters: {
    docs: {
      description: {
        component: 'The `Logotype` component represents an logo with different variants (Default,Black, White).',
      },
    },
  },
} as Meta;




const Template: Story<MasLogotype> = (args: MasLogotype) => ({
  props: args,
  template: `
            <div style="width:250px;height:127px">
                <mas-logotype  [variant]="variant">
                </mas-logotype>
            </div>
            
            `,
});
 
export const Default = Template.bind({});
Default.args = {
  variant: 'Default',

  
};


export const DefaultLogotype = () => ({
  template: `
  <div style="width:250px;height:127px">
                <mas-logotype variant="Default" >
                </mas-logotype>
            </div>
  `,
});

export const BlackLogotype = () => ({
  template: `
  <div style="width:250px;height:127px">
        <mas-logotype variant="Black">
        </mas-logotype>
  </div>
  `,
});

export const WhiteLogotype = () => ({
  template: `
  <div style="width:250px;height:127px">
        <mas-logotype variant="White">
        </mas-logotype>
  </div>
  `,
});