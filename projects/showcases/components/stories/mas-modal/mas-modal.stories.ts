import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MasModal } from 'projects/components/src/lib/Modal';
import { MasButton, MasButtonDirective, MasIconButton } from 'projects/components/src/public-api';
const argTypes = {
  showModal: {
    type: { name: 'boolean', required: false },
    description: ' Show modal',
    defaultValue: false,
    control: 'boolean',
  },
  title: {
    type: { name: 'string', required: false },
    description: 'The title of the modal',
  },
  content: {
    type: { name: 'string', required: true },
    description: 'The body of the modal',
  },
  confirmButtonLabel: {
    type: { name: 'string', required: false },
    description: 'the action button inside the modal to close the modal',
  },
  cancelButtonLabel: {
    type: { name: 'string', required: false },
    description: 'the action button inside the modal to confirm the modal',
  },

  size: {
    type: { name: 'string', required: false },
    description: 'The size of the Modal',
    defaultValue: 'medium',
    control: 'radio',
    options: ['small', 'medium', 'large'],
  },
  showConfirmButton: {
    type: { name: 'boolean', required: false },
    defaultValue: true,
    control: 'boolean',
  },
  showCancelButton: {
    type: { name: 'boolean', required: false },
    defaultValue: true,
    control: 'boolean',
  },
};

export default {
  title: 'Components / Overlays / Modal',
  component: MasModal,
  decorators: [
    moduleMetadata({
      declarations: [MasModal, MasButton, MasButtonDirective, MasIconButton],
    }),
  ],
  argTypes: argTypes,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  render: ({ ...args }) => ({
    props: args,
    template: `
      <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
       <mas-button variant="secondary" (click)="showModal = !showModal">Open Modal</mas-button>
        <mas-modal 
          [showModal]="showModal"
          [size]="size"
          [title]="title"
          [content]="content"
          [confirmButtonLabel]="confirmButtonLabel"
          [cancelButtonLabel]="cancelButtonLabel"
          [showConfirmButton]="showConfirmButton"
          [showCancelButton]="showCancelButton"
          (onCancelClick)="showModal=false"
          (onConfirmClick)="showModal=false">
        </mas-modal>
      </div>
    `,
  }),
} as Meta;

export const Default: StoryObj<Partial<MasModal>> = {};
Default.args = {
  showModal: false,
  size: 'small',
  title: 'It’s the title',
  content:
    'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport',
  confirmButtonLabel: 'Confirm',
  cancelButtonLabel: 'Cancel',
  showConfirmButton: true,
  showCancelButton: true,
};

export const Modal_Small = () => ({
  template: `
      <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
        <mas-button variant="secondary" (click)="showModal = !showModal">Open Modal</mas-button>
        <mas-modal 
          [showModal]="showModal"
          [size]="'small'"
          [title]="'It’s the title'"
          [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
          [confirmButtonLabel]="'Confirm'"
          [cancelButtonLabel]="'Cancel'"
          [showConfirmButton]="true"
          [showCancelButton]="true"
          (onCancelClick)="showModal=false"
          (onConfirmClick)="showModal=false">
        </mas-modal>
      </div>
    `,
});

export const Modal_Medium = () => ({
  template: `
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
  <mas-button variant="secondary" (click)="showModal = !showModal">Open Modal</mas-button>
  <mas-modal 
    [showModal]="showModal"
    [size]="'medium'"
    [title]="'It’s the title'"
    [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
    [confirmButtonLabel]="'Confirm'"
    [cancelButtonLabel]="'Cancel'"
    [showConfirmButton]="true"
    [showCancelButton]="true"
    (onCancelClick)="showModal=false"
    (onConfirmClick)="showModal=false">
  </mas-modal>
</div>
  `,
});

export const Modal_Large = () => ({
  template: `
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
  <mas-button variant="secondary" (click)="showModal = !showModal">Open Modal</mas-button>
  <mas-modal 
    [showModal]="showModal"
    [size]="'large'"
    [title]="'It’s the title'"
    [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
    [confirmButtonLabel]="'Confirm'"
    [cancelButtonLabel]="'Cancel'"
    [showConfirmButton]="true"
    [showCancelButton]="true"
    (onCancelClick)="showModal=false"
    (onConfirmClick)="showModal=false">
  </mas-modal>
</div>
  `,
});

export const Modal_WithoutButtonsSmall = () => ({
  template: `
 
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
  <mas-button variant="secondary" (click)="showModal = !showModal">Open Modal</mas-button>
  <mas-modal 
    [showModal]="showModal"
    [size]="'small'"
    [title]="'It’s the title'"
    [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
    [confirmButtonLabel]="'Confirm'"
    [cancelButtonLabel]="'Cancel'"
    [showConfirmButton]="fasle"
    [showCancelButton]="false">
  </mas-modal>
  </div>
  `,
});

