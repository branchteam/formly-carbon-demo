import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsRoutingModule } from './basics-routing.module';
import { SylholaComponent } from './sylhola/sylhola.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { ButtonModule, InputModule } from 'carbon-components-angular';

@NgModule({
  declarations: [SylholaComponent],
  imports: [CommonModule, BasicsRoutingModule, ReactiveFormsModule, FormlyModule, InputModule, ButtonModule],
})
export class BasicsModule {}
