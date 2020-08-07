import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SylholaComponent } from './sylhola/sylhola.component';

const routes: Routes = [
  {
    path: 'basics',
    component: SylholaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicsRoutingModule {}
