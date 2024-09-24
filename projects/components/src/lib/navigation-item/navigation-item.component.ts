import { Component, Input } from '@angular/core';

@Component({
  selector: 'mas-navigation-item',
  templateUrl:'./navigation-item.component.html'
})
export class MasNavigationItem {

  /**
   * Label for MasNavigationItem.
   */
  @Input() label: String = "";
  /**
   * Whether to show icon.
   */
  @Input() showIcon: boolean = false;
  /**
   * The name of the icon to display on the left side of MasNavigationItem.
   */
  @Input() iconItem: string | undefined = "mas-circle-filled mas-design--filled"
  /**
   * Whether to show label.
   */
  @Input() showLabel : boolean = true;
  /**
   * Whether the navigation Item should be disabled.
   */
  @Input() disabled : boolean = false;
  /**
   * Whether the navigation Item is selected.
   */
  @Input() selected : boolean = false;
  /**
   * For extenal link, use this attribute instead of routerLink
   */
  @Input() url: string;

  /**
   * Whether the navigation menu is collapsed.
   */
  @Input() collapsed : boolean = false;
  @Input() submenu : boolean = false

  @Input() badgeContent : string | undefined  
  @Input() submenuIcon : string | undefined  = "mas-caret-down-outlined mas-arrows--outlined"

  selectedVariant : String = "default" ;
  itemIconStyle = this.selected ? "filled" : "outlined"
  
  get classes(): { [key: string]: boolean } {
    return {
      'mas-navigation-item': true,
      'mas-navigation-item--collapsed': this.collapsed,
      [`mas-navigation-item--${this.selectedClass()}`]: true,
     
    };
  }

  selectedClass() : string {
    if(this.selected){
      if(this.submenu) return "selected-submenu"
      else             return "selected" 
    } 
    else{ return "default"}
  }

  adaptedIcon(): string {
    if (this.iconItem) {
      this.iconItem = this.selected ? this.iconItem.replace(/outlined/g, 'filled')
                                    : this.iconItem.replace(/filled/g, 'outlined');
      return this.iconItem;
    } else {
      return '';
    }
  }

  onClick() {
    console.log("navigate:", this.url)
    if(this.url !== undefined) {
      window.location.href = this.url;
    }
  }
}
