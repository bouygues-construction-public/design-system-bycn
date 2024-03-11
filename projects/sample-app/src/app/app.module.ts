import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  MasTextInputModule,
  MasInputDropdownModule,
  MasSelectModule,
  MasButtonModule,
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
} from '@masoni/components/dist';
import { LoginComponent } from './views/login/login.component';
import { DefaultLayoutComponent } from './containers/default-layout.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DefaultLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasTextInputModule,
    MasInputDropdownModule,
    MasSelectModule,
    MasButtonModule,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
