import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  codeURlEmail = location.origin + '/assets/codes/forms/email.txt';
  codeURlUUID = location.origin + '/assets/codes/forms/uuid.txt';
  codeURlAddress = location.origin + '/assets/codes/forms/textarea.txt';
  codeURlPassword = location.origin + '/assets/codes/forms/password.txt';

  constructor() { }

  ngOnInit(): void {
  }

}
