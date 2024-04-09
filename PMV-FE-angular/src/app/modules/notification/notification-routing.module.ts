import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './notification.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationCreateTicketComponent } from './notification-create-ticket/notification-create-ticket.component';

const routes: Routes = [
  {
    path: '', component: NotificationComponent,
    children: [
      { path: '', redirectTo: 'notification-list', pathMatch: 'full' },
      { path: 'notification-list', component: NotificationListComponent },
      { path: 'notification-create-ticket/:id', component: NotificationCreateTicketComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
