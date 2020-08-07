import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Step } from 'carbon-components-angular/progress-indicator/progress-indicator-step.interface';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormArray, FormGroup } from '@angular/forms';

export interface StepType {
  step: Step;
  fields: Array<FormlyFieldConfig>;
}

@Component({
  selector: 'app-sylwizard',
  templateUrl: './sylwizard.component.html',
  styleUrls: ['./sylwizard.component.scss'],
})
export class SylWizard implements AfterViewInit {
  activeStep = 0;
  model = {};
  steps: StepType[] = [
    {
      step: {
        text: 'Gang Details',
        state: ['current'],
      },
      fields: [
        {
          key: 'gangname',
          type: 'input',
          templateOptions: {
            label: 'Gang Name',
            required: true,
          },
        },
        {
          key: 'memebers',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Members Count',
            placeholder: 'How many mushrooms are you?',
          },
        },
      ],
    },
    {
      step: {
        text: 'Target Village',
        state: ['incomplete'],
      },
      fields: [
        {
          key: 'target',
          type: 'input',
          templateOptions: {
            label: 'Target Village',
            required: true,
          },
        },
      ],
    },
    {
      step: {
        text: 'Attack Logistics',
        state: ['incomplete'],
      },
      fields: [
        {
          key: 'day',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Day of Attack',
            required: true,
          },
        },
      ],
    },
  ];

  form = new FormArray(this.steps.map(() => new FormGroup({})));
  stepsForIndicator: Array<Step> = this.steps.map((x) => x.step);
  options = this.steps.map(() => new Object() as FormlyFormOptions);

  prevStep(step: number) {
    this.activeStep -= step;
    if (this.activeStep < 0) this.activeStep = 0;
  }
  nextStep(step: number) {
    this.activeStep += step;
    if (this.activeStep >= this.steps.length) this.activeStep = this.steps.length - 1;
    this.cd.detectChanges();
  }

  submit() {
    console.log('%c hola from leafteam', 'color:crimson;font-weight:600;font-size:1.2rem');
    console.log(this.model);
  }

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
