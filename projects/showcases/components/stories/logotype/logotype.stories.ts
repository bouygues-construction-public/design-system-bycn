import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
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
  render: ({...args}) => ({
    props: args,
    template: `
            <mas-logotype [width]="width" [height]="height"  [variant]="variant">
            </mas-logotype>
    `
  })
} as Meta;
 
export const Default: StoryObj<MasLogotype> = {}
Default.args = {
  variant: 'Default',
  width:'250px',
  height:'127px',

  
};


export const DefaultLogotype = () => ({
  template: `

        <mas-logotype variant="Default" [width]="'250px'" [height]="'127px'" >
        </mas-logotype>
  `,
});

export const BlackLogotype = () => ({
  template: `

      <mas-logotype variant="Black" [width]="'250px'" [height]="'127px'">
      </mas-logotype>

  `,
});

export const WhiteLogotype = () => ({
  template: `

      <mas-logotype variant="White" [width]="'250px'" [height]="'127px'">
      </mas-logotype>

  `,
});