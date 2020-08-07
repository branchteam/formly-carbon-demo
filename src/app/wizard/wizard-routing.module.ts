import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SylWizard } from './sylwizard/sylwizard.component';

const routes: Routes = [
  {
    path: 'wizard',
    component: SylWizard,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WizardRoutingModule {}
