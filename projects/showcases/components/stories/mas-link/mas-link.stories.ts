import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasLink, MasLinkDirective } from "projects/components/src/lib/link"; 
 
const argTypes = {
    href: {
      type: { name: 'string', required: true },
      description: 'The URL the link should navigate to. Default: \'#\'',
      defaultValue: '#',
      control: 'text' ,
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the link. Available options: \'small\', \'medium\', \'large\'. Default: \'medium\'', 
      defaultValue: 'medium',
      control: 'radio', 
      options: ['small', 'medium', 'large'],
    },
    standalone: {
      type: { name: 'boolean', required: false },
      description: 'Whether the link should have a standalone appearance. Default: false',
      defaultValue: false,
      control:'boolean', 
    },
    iconAlong: {
      type: { name: 'boolean', required: false },
      description: 'Whether an icon should be displayed alongside the link text. Default: false',
      defaultValue: false,
      control:'boolean',
    },
  };
 

export default {
  title: 'Components/Actions/Link',
  tags: ['autodocs'],
  component: MasLink,
  decorators: [
    moduleMetadata({
      declarations: [MasLink, MasLinkDirective],
    }),
  ], 
  argTypes:argTypes,
  parameters: {
    componentSubtitle: "The MasLink is a custom Link component serve as navigational element and can be used independently or inline with text. It offers a lightweight option for navigation.",
    docs: {
      description: {
        component: ` 
        * Links serve as navigational elements and can be used independently or inline with text. 
        * They offer a lightweight option for navigation.
        * To use the \`MasLink\`, you can pass the desired inputs to the component.
        * To use the \`MasLinkDirective\`, you can apply the \`masLink\` attribute to any HTML element and pass the desired inputs.`,
      },
    },
  },
} as Meta;

const Template: Story<MasLink> = (args: MasLink) => ({
  props: args,
  template: `<mas-link [size]="size" [standalone]="standalone" [iconAlong]="iconAlong" [href]="href">
                Link
            </mas-link>`,
});
 
/** Basic : A link with default settings */
export const Overview  = Template.bind({});
Overview .args = {};
 

  
const TemplateDirective: Story<MasLinkDirective> = (args: MasLinkDirective) => ({
    props: args,
    template: `<a masLink [size]="size" [standalone]="standalone" [iconAlong]="iconAlong" 
                    href="https://www.example.com">Link</a>`,
  
  });
   
  /** Directive : A link with default settings */
  export const Directive  = TemplateDirective.bind({});
  Directive .args = {}; 
 

  
 