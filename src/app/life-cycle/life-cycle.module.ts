import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleRoutingModule } from './life-cycle-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { PriceComponent } from './components/price/price.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PriceComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    LifeCycleRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
  ]
})
export class LifeCycleModule { }
