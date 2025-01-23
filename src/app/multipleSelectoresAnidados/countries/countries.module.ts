import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CountriesRoutingModule } from './countries-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ SelectorPageComponent ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class CountriesModule { }
