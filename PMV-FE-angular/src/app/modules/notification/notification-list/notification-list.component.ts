import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {

  listColumns = [
    {
      name: "S.No",
      dataKey: "id"
    },
    {
      name: "Notification Description",
      dataKey: "notifyDes"
    }
  ];

  tableData: any;

  constructor(
    private router: Router,
    private service: ApiService,
  ) { }

  ngOnInit() {
    this.service.get('vehicle/tickets').subscribe(data => {
      this.tableData = data
      this.tableData.forEach((el: any) => {
        el.notifyDes = `Next service due date ${el.upcomingServiceDate} for Benz Car, please create new service ticket`
      });
    })
    this.service.get('vehicle/ticket-count').subscribe(data => {
      localStorage.setItem('notify-count', data)
    })
  }

  goToCreate(ev: any) {
    this.router.navigate(['/notification/notification-create-ticket', ev.id]);
  }
}
