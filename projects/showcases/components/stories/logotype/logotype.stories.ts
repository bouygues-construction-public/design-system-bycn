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
            <mas-logotype  [variant]="variant">
            </mas-logotype>
            `,
});
 
export const Default = Template.bind({});
Default.args = {
  variant: 'Default',

  
};


export const DefaultLogotype = () => ({
  template: `
  <mas-logotype variant="Default" >
  </mas-logotype>
  `,
});

export const BlackLogotype = () => ({
  template: `
  <mas-logotype variant="Black">
  </mas-logotype>
  `,
});

export const WhiteLogotype = () => ({
  template: `
  <mas-logotype variant="White">
  </mas-logotype>
  `,
});