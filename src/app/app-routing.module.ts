import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BananaComponent} from "./banana/banana.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'banana',
        component: BananaComponent
      },
      {
        path: 'apple',
        loadChildren: () => import('./modules/apple/apple.module').then(m => m.AppleModule)
      },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
