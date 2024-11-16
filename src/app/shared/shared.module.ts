import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveRoutingModule } from '../reactive/reactive-routing.module';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveRoutingModule,
  ],
  exports: [
    SideMenuComponent,
  ]
})
export class SharedModule { }
