// Module Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessDetailComponent } from './components/business-detail/business-detail.component';
// Components
import { BusinessComponent } from './components/business/business.component';

const routes: Routes = [
  {
    path: 'empresas',
    component: BusinessComponent,
  },
  {
    path: 'empresas/:id',
    component: BusinessDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}
