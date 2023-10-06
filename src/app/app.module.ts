import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiButtonsLoadingComponent } from './multi-buttons-loading/multi-buttons-loading.component';
import { ResponsiveFormsComponent } from './responsive-forms/responsive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiButtonsLoadingComponent,
    ResponsiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
