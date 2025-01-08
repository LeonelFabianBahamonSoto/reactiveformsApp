import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { SharedModule } from '../shared/shared.module';

import { BasicPageComponent } from "./pages/basicPage/basicPage.component"
import { DynamicPageComponent } from './pages/dynamicPage/dynamicPage.component';
import { SwitchesPageComponent } from './pages/switchesPage/switchesPage.component';

@NgModule({
  declarations: [
    BasicPageComponent,
    DynamicPageComponent,
    SwitchesPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class ReactiveModule { }
