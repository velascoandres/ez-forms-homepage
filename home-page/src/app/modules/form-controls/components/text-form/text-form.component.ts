import { Component, OnInit } from '@angular/core';
import {
  InputTextFieldInterface,
  TextAreaFieldInterface,
  PrincipalFormFieldInterface,
} from '@gordon_freeman/ez-form/lib/interfaces/controls-interfaces';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-text-form',
  templateUrl: './text-form.component.html',
  styleUrls: ['./text-form.component.css']
})
export class TextFormComponent implements OnInit {


  data: DataInterface;

  uuidField: InputTextFieldInterface = {
    controlName: 'uuid',
    type: {
      typeName: 'input-text'
    },
    disabled: true,
  };

  passwordField: InputTextFieldInterface = {
    controlName: 'password',
    type: {
      typeName: 'input-text',
      class: 'password',
    },
    validators: [
      Validators.required,
    ]
  };

  addressField: TextAreaFieldInterface = {
    controlName: 'address',
    label: 'Address',
    placeholder: 'Enter a complete address',
    type: {
      typeName: 'textArea',
      maxLength: 20,
    },
    validators: [
      Validators.required,
    ],
  };

  emailField: InputTextFieldInterface = {
    controlName: 'email',
    validators: [
      Validators.required,
      Validators.email
    ],
    placeholder: 'Enter an email',
    type: {
      typeName: 'input-text',
      maxLength: 30,
    },
    errorMessages: {
      required: 'The email is mandatory',
      email: 'You must enter a valid email',
    },
    hint: 'Enter a valid email'
  };


  myConfiguration: PrincipalFormFieldInterface[] = [
    this.uuidField,
    this.emailField,
    this.passwordField,
    this.addressField,
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

interface DataInterface {
  uuid?: string,
  passwors?: string,
  address?: string,
  email?: string,
}

