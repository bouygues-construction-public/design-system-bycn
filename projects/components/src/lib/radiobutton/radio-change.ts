import { MasRadioButton } from './radiobutton.component';

export interface RadioButtonClickEvent {
    originalEvent: Event;
    source: MasRadioButton | null;
    value: string;
  }