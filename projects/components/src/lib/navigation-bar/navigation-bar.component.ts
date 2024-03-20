import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mas-navigation-bar',
  templateUrl: 'navigation-bar.component.html',
})
export class MasNavigationBar implements OnInit {
  @Input() showNavDrawer: boolean = false;
  @Input() navDrawer: boolean = false;
  @Output() clickNavDrawer: EventEmitter<Boolean>;
  @Input() searchBar: boolean = false;
  @Input() brandLogoHref: string = '#';
  @Input() type: 'brand' | 'product' = 'brand';
  @Input() productName: string = '';
  @Input() searchBarPlaceholder: string = '';
  public size: 'L' | 'S' | 'M';
  @Output() search: EventEmitter<any>;
  // End instance
  @Input() showButton: boolean = false;
  @Output() buttonClick = new EventEmitter<Event>();
  @Input() buttonTitle: string = '';
  @Input() showSetting: boolean = false;
  @Output() settingClick: EventEmitter<Event>;
  @Input() showQuestionMark: boolean = false;
  @Output() questionMarkClick: EventEmitter<Event>;
  @Input() showSearch: boolean = false;
  @Output() searchClick: EventEmitter<Event>;
  @Input() showApps: boolean = false; // todo: missing action and apps
  @Output() appClick: EventEmitter<Event>;
  @Input() showAccountLayer: boolean = false; // todo: missing action, picture, userInfo
  @Output() accountLayerClick: EventEmitter<Event>;

  @Input() avatar: string = '';
  constructor() {
    this.resizeNavigationBar(window.innerWidth);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.resizeNavigationBar(innerWidth);
  }
  resizeNavigationBar(innerWidth: any) {
    if (innerWidth > 1200) {
      this.size = 'L';
    } else if (innerWidth > 360 && innerWidth < 1200) {
      this.size = 'M';
    } else {
      this.size = 'S';
    }
  }

  onButtonClick(event: any) {
    this.buttonClick.emit(event);
  }
  onSettingClick(event: any) {
    this.settingClick.emit(event);
  }
  onQuestionMarkClick(event: any) {
    this.questionMarkClick.emit(event);
  }
  onSearchClick(event: any) {
    this.searchClick.emit(event);
  }
  onAppClick(event: any) {
    this.appClick.emit(event);
  }
  onAccountLayerClick(event: any) {
    this.accountLayerClick.emit(event);
  }
  onClickNavDrawer(event: boolean) {
    this.navDrawer = !event;
    this.clickNavDrawer.emit(this.navDrawer);
  }
  onSearch(event: any) {
    this.search.emit(event);
  }
  ngOnInit() {}
}
