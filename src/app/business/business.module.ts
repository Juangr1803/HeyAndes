// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// Components
import { BusinessComponent } from './components/business/business.component';
import { TableInfoComponent } from './components/table-info/table-info.component';
// Router
import { BusinessRoutingModule } from './business-routing.module';
import { BusinessDetailComponent } from './components/business-detail/business-detail.component';
import { BusinessBannersComponent } from './components/business-banners/business-banners.component';
import { SharedModule } from '../shared/shared.module';
import { TitleBusinessDetailComponent } from './components/title-business-detail/title-business-detail.component';

@NgModule({
  declarations: [
    BusinessComponent,
    TableInfoComponent,
    BusinessDetailComponent,
    BusinessBannersComponent,
    TitleBusinessDetailComponent,
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class BusinessModule {}
