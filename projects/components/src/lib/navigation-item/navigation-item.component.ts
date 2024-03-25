import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mas-navigation-item',
  templateUrl:'./navigation-item.component.html'
})
export class MasNavigationItem implements OnInit{

  @Input() label: String = "Label text";
  @Input() showIcon: boolean = false;
  @Input() iconItem: string | undefined = "mas-circle-filled mas-design--filled"
  @Input()  showLabel : boolean = true;
  @Input()  disabled : boolean = false;
  @Input()  selected : boolean = false;

  @Input()  collapsed : boolean = false;
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

  ngOnInit(): void {
    console.log(this.badgeContent)
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

}
