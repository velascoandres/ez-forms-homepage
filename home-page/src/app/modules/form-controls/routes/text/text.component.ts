import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  codeURlEmail = environment.uri + '/assets/codes/forms/email.txt';
  codeURlUUID = environment.uri + '/assets/codes/forms/uuid.txt';
  codeURlAddress = environment.uri + '/assets/codes/forms/textarea.txt';
  codeURlPassword = environment.uri + '/assets/codes/forms/password.txt';

  constructor() { }

  ngOnInit(): void {
  }

}
