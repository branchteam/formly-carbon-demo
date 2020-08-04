import { Component, ViewEncapsulation } from '@angular/core';
import { SylInput, BASIC, VALIDATIONS, FILEUPLOAD } from './syldata';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'formly-demo';
  submittedData: string;
  SYLINPUTS: SylInput[] = [BASIC, VALIDATIONS, FILEUPLOAD];
  fields: any;
  model: any;
  form = new FormGroup({});

  constructor() {
    this.update(this.SYLINPUTS[0]);
  }

  onSubmit(model: any) {
    this.submittedData = model;
    console.log('submittedData', model);
  }

  update(value: SylInput): void {
    this.fields = value.fields;
    this.model = value.model;
  }

  updateInputs(fields, model) {
    this.fields = JSON.parse(fields);
    this.model = JSON.parse(model);
  }
}
