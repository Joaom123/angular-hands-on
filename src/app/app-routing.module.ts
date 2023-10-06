import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiButtonsLoadingComponent } from './multi-buttons-loading/multi-buttons-loading.component';

const routes: Routes = [{ path: 'multi-buttons-loading', component: MultiButtonsLoadingComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
