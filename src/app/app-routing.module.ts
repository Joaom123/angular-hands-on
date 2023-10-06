import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiButtonsLoadingComponent } from './multi-buttons-loading/multi-buttons-loading.component';
import { ResponsiveFormsComponent } from './responsive-forms/responsive-forms.component';

const routes: Routes = [
  { path: 'multi-buttons-loading', component: MultiButtonsLoadingComponent },
  {
    path: 'responsive-forms',
    component: ResponsiveFormsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
