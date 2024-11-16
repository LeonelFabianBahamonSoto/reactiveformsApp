import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { MaterialModule } from '../material/material.module';

// import BasicPageComponent from './pages/basicPage/basicPage.component';
import {BasicPageComponent} from "./pages/basicPage/basicPage.component"
import { SideMenuComponent } from '../shared/components/side-menu/side-menu.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BasicPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class ReactiveModule { }
