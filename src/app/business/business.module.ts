// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { BusinessComponent } from './components/business/business.component';
// Router
import { BusinessRoutingModule } from './business-routing.module';

@NgModule({
  declarations: [BusinessComponent],
  imports: [CommonModule, BusinessRoutingModule],
})
export class BusinessModule {}
