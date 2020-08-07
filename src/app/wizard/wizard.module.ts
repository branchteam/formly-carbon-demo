import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { SylWizard } from './sylwizard/sylwizard.component';
import { FormlyModule } from '@ngx-formly/core';
import { ProgressIndicatorModule, PaginationModule, ButtonModule } from 'carbon-components-angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SylWizard],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WizardRoutingModule,
    FormlyModule,
    ProgressIndicatorModule,
    PaginationModule,
    ButtonModule,
  ],
})
export class WizardModule {}
