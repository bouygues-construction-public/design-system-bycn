import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasTextArea } from 'projects/components/src/lib/text-area/text-area.component';
import { MasTextAreaModule } from 'projects/components/src/lib/text-area/text-area.module';
import { MasErrorModule, MasHelperModule, MasLabelModule } from 'projects/components/src/lib/sub-elements';

const meta: Meta<MasTextArea> = {
  component: MasTextArea,
  // tags: ['autodocs'],
  title: 'Components/Forms/Text area',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasTextAreaModule, MasErrorModule, MasLabelModule, MasHelperModule],
    }),
  ],
  parameters: {
    componentSubtitle: "Text inputs enable users to share query that can't be anticipated.",
    docs: {
      description: {
        component: ` 
        * When a user needs to provide specific information that cannot be anticipated using predefined choices (operational data, living data).
        * When a user wants to input easily memorable data more efficiently using free-form text rather than a more intricate control method.`,
      },
    },
  },
  render: (args: MasTextArea) => ({
    template: `
    <mas-label [optional]="true" [infoIcon]="true" style="width:294px; height:20px;">Label text</mas-label>
    <mas-text-area [TextErrorMsg]="TextErrorMsg" [maxLength]="maxLength"   [ShowErrMsg]="ShowErrMsg" [ShowCounter]="ShowCounter" [required]="required" [disabled]="disabled" [placeholder]="placeholder" [filled]="filled">
    </mas-text-area>
    `,
    props: {
      ...args,
    },
  }),
  argTypes: {
    
    disabled: { description: 'Indicates whether the component is disabled.' },
    required: { description: 'Whether the component is required' },
    TextErrorMsg: {
      type: { name: 'string', required: false },
      description: 'The content of the error message to be displayed .', 
    },
    maxLength: {
      type: { name: 'number', required: false },
      description: 'The maxLength of the textArea', 
    },
    filled: { type: { name: 'boolean', required: false }, description: 'Whether the placeholder is filled' },
    ShowCounter: { type: { name: 'boolean', required: false}, description: 'Indicates whether a character counter should be displayed for the textarea. If set to true, a counter will be shown.' },
    ShowErrMsg: { type: { name: 'boolean', required: false}, description: 'Controls the display of an error message for the textarea. If required is true, the message appears when validation fails due to an empty field; otherwise, ShowErrMsg has no effect.' },
    

   
    placeholder: {
      type: { name: 'string', required: false },
      description: 'Placeholder to be displayed when no value has been selected.',
    },
  },
};

export default meta;
type Story = StoryObj<MasTextArea>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder text',
    disabled: false,
    required: true,
    filled: false,
    ShowCounter:true,
    ShowErrMsg:true,
    TextErrorMsg:"Set your error message here...",
    maxLength:200

  },
};

export const Overview: Story = {
  render: (args: MasTextArea) => ({
    template: `

    <mas-label [optional]="true" [infoIcon]="true" style="width:294px; height:20px;">Label text</mas-label>
    <mas-text-area [TextErrorMsg]="'Set your error message here...'" [maxLength]="200"   [ShowErrMsg]="true" [ShowCounter]="true" [required]="true" [disabled]="false" [placeholder]="'placeholder'" [filled]="false">
    </mas-text-area>
    `,
  }),
};

export const ErrorWithMessage: Story = {
  render: (args: MasTextArea) => ({
    template: `
    <mas-label [optional]="true" [infoIcon]="true" style="width:294px; height:20px;">Label text</mas-label>
    <mas-text-area [TextErrorMsg]="'Set your error message here...'" [maxLength]="200"   [ShowErrMsg]="true" [ShowCounter]="true" [required]="true"  [placeholder]="'placeholder'" [invalid]="true" >
    </mas-text-area>
    `,
  }),
};



export const Disabled: Story = {
  render: (args: MasTextArea) => ({
    template: `
    <mas-label [optional]="true" [infoIcon]="true" style="width:294px; height:20px;">Label text</mas-label>
    <mas-text-area [TextErrorMsg]="'Set your error message here...'" [maxLength]="200"   [ShowErrMsg]="true" [ShowCounter]="true" [required]="true"  [placeholder]="'placeholder'" [invalid]="true" [disabled]="true"  >
    </mas-text-area>
    `,
  }),
};



export const WidthOutErrorMessage: Story = {
  render: (args: MasTextArea) => ({
    template: `

    <mas-label [optional]="true" [infoIcon]="true" style="width:294px; height:20px;">Label text</mas-label>
    <mas-text-area [TextErrorMsg]="'Set your error message here...'" [maxLength]="200"   [ShowErrMsg]="false" [ShowCounter]="true" [required]="true" [disabled]="false" [placeholder]="'placeholder'" [filled]="false">
    </mas-text-area>
    `,
  }),
};

export const ErrorWidthOutErrorMessage: Story = {
  render: (args: MasTextArea) => ({
    template: `
    <mas-label [optional]="true" [infoIcon]="true" style="width:294px; height:20px;">Label text</mas-label>
    <mas-text-area [TextErrorMsg]="'Set your error message here...'" [maxLength]="200"   [ShowErrMsg]="false" [ShowCounter]="true" [required]="true"  [placeholder]="'placeholder'" [invalid]="true" >
    </mas-text-area>
    `,
  }),
};



export const WidthOutErrorMessageDisabled: Story = {
  render: (args: MasTextArea) => ({
    template: `
    <mas-label [optional]="true" [infoIcon]="true" style="width:294px; height:20px;">Label text</mas-label>
    <mas-text-area [TextErrorMsg]="'Set your error message here...'" [maxLength]="200"   [ShowErrMsg]="false" [ShowCounter]="true" [required]="true"  [placeholder]="'placeholder'" [invalid]="true" [disabled]="true"  >
    </mas-text-area>
    `,
  }),
};






export const NotRequired: Story = {
  render: (args: MasTextArea) => ({
    template: `

    <mas-label [optional]="true" [infoIcon]="true" style="width:294px; height:20px;">Label text</mas-label>
    <mas-text-area [TextErrorMsg]="'Set your error message here...'" [maxLength]="200"   [ShowErrMsg]="false" [ShowCounter]="true" [required]="false" [disabled]="false" [placeholder]="'placeholder'" [filled]="false">
    </mas-text-area>
    `,
  }),
};


export const NotRequiredDisabled: Story = {
  render: (args: MasTextArea) => ({
    template: `
    <mas-label [optional]="true" [infoIcon]="true" style="width:294px; height:20px;">Label text</mas-label>
    <mas-text-area [TextErrorMsg]="'Set your error message here...'" [maxLength]="200"   [ShowErrMsg]="false" [ShowCounter]="true" [required]="false"  [placeholder]="'placeholder'" [disabled]="true"  >
    </mas-text-area>
    `,
  }),
};

