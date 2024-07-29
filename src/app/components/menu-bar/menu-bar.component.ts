import { Component } from '@angular/core';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { faFaceGrinWink, faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

    iconeFacebook: any = faFaceGrinWink;

}
