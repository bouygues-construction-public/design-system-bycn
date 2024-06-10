import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasFooter} from "projects/components/src/lib/Footer";  
import { MasLogotype, MasIconButton,MasDivider} from "projects/components/src/public-api";
const argTypes = {
  Logotype: {
    type: { name: 'boolean', required: false },
    description: ' Show Logotype',
    defaultValue: false,
    control:'boolean', 
  },
  variant: {
    type: { name: 'string', required: false },
    description: 'The Variant of the Footer', 
    defaultValue: 'default',
    control: 'radio', 
    options: ['default','swapComponent'],
  },
  size: {
    type: { name: 'string', required: false },
    description: 'The size of the Footer', 
    defaultValue: 'desktop',
    control: 'radio', 
    options: ['desktop','mobile'],
  },
  MiddleFooter: {
    type: { name: 'boolean', required: false },
    description: 'Show Middle Footer',
    defaultValue: true,
    control:'boolean', 
  },
  NumberOfBloc: {
    type: { name: 'number', required: false },
    description: 'Number of blocks to display in the Footer, with a maximum of 3',
    defaultValue: 1,
    control: 'number',
  },
  blockTitles: {
    type: { name: 'array', required: false },
    description: 'Titles for each block in the Footer, with a maximum of 3 titles"',
    defaultValue: [],
    control: 'array',
  },
  blockLinks: {
    type: { name: 'array', required: false },
    description: 'Links for each block in the Footer, with a maximum of 3 sets of links',
    defaultValue: [],
    control: 'array',
  },
  SocialMedia: {
    type: { name: 'boolean', required: false },
    description: ' Social Media',
    defaultValue: false,
    control:'boolean', 
  },
  socialNetworkTitle: {
    type: { name: 'string', required: false },
    description: 'Title for the social network section',
    defaultValue: 'Our social networks',
    control: 'text',
  },
  socialMediaIcons: {
    type: { name: 'array', required: false },
    description: 'Icons for each social media link',
    defaultValue: [],
    control: 'array',
  },
  socialMediaLinks: {
    type: { name: 'array', required: false },
    description: 'URLs for each social media link',
    defaultValue: [],
    control: 'array',
  },
  personalDataTitle: {
    type: { name: 'array', required: false },
    description: 'Titles for personal data links in the Footer',
    defaultValue: [],
    control: 'array',
  },
  personalDataUrl: {
    type: { name: 'array', required: false },
    description: 'URLs for personal data links in the Footer',
    defaultValue: [],
    control: 'array',
  },



  };

  export default {
    title: 'Components / Navigations / Footer',
    component: MasFooter,
    decorators: [
      moduleMetadata({
        declarations: [MasFooter,MasLogotype,MasIconButton,MasDivider],
      }),
    ], 
    argTypes:argTypes,
    parameters: {
      docs: {
        description: {
          component: '',
        },
      },
    },
  } as Meta;
  
  const Template: Story<Partial<MasFooter>> = (args: Partial<MasFooter>) => ({
    props: args,
    template: `
    
      <mas-footer 
        [Logotype]="Logotype"
        [size]="size"
        [MiddleFooter]="MiddleFooter"
        [variant]="variant"
        [NumberOfBloc]="NumberOfBloc"
        [blockTitles]="blockTitles"
        [blockLinks]="blockLinks"
        [SocialMedia]="SocialMedia"
        [socialNetworkTitle]="socialNetworkTitle"
        [socialMediaIcons]="socialMediaIcons"
        [socialMediaLinks]="socialMediaLinks"
        [personalDataTitle]="personalDataTitle"
        [personalDataUrl]="personalDataUrl"
        >
      </mas-footer>
        

    `,
  });


  export const Default = Template.bind({});
  Default.args = {
    Logotype: true,
    size: 'desktop', 
    MiddleFooter: true, 
    variant: 'default',
    NumberOfBloc: 3,
    blockTitles: ['Title', 'Title', 'Title'],
    blockLinks: [
      [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']],
      [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']],
      [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']]
      ],
    SocialMedia: true,
    socialNetworkTitle: 'Our social networks',
    socialMediaIcons: ['mas-mas-linkedin-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-instagram-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-facebook-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-microsoft-outlook-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-microsoft-teams-logo-outlined mas-brands--outlined mas-icon'],
    socialMediaLinks: ['#url1', '#url2', '#url3', '#url4', '#url5'],
    personalDataTitle: ['Sitemap', 'Accessibility', 'Legal Notice', 'Personal data', 'Cookie management'],
    personalDataUrl: ['#url1', '#url2', '#url3', '#url4', '#url5'],
  };

 
  export const Footer_Desktop = () => ({
    template: `
        <mas-footer 
                [NumberOfBloc]=3
                [blockTitles]="['Title', 'Title', 'Title']"
                [blockLinks]="[
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']],
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']],
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']]
                                ]"
                [personalDataTitle]="['Sitemap', 'Accessibility', 'Legal Notice', 'Personal data', 'Cookie management']"
                [personalDataUrl]="['#url1', '#url2', '#url3', '#url4', '#url5']"
                [socialNetworkTitle]="'Our social networks'"
                [socialMediaIcons]="['mas-mas-linkedin-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-instagram-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-facebook-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-microsoft-outlook-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-microsoft-teams-logo-outlined mas-brands--outlined mas-icon']"
                [socialMediaLinks]="['#url1', '#url2', '#url3', '#url4', '#url5']"
                [Logotype]="true"
                [SocialMedia]="true"
                [size]="'desktop'"
                [MiddleFooter]="true"
                [variant]="'default'" >
       </mas-footer>
        
    `,
  });

  export const Footer_Mobile = () => ({
    template: `
        <mas-footer 
                [NumberOfBloc]=3
                [blockTitles]="['Title', 'Title', 'Title']"
                [blockLinks]="[
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']],
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']],
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']]
                                ]"
                [personalDataTitle]="['Sitemap', 'Accessibility', 'Legal Notice', 'Personal data', 'Cookie management']"
                [personalDataUrl]="['#url1', '#url2', '#url3', '#url4', '#url5']"
                [socialNetworkTitle]="'Our social networks'"
                [socialMediaIcons]="['mas-mas-linkedin-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-instagram-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-facebook-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-microsoft-outlook-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-microsoft-teams-logo-outlined mas-brands--outlined mas-icon']"
                [socialMediaLinks]="['#url1', '#url2', '#url3', '#url4', '#url5']"
                [Logotype]="true"
                [SocialMedia]="true"
                [size]="'mobile'"
                [MiddleFooter]="true"
                [variant]="'default'">
       </mas-footer>
    `,
  });

  export const Footer_Default_Mobile = () => ({
    template: `
        <mas-footer 
                [NumberOfBloc]=3
                [blockTitles]="['Title', 'Title', 'Title']"
                [blockLinks]="[
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']],
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']],
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']]
                                ]"
                [personalDataTitle]="['Sitemap', 'Accessibility', 'Legal Notice', 'Personal data', 'Cookie management']"
                [personalDataUrl]="['#url1', '#url2', '#url3', '#url4', '#url5']"
                [socialNetworkTitle]="'Our social networks'"
                [socialMediaIcons]="['mas-mas-linkedin-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-instagram-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-facebook-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-microsoft-outlook-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-microsoft-teams-logo-outlined mas-brands--outlined mas-icon']"
                [socialMediaLinks]="['#url1', '#url2', '#url3', '#url4', '#url5']"
                [Logotype]="true"
                [SocialMedia]="true"
                [size]="'mobile'"
                [MiddleFooter]="true"
                [variant]="'default'">
       </mas-footer>
    `,
  });


  export const Footer_Default_desktop = () => ({
    template: `
             <mas-footer 
                [NumberOfBloc]=3
                [blockTitles]="['Title', 'Title', 'Title']"
                [blockLinks]="[
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']],
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']],
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']]
                                ]"
                [personalDataTitle]="['Sitemap', 'Accessibility', 'Legal Notice', 'Personal data', 'Cookie management']"
                [personalDataUrl]="['#url1', '#url2', '#url3', '#url4', '#url5']"
                [socialNetworkTitle]="'Our social networks'"
                [socialMediaIcons]="['mas-mas-linkedin-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-instagram-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-facebook-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-microsoft-outlook-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-microsoft-teams-logo-outlined mas-brands--outlined mas-icon']"
                [socialMediaLinks]="['#url1', '#url2', '#url3', '#url4', '#url5']"
                [Logotype]="true"
                [SocialMedia]="true"
                [size]="'desktop'"
                [MiddleFooter]="true"
                [variant]="'default'">
       </mas-footer>
    `,
  });
  export const Footer_Default_desktop_Two_Blocks = () => ({
    template: `
             <mas-footer 
                [NumberOfBloc]=2
                [blockTitles]="['Title', 'Title']"
                [blockLinks]="[
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']],
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']]
                               
                                ]"
                [personalDataTitle]="['Sitemap', 'Accessibility', 'Legal Notice', 'Personal data', 'Cookie management']"
                [personalDataUrl]="['#url1', '#url2', '#url3', '#url4', '#url5']"
                [socialNetworkTitle]="'Our social networks'"
                [socialMediaIcons]="['mas-mas-linkedin-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-instagram-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-facebook-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-microsoft-outlook-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-microsoft-teams-logo-outlined mas-brands--outlined mas-icon']"
                [socialMediaLinks]="['#url1', '#url2', '#url3', '#url4', '#url5']"
                [Logotype]="true"
                [SocialMedia]="true"
                [size]="'desktop'"
                [MiddleFooter]="true"
                [variant]="'default'">
       </mas-footer>
    `,
  });

  export const Footer_Default_desktop_Without_socialMedia = () => ({
    template: `
             <mas-footer 
                [NumberOfBloc]=3
                [blockTitles]="['Title', 'Title', 'Title']"
                [blockLinks]="[
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']],
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']],
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']]
                               
                                ]"
                [personalDataTitle]="['Sitemap', 'Accessibility', 'Legal Notice', 'Personal data', 'Cookie management']"
                [personalDataUrl]="['#url1', '#url2', '#url3', '#url4', '#url5']"
                [Logotype]="true"
                [SocialMedia]="false"
                [size]="'desktop'"
                [MiddleFooter]="true"
                [variant]="'default'">
       </mas-footer>
    `,
  });
  export const Footer_Default_desktop_Without_Logotype = () => ({
    template: `
             <mas-footer 
                [NumberOfBloc]=2
                [blockTitles]="['Title', 'Title']"
                [blockLinks]="[
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']],
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']]
                               
                                ]"
                [personalDataTitle]="['Sitemap', 'Accessibility', 'Legal Notice', 'Personal data', 'Cookie management']"
                [personalDataUrl]="['#url1', '#url2', '#url3', '#url4', '#url5']"
                [socialNetworkTitle]="'Our social networks'"
                [socialMediaIcons]="['mas-mas-linkedin-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-instagram-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-facebook-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-microsoft-outlook-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-microsoft-teams-logo-outlined mas-brands--outlined mas-icon']"
                [socialMediaLinks]="['#url1', '#url2', '#url3', '#url4', '#url5']"
                [Logotype]="false"
                [SocialMedia]="true"
                [size]="'desktop'"
                [MiddleFooter]="true"
                [variant]="'default'">
       </mas-footer>
    `,
  });

  export const Footer_Default_desktop_Without_MiddleFooter = () => ({
    template: `
             <mas-footer 
                [NumberOfBloc]=2
                [blockTitles]="['Title', 'Title']"
                [blockLinks]="[
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']],
                                [['Link 1', '#'], ['Link 2', '#'], ['Link 3', '#'], ['Link 4', '#'], ['Link 5', '#']]
                               
                                ]"
                [personalDataTitle]="['Sitemap', 'Accessibility', 'Legal Notice', 'Personal data', 'Cookie management']"
                [personalDataUrl]="['#url1', '#url2', '#url3', '#url4', '#url5']"
                [socialNetworkTitle]="'Our social networks'"
                [socialMediaIcons]="['mas-mas-linkedin-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-instagram-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-facebook-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-microsoft-outlook-logo-outlined mas-brands--outlined mas-icon', 'mas-mas-microsoft-teams-logo-outlined mas-brands--outlined mas-icon']"
                [socialMediaLinks]="['#url1', '#url2', '#url3', '#url4', '#url5']"
                [Logotype]="true"
                [SocialMedia]="true"
                [size]="'desktop'"
                [MiddleFooter]="false"
                [variant]="'default'">
       </mas-footer>
    `,
  });
  export const Footer_SwapComponent_desktop: Story<Partial<MasFooter>> = (args: Partial<MasFooter>) => ({
    props: {
      ...args,
      variant: 'swapComponent',
      size: 'desktop',
    },
    template: `
      <mas-footer 
        [size]="'desktop'"
        [variant]="'swapComponent'">
      </mas-footer>
    `,
  });
  
  export const Footer_SwapComponent_mobile: Story<Partial<MasFooter>> = (args: Partial<MasFooter>) => ({
    props: {
      ...args,
      variant: 'swapComponent',
      size: 'mobile',
    },
    template: `
      <mas-footer 
        [size]="'mobile'"
        [variant]="'swapComponent'">
      </mas-footer>
    `,
  });


 
   
 

  
 
