import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasNavigationBarModule, MasNavigationBar } from 'projects/components/src/public-api';

const meta: Meta<MasNavigationBar> = {
  component: MasNavigationBar,
  title: 'Components/Navigation/Navigation Bar',
  // tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasNavigationBarModule],
    }),
  ],
  parameters: {
    componentSubtitle: '',
    docs: {
      description: {
        component: ``,
      },
    },
  },
  render: (args: MasNavigationBar) => ({
    props: {
      ...args,
    },
    template: `
      <div style="height: 140px">
        <mas-navigation-bar 
          [showNavDrawer]="showNavDrawer"
          [searchBar]="searchBar" 
          [type]="type" 
          [productName]="productName" 
          [showButton]="showButton" 
          [showSetting]="showSetting" 
          [showQuestionMark]="showQuestionMark" 
          [showSearch]="showSearch" 
          [showApps]="showApps" 
          [showAccountLayer]="showAccountLayer"
          [buttonTitle]="buttonTitle"
          [avatar]="avatar"
        ></mas-navigation-bar>
      </div>
    `,
  }),
  argTypes: {
    onSearch: { action: 'search' },
    onButtonClick: {action: 'buttonClick'},
    onSearchClick: {action: 'iconSearchClick'},
    onQuestionMarkClick: {action: 'iconQuestionClick'},
    onSettingClick: {action: 'iconSettingClick'},
    onAppClick: {action: 'iconAppClick'},
    onAccountLayerClick: {action: 'accountClick'}
  },
};

export default meta;
type Story = StoryObj<MasNavigationBar>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Basic: Story = {
  args: {
    showNavDrawer: false,
    searchBar: true,
    type: 'brand',
    productName: 'Design System',
    showButton: true,
    showSetting: true,
    showQuestionMark: true,
    showSearch: true,
    showApps: true,
    showAccountLayer: true,
    buttonTitle: 'Button',
    avatar: '/assets/img/chip-img.png',
  },
};
export const Overview: Story = {
  render: (args: MasNavigationBar) => ({
    template: `
      <div style="height: 140px">
        <mas-navigation-bar 
          [showNavDrawer]="true"
          [navDrawer]="true" 
          [searchBar]="true" 
          type="product" 
          productName="Design System" 
          [showButton]="false" 
          [showSetting]="true" 
          [showQuestionMark]="true" 
          [showSearch]="true" 
          [showApps]="true" 
          [showAccountLayer]="true"
          [showButton]="true"
          buttonTitle="Button"
          avatar="/assets/img/chip-img.png"
        ></mas-navigation-bar>
      </div>
    `,
  }),
};

export const NavigationBarBrandType: Story = {
  render: (args: MasNavigationBar) => ({
    template: `
      <div style="height: 140px">
        <mas-navigation-bar 
          [showNavDrawer]="true"
          [navDrawer]="true" 
          [searchBar]="true" 
          type="brand" 
          [showButton]="false" 
          [showSetting]="true" 
          [showQuestionMark]="true" 
          [showSearch]="true" 
          [showApps]="true" 
          [showAccountLayer]="true"
          buttonTitle="Button"
          avatar="/assets/img/chip-img.png"
        ></mas-navigation-bar>
    </div>
    `,
  }),
};
export const NavigationBarProductType: Story = {
  render: (args: MasNavigationBar) => ({
    template: `
      <div style="height: 140px">
        <mas-navigation-bar 
          [showNavDrawer]="true"
          [navDrawer]="true" 
          [searchBar]="true" 
          type="product" 
          productName="Design System" 
          [showButton]="false" 
          [showSetting]="true" 
          [showQuestionMark]="true" 
          [showSearch]="true" 
          [showApps]="true" 
          [showAccountLayer]="true"
          avatar="/assets/img/chip-img.png"
        ></mas-navigation-bar>
      </div>
    `,
  }),
};
export const NavigationBarWithSearchBar: Story = {
  render: (args: MasNavigationBar) => ({
    template: `
      <div style="height: 140px">
        <mas-navigation-bar 
          [showNavDrawer]="true"
          [navDrawer]="true" 
          [searchBar]="true" 
          type="product" 
          productName="Design System" 
          [showButton]="false" 
          [showSetting]="true" 
          [showQuestionMark]="true" 
          [showSearch]="true" 
          [showApps]="true" 
          [showAccountLayer]="true"
          avatar="/assets/img/chip-img.png"
        ></mas-navigation-bar>
      </div>
    `,
  }),
};
export const NavigationBarWithButton: Story = {
  render: (args: MasNavigationBar) => ({
    template: `
      <div style="height: 140px">
        <mas-navigation-bar 
          [showNavDrawer]="true"
          [navDrawer]="true" 
          [searchBar]="true" 
          type="product" 
          productName="Design System" 
          [showButton]="true" 
          [showSetting]="true" 
          [showQuestionMark]="true" 
          [showAccountLayer]="true"
          buttonTitle="Button"
          avatar="/assets/img/chip-img.png"
        ></mas-navigation-bar>
      </div>
    `,
  }),
};
