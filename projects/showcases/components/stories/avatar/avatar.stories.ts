import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasAvatar } from "projects/components/src/lib/avatar";  

const icons = ['mas-user-outlined mas-people--outlined mas-icon',
               'mas-user-circle-outlined mas-people--outlined mas-icon',
               'mas-user-circle-minus-outlined mas-people--outlined mas-icon',
               'mas-user-circle-gear-outlined mas-people--outlined mas-icon',
               'mas-user-switch-outlined mas-people--outlined mas-icon',
            
               ]
               
const Img: string = 'https://s3-alpha-sig.figma.com/img/1c55/7945/b6ce93a8cf47c5fec6e01fad5d5e1e72?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JUoagnJaJBSU5uRkg9l5h24WBGN2FfuiQQjUjuGb9nUR6r0wvx5yIqX58Fu4NDjS4CXeKdgrFwh1OOmd35tCG9Eb11b5LKGkUWctH2fYOJTUrVzBX16smBppYemY2baN~dAdGsfrTejZFmmm3qsoCmd1hYfJ9R-VFkBQw8wIxAsKrNi2a0uiNF-I5jk~YOL9jF2ku0YwIvjjsb4rDo-RIjv69Z-Q-awKryODhgo6IK28T7uC9m1ncY66W53AC3b8vKn1Eh0pi14Ukp4kcMoQYefukLEcngTOpAsEcjJy4HnV-MwqBcaCr4ftW2s0Tmd8WxwDsLlDbtTn~BN-40iBPQ__';
          
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


 
export const AvatarXS = () => ({
  template: `
    <mas-avatar  type="Image" size="XS" UrlImg="https://s3-alpha-sig.figma.com/img/1c55/7945/b6ce93a8cf47c5fec6e01fad5d5e1e72?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JUoagnJaJBSU5uRkg9l5h24WBGN2FfuiQQjUjuGb9nUR6r0wvx5yIqX58Fu4NDjS4CXeKdgrFwh1OOmd35tCG9Eb11b5LKGkUWctH2fYOJTUrVzBX16smBppYemY2baN~dAdGsfrTejZFmmm3qsoCmd1hYfJ9R-VFkBQw8wIxAsKrNi2a0uiNF-I5jk~YOL9jF2ku0YwIvjjsb4rDo-RIjv69Z-Q-awKryODhgo6IK28T7uC9m1ncY66W53AC3b8vKn1Eh0pi14Ukp4kcMoQYefukLEcngTOpAsEcjJy4HnV-MwqBcaCr4ftW2s0Tmd8WxwDsLlDbtTn~BN-40iBPQ__" ></mas-avatar>
  `,
});

export const AvatarS = () => ({
  template: `
    <mas-avatar type="Image" size="S" UrlImg="https://s3-alpha-sig.figma.com/img/1c55/7945/b6ce93a8cf47c5fec6e01fad5d5e1e72?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JUoagnJaJBSU5uRkg9l5h24WBGN2FfuiQQjUjuGb9nUR6r0wvx5yIqX58Fu4NDjS4CXeKdgrFwh1OOmd35tCG9Eb11b5LKGkUWctH2fYOJTUrVzBX16smBppYemY2baN~dAdGsfrTejZFmmm3qsoCmd1hYfJ9R-VFkBQw8wIxAsKrNi2a0uiNF-I5jk~YOL9jF2ku0YwIvjjsb4rDo-RIjv69Z-Q-awKryODhgo6IK28T7uC9m1ncY66W53AC3b8vKn1Eh0pi14Ukp4kcMoQYefukLEcngTOpAsEcjJy4HnV-MwqBcaCr4ftW2s0Tmd8WxwDsLlDbtTn~BN-40iBPQ__"></mas-avatar>
  `,
});

export const AvatarM = () => ({
  template: `
    <mas-avatar type="Image" size="M" UrlImg="https://s3-alpha-sig.figma.com/img/1c55/7945/b6ce93a8cf47c5fec6e01fad5d5e1e72?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JUoagnJaJBSU5uRkg9l5h24WBGN2FfuiQQjUjuGb9nUR6r0wvx5yIqX58Fu4NDjS4CXeKdgrFwh1OOmd35tCG9Eb11b5LKGkUWctH2fYOJTUrVzBX16smBppYemY2baN~dAdGsfrTejZFmmm3qsoCmd1hYfJ9R-VFkBQw8wIxAsKrNi2a0uiNF-I5jk~YOL9jF2ku0YwIvjjsb4rDo-RIjv69Z-Q-awKryODhgo6IK28T7uC9m1ncY66W53AC3b8vKn1Eh0pi14Ukp4kcMoQYefukLEcngTOpAsEcjJy4HnV-MwqBcaCr4ftW2s0Tmd8WxwDsLlDbtTn~BN-40iBPQ__"></mas-avatar>
  `,
});

export const AvatarL = () => ({
  template: `
    <mas-avatar type="Image" size="L" UrlImg="https://s3-alpha-sig.figma.com/img/1c55/7945/b6ce93a8cf47c5fec6e01fad5d5e1e72?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JUoagnJaJBSU5uRkg9l5h24WBGN2FfuiQQjUjuGb9nUR6r0wvx5yIqX58Fu4NDjS4CXeKdgrFwh1OOmd35tCG9Eb11b5LKGkUWctH2fYOJTUrVzBX16smBppYemY2baN~dAdGsfrTejZFmmm3qsoCmd1hYfJ9R-VFkBQw8wIxAsKrNi2a0uiNF-I5jk~YOL9jF2ku0YwIvjjsb4rDo-RIjv69Z-Q-awKryODhgo6IK28T7uC9m1ncY66W53AC3b8vKn1Eh0pi14Ukp4kcMoQYefukLEcngTOpAsEcjJy4HnV-MwqBcaCr4ftW2s0Tmd8WxwDsLlDbtTn~BN-40iBPQ__" ></mas-avatar>
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
  
   
 

  
 
