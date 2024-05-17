import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasAvatar } from "projects/components/src/lib/avatar";  

const icons = ['mas-user-outlined mas-people--outlined mas-icon',
               'mas-user-circle-outlined mas-people--outlined mas-icon',
               'mas-user-circle-minus-outlined mas-people--outlined mas-icon',
               'mas-user-circle-gear-outlined mas-people--outlined mas-icon',
               'mas-user-switch-outlined mas-people--outlined mas-icon',
            
               ]
               
const Img: string = 'https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_1280.png';
          
const argTypes = {
  UrlImg: {
    type: { name: 'string', required: false },
    description: 'The image of the Avatar', 
    defaultValue: Img ,
    control: 'text', 
  },
  Initial: {
    type: { name: 'string', required: false },
    description: 'The lettre intial of the Avatar', 
    defaultValue: "A" ,
    control: 'text', 
  },
  
    type: {
     
      type: { name: 'string', required: false },
      description: 'The variant of the avatar', 
      defaultValue: 'Icon',
      control: 'select', 
      options: [
        'Image',
        'Icon',
        'Initial',
      ],
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the avatar', 
      defaultValue: 'M',
      control: 'radio', 
      options: ['XS', 'S','M','L'],
    },
     icon: {
      type: { name: 'string', required: false },
      description: 'The name of the icon .',
      defaultValue: 'mas-user-outlined mas-people--outlined mas-icon',
      control:'select',
      options: ['', ...icons],
    },
 


  };
 

export default {
  title: 'Components / Indicators / Avatar',
  component: MasAvatar,
  decorators: [
    moduleMetadata({
      declarations: [MasAvatar],
    }),
  ], 
  argTypes:argTypes,
  parameters: {
    docs: {
      description: {
        component: 'The `Avatar` component represents an avatar with different variants (Avatar, Icon, Initial) and sizes (XS, S, M, L).',
      },
    },
  },
} as Meta;

const Template: Story<MasAvatar> = (args: MasAvatar) => ({
  props: args,
  template: `
            <mas-avatar
              [type]="type"
              [size]="size"
              [icon]="icon"
              [UrlImg]="UrlImg"
              [Initial]="Initial"
              >
            </mas-avatar>
            `,
});
 
/** Basic : A avatar with default settings */

export const Default = Template.bind({});
Default.args = {
  type: 'Icon',
  size: 'M',
  icon:'mas-user-outlined mas-people--outlined mas-icon',
  UrlImg: Img,
  Initial:"A",
  
};


 
export const ImageXS = () => ({
  template: `
    <mas-avatar  type="Image" size="XS" UrlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a" ></mas-avatar>
  `,
});

export const ImageS = () => ({
  template: `
    <mas-avatar type="Image" size="S" UrlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>
  `,
});

export const ImageM = () => ({
  template: `
    <mas-avatar type="Image" size="M" UrlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>
  `,
});

export const ImageL = () => ({
  template: `
    <mas-avatar type="Image" size="L" UrlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a" ></mas-avatar>
  `,
});

export const IconXS = () => ({
  template: `
  <mas-avatar type="Icon" size="XS" icon="mas-user-outlined mas-people--outlined mas-icon" ></mas-avatar>
  `,
});

export const IconS= () => ({
  template: `
  <mas-avatar type="Icon" size="S" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>
  `,
});
export const IconM = () => ({
  template: `
  <mas-avatar type="Icon" size="M" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>
  `,
});
export const IconL = () => ({
  template: `
  <mas-avatar type="Icon" size="L" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>
  `,
});



export const InitialXS = () => ({
  template: `
  <mas-avatar type="Initial" size="XS" Initial="A" ></mas-avatar>
  `,
});

export const InitialS = () => ({
  template: `
  <mas-avatar type="Initial" size="S" Initial="A"></mas-avatar>
  `,
});
export const InitialM = () => ({
  template: `
  <mas-avatar type="Initial" size="M" Initial="A"></mas-avatar>
  `,
});
export const InitialL = () => ({
  template: `
  <mas-avatar type="Initial" size="L" Initial="A" ></mas-avatar>
  `,
});

export const Directive = () => ({
  template: `
    <a MasAvatar [size]="L"></a>
  `,
});
  
   
 

  
 