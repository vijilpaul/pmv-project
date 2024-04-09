import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationCreateTicketComponent } from './notification-create-ticket/notification-create-ticket.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShareModule } from 'src/app/shared/share.module';


@NgModule({
  declarations: [
    NotificationComponent,
    NotificationListComponent,
    NotificationCreateTicketComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    ShareModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class NotificationModule { }
