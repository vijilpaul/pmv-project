import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceHistoryComponent } from './service-history.component';
import { ServiceHistoryDetailsComponent } from './service-history-details/service-history-details.component';
import { ServiceHistoryListComponent } from './service-history-list/service-history-list.component';

const routes: Routes = [
  {
    path: '', component: ServiceHistoryComponent,
    children: [
      { path: '', redirectTo: 'service-history-list', pathMatch: 'full' },
      { path: 'service-history-list', component: ServiceHistoryListComponent },
      { path: 'service-history-details/:id', component: ServiceHistoryDetailsComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceHistoryRoutingModule { }
