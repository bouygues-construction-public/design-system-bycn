import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  MasTextInputModule,
  MasInputDropdownModule,
  MasSelectModule,
  MasButtonModule,
  MasIconButtonModule,
  MasRadioButtonModule,
  MasToggleButtonModule,
  MasTagModule,
  MasLinkModule,
  MasChipModule,
  MasBadgeModule,
  MasLabelModule,
  MasHelperModule,
  MasErrorModule,
  MasNavigationBarModule,
  MasDividerModule,
  MasTabModule,
  MasActionDropdownModule,
  MasCheckboxModule,
} from '@masoni/components/dist';
import { LoginComponent } from './views/login/login.component';
import { DefaultLayoutComponent } from './containers/default-layout.component';
import { FormComponent } from './views/form/form.component';
import { SettingComponent } from './views/setting/setting.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LoginComponent, FormComponent, SettingComponent, DefaultLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasTextInputModule,
    MasInputDropdownModule,
    MasSelectModule,
    MasButtonModule,
    MasIconButtonModule,
    MasRadioButtonModule,
    MasToggleButtonModule,
    MasTagModule,
    MasLinkModule,
    MasChipModule,
    MasBadgeModule,
    MasLabelModule,
    MasHelperModule,
    MasErrorModule,
    MasNavigationBarModule,
    MasDividerModule,
    MasTabModule,
    MasCheckboxModule,
    MasTabModule,
    MasActionDropdownModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
