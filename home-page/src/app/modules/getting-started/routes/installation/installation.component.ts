import { Component, OnInit } from '@angular/core';
import { INSTALL_PACKAGE } from '../../constants/code-snippets';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.css']
})
export class InstallationComponent implements OnInit {
  condeInstall = INSTALL_PACKAGE;
  constructor() { }

  ngOnInit(): void {
  }

}
