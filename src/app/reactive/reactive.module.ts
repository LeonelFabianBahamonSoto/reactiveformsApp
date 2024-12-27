import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { SharedModule } from '../shared/shared.module';

// import { SideMenuComponent } from '../shared/components/side-menu/side-menu.component';
// import BasicPageComponent from './pages/basicPage/basicPage.component';
import { DynamicPageComponent } from './pages/dynamicPage/dynamicPage.component';
import {BasicPageComponent} from "./pages/basicPage/basicPage.component"

@NgModule({
  declarations: [
    BasicPageComponent,
    DynamicPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class ReactiveModule { }
