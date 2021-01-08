// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// Components
import { BusinessComponent } from './components/business/business.component';
import { TableInfoComponent } from './components/table-info/table-info.component';
import { DetailInfoComponent } from './components/detail-info/detail-info.component';
// Router
import { BusinessRoutingModule } from './business-routing.module';
import { TableBodyBusinessComponent } from './components/table-body-business/table-body-business.component';
import { ButtonDetailComponent } from './components/button-detail/button-detail.component';

@NgModule({
  declarations: [BusinessComponent, TableInfoComponent, DetailInfoComponent, TableBodyBusinessComponent, ButtonDetailComponent],
  imports: [CommonModule, BusinessRoutingModule, HttpClientModule],
})
export class BusinessModule {}
