// Modules Andular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'empresas', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./business/business.module').then((m) => m.BusinessModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
