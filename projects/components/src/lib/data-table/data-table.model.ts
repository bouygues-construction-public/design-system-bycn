export class Column {
  field: string;
  header: string = '';
  sortable: boolean = false;
  width?: string;
  cellType?: CellType = CellType.TEXT;
  leadingIcon?: string = '';
  trailingIcon?: string = '';
}
export class TextCell {
  text: string | number = '';
  secondText?: string;
  leadingIcon?: string;
  trailingIcon?: string;
}
export class ActionCell {
  icon: string;
  action: Function;
}
export class CheckboxCell {
  selected: boolean;
}
export class PersonaCell {
  avatar: string;
  text: string;
  icon: string;
}
export class TagCell {
  label: string;
  icon?: string;
}
export enum CellType {
  TEXT = 'text',
  ACTION = 'action',
  CHECKBOX = 'checkbox',
  PERSIONAL = 'personal',
  TAG = 'tag',
}
