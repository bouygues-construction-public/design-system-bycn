import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MasActionDropdownOption } from './action-dropdown-option.component';
import { Observable, Subject, defer, merge, startWith, switchMap, take, takeUntil } from 'rxjs';

@Component({
  selector: 'mas-action-dropdown',
  templateUrl: 'action-dropdown.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MasActionDropdown,
      multi: true,
    },
  ],
  host: {
    class: 'mas-action-dropdown',
    '[class.mas-action-dropdown--invalid]': 'invalid',
    '[class.mas-action-dropdown--disabled]': 'disabled',
    '[class.mas-action-dropdown--medium]': 'size === "M"',
    '[class.mas-action-dropdown--small]': 'size === "S"',
    role: 'select',
  },
})
export class MasActionDropdown implements AfterContentInit {
  /**
   * Leading icon for MasActionDropdown.
   */
  @Input() leadingIcon: string = '';
  /**
   * Label for MasActionDropdown.
   */
  @Input() labelText: string = '';
  /**
   * A unique id for the MasActionDropdown. If none is supplied, it will be auto-generated.
   */
  @Input() identifier = `action-dropdown-${MasActionDropdown.dropdownCount++}`;
  /**
   * Whether the component is disabled.
   */
  @Input() disabled: boolean = false;
  /**
   * The size of the action-dropdown. Availabel options: 'S', 'M'. Default: 'S'.
   */
  @Input() size: 'M' | 'S' = 'S';
  /**
   * Callback to invoke when value of MasInputDropdown changes.
   */
  @Output() onChange: EventEmitter<MasActionDropdownChangeEvent> = new EventEmitter();
  @ContentChildren(MasActionDropdownOption) options: QueryList<MasActionDropdownOption>;
  static dropdownCount: number = 0;
  protected _panelOpen: boolean = false;
  protected focusIndex: number = -1;
  readonly _destroy = new Subject<void>();
  private _ngZone: any;

  constructor(protected eRef: ElementRef) {}
  ngAfterContentInit(): void {
    this.options.changes.pipe(startWith(null), takeUntil(this._destroy)).subscribe(() => {
      const changeOrDestroyed = merge(this.options.changes, this._destroy);
      this.optionChanges.pipe(takeUntil(changeOrDestroyed)).subscribe((event: any) => {
        this._onChange(event?.originalEvent, event?.option)
        if (this._panelOpen) {
          this.close();
          this.focusOut();
        }
      });
    });
    // todo: optimized
    this.options.map((option) => (option.size = this.size));
  }

  readonly optionChanges: Observable<any> = defer(() => {
    const options = this.options;
    if (options) {
      return options.changes.pipe(
        startWith(options),
        switchMap(() => merge(...options.map((option) => option.onClick)))
      );
    }
    return this._ngZone.onStable.pipe(
      take(1),
      switchMap(() => this.optionChanges)
    );
  }) as Observable<any>;

  _onChange(event: Event, option: MasActionDropdownOption) {
    this.onChange.emit({originalEvent: event, option});
  }
  _onToggle() {
    this.focusIndex = -1;
    this._panelOpen ? this.close() : this.open();
  }
  private close() {
    this._panelOpen = false;
  }
  private open() {
    this._panelOpen = true;
  }
  private focusOut() {}
  @HostListener('document:click', ['$event'])
  clickOut(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.close();
    }
  }
  handleButtonKeydown(event: KeyboardEvent) {}
  handleOptionKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        // focus next
        event.preventDefault();
        if (this.options.get(this.focusIndex)) {
          this.options.get(this.focusIndex)!.isFocus = false;
          this.focusIndex = (this.focusIndex - 1 + this.options.length) % this.options.length;
          this.options.get(this.focusIndex)!.isFocus = true;
        }
        break;
      case 'ArrowDown':
        //focus previous
        event.preventDefault();
        if (this.options.get(this.focusIndex)) {
          this.options.get(this.focusIndex)!.isFocus = false;
          this.focusIndex = (this.focusIndex + 1) % this.options.length;
          this.options.get(this.focusIndex)!.isFocus = true;
        }
        break;
      case ' ':
        // choose that action
        event.preventDefault();
        if (this.options.get(this.focusIndex) !== undefined) {
          this._onChange(event, this.options.get(this.focusIndex)!);
          this.options.get(this.focusIndex)!.isFocus = false;
          this._onToggle();
        } else {
          this._onToggle();
          this.focusIndex = 0;
          this.options.get(this.focusIndex)!.isFocus = true;
        }
        break;
      default:
        break;
    }
  }
}
export class MasActionDropdownChangeEvent {
  originalEvent: Event;
  option?: MasActionDropdownOption 
}