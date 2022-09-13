import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { usInfo, usList } from './services/lazy-loads';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user-list',
    pathMatch: 'full',
  },
  {
    path: 'user-list',
    loadChildren: usList
  },
  {
    path: 'user-info/:id',
    loadChildren: usInfo
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
