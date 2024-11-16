import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass'],
})
export class SideMenuComponent {
  showFiller: boolean = false;

  public sidebarReactiveItems = [
    { label: 'Basicos',   description: 'Formularios básicos',   icon: 'label',  url: '/reactive/basic' },
    { label: 'Dinámicos', description: 'Formularios dinámicos', icon: 'add',    url: '/reactive/dynamic' },
    { label: 'Switches',  description: 'Formularios Switches',  icon: 'search', url: '/reactive/switches' },
  ];

  public sidebarValidations = [
    { label: 'Registro', icon: 'label',  url: '/auth/sign-up' }
  ];
}