export const Modal_WithoutButtonsMedium = () => ({
  template: `
 
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
  <mas-button variant="secondary" (click)="showModal = !showModal">Open Modal</mas-button>
  <mas-modal 
    [showModal]="showModal"
    [size]="'medium'"
    [title]="'It’s the title'"
    [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
    [confirmButtonLabel]="'Confirm'"
    [cancelButtonLabel]="'Cancel'"
    [showConfirmButton]="false"
    [showCancelButton]="false">
  </mas-modal>
  </div>
  `,
});

export const Modal_WithoutButtonsLarge = () => ({
  template: `
 
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
  <mas-button variant="secondary" (click)="showModal = !showModal">Open Modal</mas-button>
  <mas-modal 
    [showModal]="showModal"
    [size]="'large'"
    [title]="'It’s the title'"
    [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
    [confirmButtonLabel]="'Confirm'"
    [cancelButtonLabel]="'Cancel'"
    [buttonOptions]="'No_Buttons'"
    [showConfirmButton]="false"
    [showCancelButton]="false">
  </mas-modal>
  </div>
  `,
});

export const WithoutButtonPrimary_S = () => ({
  template: `
 
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
  <mas-button variant="secondary" (click)="showModal = !showModal">Open Modal</mas-button>
  <mas-modal 
  [showModal]="showModal"
  [size]="'small'"
  [title]="'It’s the title'"
  [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
  [confirmButtonLabel]="'Confirm'"
  [cancelButtonLabel]="'Cancel'"
  [showConfirmButton]="false"
  [showCancelButton]="true"
  (onCancelClick)="showModal=false"
  (onConfirmClick)="showModal=false">
</mas-modal>
</div>


 
  `,
});

export const WithoutButtonPrimary_M = () => ({
  template: `
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
  <mas-button variant="secondary" (click)="showModal = !showModal">Open Modal</mas-button>
  <mas-modal 
  [showModal]="showModal"
  [size]="'medium'"
  [title]="'It’s the title'"
  [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
  [confirmButtonLabel]="'Confirm'"
  [cancelButtonLabel]="'Cancel'"
  [showConfirmButton]="false"
  [showCancelButton]="true"
  (onCancelClick)="showModal=false"
  (onConfirmClick)="showModal=false">
</mas-modal>
</div>


 
  `,
});

export const WithoutButtonPrimary_L = () => ({
  template: `
 
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
  <mas-button variant="secondary" (click)="showModal = !showModal">Open Modal</mas-button>
  <mas-modal 
  [showModal]="showModal"
  [size]="'large'"
  [title]="'It’s the title'"
  [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
  [confirmButtonLabel]="'Confirm'"
  [cancelButtonLabel]="'Cancel'"
  [showConfirmButton]="false"
  [showCancelButton]="true"
  (onCancelClick)="showModal=false"
  (onConfirmClick)="showModal=false">
</mas-modal>
</div>

  `,
});

export const Modal_WithoutButtonSecondary_S = () => ({
  template: `
 
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
  <mas-button variant="secondary" (click)="showModal = !showModal">Open Modal</mas-button>
  <mas-modal 
  [showModal]="showModal"
  [size]="'small'"
  [title]="'It’s the title'"
  [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
  [confirmButtonLabel]="'Confirm'"
  [cancelButtonLabel]="'Cancel'"
  [showConfirmButton]="true"
  [showCancelButton]="false"
  (onCancelClick)="showModal=false"
  (onConfirmClick)="showModal=false">
</mas-modal>
</div>

  `,
});

export const Modal_WithoutButtonSecondary_M = () => ({
  template: `
  <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
  <mas-button variant="secondary" (click)="showModal = !showModal">Open Modal</mas-button>
  <mas-modal 
  [showModal]="showModal"
  [size]="'medium'"
  [title]="'It’s the title'"
  [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
  [confirmButtonLabel]="'Confirm'"
  [cancelButtonLabel]="'Cancel'"
  [showConfirmButton]="true"
  [showCancelButton]="false"
  (onCancelClick)="showModal=false"
  (onConfirmClick)="showModal=false" >
</mas-modal>
</div>

  `,
});

export const Modal_WithoutButtonSecondary_L = () => ({
  template: `
    <div style="padding: 200px 400px; min-width: 800px; min-height: 600px; overflow: auto;">
    <mas-button variant="secondary" (click)="showModal = !showModal">Open Modal</mas-button>
      <mas-modal 
        [showModal]="showModal"
        [size]="'large'"
        [title]="'It’s the title'"
        [content]="'The modal height will grow according to the amount of content in it. Once the modal reaches 90% of the height of the viewport, the body will begin to scroll (See scrolling behavior here beside). There will be an equal amount of space at the top and bottom of the viewport'"
        [confirmButtonLabel]="'Confirm'"
        [cancelButtonLabel]="'Cancel'"
        [showConfirmButton]="true"
        [showCancelButton]="false"
        (onCancelClick)="showModal=false"
        (onConfirmClick)="showModal=false">
      </mas-modal>
    </div>
  `,
});
