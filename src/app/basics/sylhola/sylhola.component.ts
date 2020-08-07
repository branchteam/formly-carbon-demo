import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SylInput, BASIC, VALIDATIONS, FILEUPLOAD } from './syldata';

@Component({
  selector: 'app-sylhola',
  templateUrl: './sylhola.component.html',
  styleUrls: ['./sylhola.component.scss'],
})
export class SylholaComponent implements OnInit {
  submittedData: string;
  SYLINPUTS: SylInput[] = [BASIC, VALIDATIONS, FILEUPLOAD];
  fields: any;
  model: any;
  form = new FormGroup({});

  constructor() {
    this.update(this.SYLINPUTS[0]);
  }
  ngOnInit() {}

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
