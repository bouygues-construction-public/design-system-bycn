import { Directive } from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';
@Directive({
  selector:
    'mas-checkbox[required][formControlName], mas-checkbox[required][formControl], mas-checkbox[required][ngModel]',
  providers: [],
})
export class NameDirective {
  constructor() {}
}
export class MasCheckboxRequiredValidator extends CheckboxRequiredValidator {}
