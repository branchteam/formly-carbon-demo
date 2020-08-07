import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyCarbonModule } from '@ngx-formly/carbon';
import { ButtonModule, InputModule } from 'carbon-components-angular';

import { WizardModule } from './wizard/wizard.module';
import { BasicsModule } from './basics/basics.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    WizardModule,
    BasicsModule,

    BrowserModule,
    AppRoutingModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
    FormlyCarbonModule,

    InputModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
