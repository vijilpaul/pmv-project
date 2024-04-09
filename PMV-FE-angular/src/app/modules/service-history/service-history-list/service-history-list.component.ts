import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-history-list',
  templateUrl: './service-history-list.component.html',
  styleUrls: ['./service-history-list.component.scss']
})
export class ServiceHistoryListComponent {

  listColumns: any;
  driverColumns = [
    {
      name: "S.No",
      dataKey: "id"
    },
    {
      name: "Car model",
      dataKey: "carModel"
    },
    {
      name: "Last service date",
      dataKey: "lastServiceDate"
    },
    {
      name: "Service description",
      dataKey: "serviceDescription"
    }
  ];
  managerColumns = [
    {
      name: "S.No",
      dataKey: "id"
    },
    {
      name: "Service Cost",
      dataKey: "serviceCost"
    },
    {
      name: "Upcoming service date",
      dataKey: "upcomingServiceDate"
    },
    {
      name: "Milage",
      dataKey: "lastServiceMilage"
    }
  ];

  tableData: any;

  constructor(
    private router: Router
  ) {
    if (localStorage.getItem('role') == 'ROLE_DRIVER') {
      this.listColumns = this.driverColumns;
    } else if (localStorage.getItem('role') == 'ROLE_MANAGER') {
      this.listColumns = this.managerColumns;
    }
  }

  ngOnInit() {
    this.tableData = [{ id: 1, carModel: "BMW", lastServiceDate: "03/23/2024", serviceDescription: "Completed all services" }]
  }

  goToDetails(ev: any) {
    this.router.navigate(['/service-history/service-history-details', ev.id]);
  }
}
