import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent {

  listColumns = [
    {
      name: "S.No",
      dataKey: "id"
    },
    {
      name: "Service Cost",
      dataKey: "serviceCost"
    },
    {
      name: "Service Description",
      dataKey: "serviceDescription"
    },
    {
      name: "Last Service Milage",
      dataKey: "lastServiceMilage"
    },
    {
      name: "Last Service Date",
      dataKey: "lastServiceDate"
    }
  ];

  tableData: any;

  constructor(
    private router: Router,
    private service: ApiService,
  ) { }

  ngOnInit() {
    this.service.get('vehicle/tickets').subscribe(data => {
      this.tableData = data;
    })
    this.service.get('vehicle/notification-count').subscribe(data => {
      localStorage.setItem('notify-count', data)
    })
  }

  goToEdit(ev: any) {
    this.router.navigate(['/notification/ticket-edit', ev.id]);
  }
}
