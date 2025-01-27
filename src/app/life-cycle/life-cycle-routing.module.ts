import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { PriceComponent } from './components/price/price.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'products', component: ProductsComponent },
    { path: 'price', component: PriceComponent },
    { path: '**', redirectTo: 'products' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LifeCycleRoutingModule { }
