import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiButtonsLoadingComponent } from './multi-buttons-loading/multi-buttons-loading.component';
import { ResponsiveFormsComponent } from './responsive-forms/responsive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReusableFilterFormComponent } from './responsive-forms/reusable-filter-form/reusable-filter-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiButtonsLoadingComponent,
    ResponsiveFormsComponent,
    ReusableFilterFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
