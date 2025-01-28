import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then( m => m.ReactiveModule ),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: 'selectors',
    loadChildren: () => import('./multipleSelectoresAnidados/multipleSelectoresAnidados.module').then( m => m.MultipleSelectoresAnidados )
  },
  {
    path: 'lifeCycle',
    loadChildren: () => import('./life-cycle/life-cycle.module').then( m => m.LifeCycleModule )
  },
  {
    path: 'standaloneAlonePage',
    loadComponent: () => import('./standAlone/pages/alone-page/alone-page.component').then( m => m.AlonePageComponent )
  },
  {
    path: 'standaloneCounter',
    loadComponent: () => import('./standAlone/components/counter-alone/counter-alone.component').then( m => m.CounterAloneComponent )
  },
  {
    path: '**',
    redirectTo: 'reactive/basic',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
