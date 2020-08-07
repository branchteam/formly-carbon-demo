import { FormlyFieldConfig } from '@ngx-formly/core';

export interface SylInput {
  fields: FormlyFieldConfig[];
  model: any;
  name: string;
}

export const VALIDATIONS: SylInput = {
  name: 'Validations',
  fields: [
    {
      key: 'ip',
      type: 'input',
      templateOptions: {
        label: 'IP Address (pattern = /(d{1,3}.){3}d{1,3}/)',
        pattern: /(\d{1,3}\.){3}\d{1,3}/,
        required: true,
      },
      validation: {
        messages: {
          pattern: (error, field: FormlyFieldConfig) => `"${field.formControl.value}" is not a valid IP Address`,
        },
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        placeholder: 'Enter email',
        required: true,
      },
      validation: {
        messages: {
          pattern: (error, field: FormlyFieldConfig) => `"${field.formControl.value}" is not a valid email Address`,
        },
      },
    },
    {
      key: 'date1',
      type: 'input',
      templateOptions: {
        label: 'Date',
        type: 'date',
      },
    },
  ],
  model: {
    email: 'advance@cateina.com',
  },
};

export const BASIC: SylInput = {
  name: 'Basic',
  fields: [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter name',
      },
    },
    {
      key: 'about',
      type: 'textarea',
      templateOptions: {
        label: 'About you',
        placeholder: 'Thou shall write about thyself ',
        rows: 5,
        cols: 20,
      },
    },
    // {
    //   key: 'email',
    //   type: 'input',
    //   templateOptions: {
    //     type: 'email',
    //     label: 'Email',
    //     placeholder: 'Enter email',
    //   },
    // },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Age',
        placeholder: 'Enter thou age',
      },
    },
    {
      key: 'date_of_birth',
      type: 'datepicker',
      templateOptions: {
        label: 'Date of birth (DATEPICKER NEEDS SOME WORK)',
        placeholder: 'ex: 12/4/1984',
        description: 'Thou shall put thy day of birth',
        required: true,
      },
    },
    {
      key: 'time_of_birth',
      type: 'timepicker',
      templateOptions: {
        label: 'Time of birth (TIMEPICKER NEEDS SOME WORK)',
        placeholder: '7:08',
        description: 'Thou shall put thy time of birth',
        required: true,
      },
    },
    {
      key: 'terms',
      type: 'checkbox',
      templateOptions: {
        label: 'Accept terms',
        description: 'Please accept our terms',
        required: true,
      },
    },
    {
      key: 'daynight',
      type: 'toggle',
      templateOptions: {
        label: 'Day of Night?',
        description: 'Please accept thy destiny',
        onText: 'day',
        offText: 'night',
        required: true,
      },
    },
    {
      key: 'book',
      type: 'select',
      templateOptions: {
        label: 'Book',
        placeholder: 'Choose your fav',
        defaultValue: 'git pro',
        description: 'Thou shall choose a manuscript',
        options: [
          { value: 'Harry', label: 'Harry potter' },
          { value: '1984', label: '1984' },
          { value: 'git pro', label: 'Git pro' },
        ],
      },
    },
    {
      key: 'gender',
      type: 'radio',
      templateOptions: {
        label: 'Gender',
        placeholder: 'Placeholder',
        description: 'Fill in your gender',
        options: [
          { value: 1, label: 'Male' },
          { value: 2, label: 'Female' },
          { value: 3, label: "I don't want to share that" },
        ],
      },
    },
  ],
  model: {
    name: 'basic',
  },
};

export const FILEUPLOAD: SylInput = {
  name: 'File Upload',
  fields: [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'WIP',
        placeholder: 'WIP',
        required: true,
      },
    },
  ],
  model: {
    email: 'WIP@cateina.com',
  },
};
