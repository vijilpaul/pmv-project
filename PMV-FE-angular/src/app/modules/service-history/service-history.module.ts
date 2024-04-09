import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceHistoryRoutingModule } from './service-history-routing.module';
import { ServiceHistoryComponent } from './service-history.component';
import { ServiceHistoryListComponent } from './service-history-list/service-history-list.component';
import { ServiceHistoryDetailsComponent } from './service-history-details/service-history-details.component';
import { ShareModule } from 'src/app/shared/share.module';


@NgModule({
  declarations: [
    ServiceHistoryComponent,
    ServiceHistoryListComponent,
    ServiceHistoryDetailsComponent
  ],
  imports: [
    CommonModule,
    ServiceHistoryRoutingModule,
    ShareModule
  ]
})
export class ServiceHistoryModule { }
