import { Component, OnInit } from '@angular/core';
import { INSTALL_PACKAGE } from '../../constants/code-snippets';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.css']
})
export class InstallationComponent implements OnInit {
  condeInstall = INSTALL_PACKAGE;
  codeURl = environment.uri + '/assets/codes/install/add-modules.ts';
  constructor() {
    console.log(this.codeURl);
  }

  ngOnInit(): void {
  }

}
