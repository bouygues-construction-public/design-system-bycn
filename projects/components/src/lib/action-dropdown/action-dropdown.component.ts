import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
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
  },
})
export class MasActionDropdown implements OnInit, AfterContentInit {
  @Input() leadingIcon: string = '';
  @Input() labelText: string = '';
  @Input() identifier = `action-dropdown-${MasActionDropdown.dropdownCount++}`;
  @Input() disabled: boolean = false;
  @Input() size: 'M' | 'S' = 'S';

  @Output() change = new EventEmitter();
  readonly _destroy = new Subject<void>();
  @ContentChildren(MasActionDropdownOption) options: QueryList<MasActionDropdownOption>;
  static dropdownCount: number = 0;
  protected _panelOpen: boolean = false;
  private _ngZone: any;

  constructor(protected eRef: ElementRef) {}
  ngAfterContentInit(): void {
    this.options.changes.pipe(startWith(null), takeUntil(this._destroy)).subscribe(() => {
      const changeOrDestroyed = merge(this.options.changes, this._destroy);
      this.optionChanges.pipe(takeUntil(changeOrDestroyed)).subscribe((event: any) => {
        this._onSelect(event.option);
        if (this._panelOpen) {
          this.close();
          this.focusOut();
        }
      });
    });
    // todo: optimized
    this.options.map((option) => ((option.size = this.size)));
  }

  ngOnInit() {}
  readonly optionChanges: Observable<any> = defer(() => {
    const options = this.options;
    if (options) {
      return options.changes.pipe(
        startWith(options),
        switchMap(() => merge(...options.map((option) => option.change)))
      );
    }
    return this._ngZone.onStable.pipe(
      take(1),
      switchMap(() => this.optionChanges)
    );
  }) as Observable<any>;

  // todo: declare function
  onChange(event: any) {
    this.change.emit(event);
  }
  private _onSelect(option: MasActionDropdownOption): void {
    this.onChange(option);
  }
  _onToggle() {
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
}
