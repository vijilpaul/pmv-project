import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { FlashService } from 'src/app/core/flash.service';

@Component({
  selector: 'app-service-history-details',
  templateUrl: './service-history-details.component.html',
  styleUrls: ['./service-history-details.component.scss']
})
export class ServiceHistoryDetailsComponent {

  dummyData = [
    {
      id: 1,
      plateNo: "3456",
      carModel: "BMW",
      manufacturingYear: "2000",
      upcomingServiceDate: "04/25/2024",
      driverInformation: "Driver1",
      lastServiceMilage: "123ml",
      lastServiceDate: "03/23/2024",
      serviceDescription: "Completed all services",
      serviceCost: "$500",
      serviceEngineerName: "Vijil",
    }
  ];
  serviceId: any;
  serviceDetails: any;
  currentUserRole: any;

  constructor(
    private service: ApiService,
    private _flash: FlashService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.currentUserRole = localStorage.getItem('role') || '';
    this.serviceId = this.route.snapshot.paramMap.get('id');
    // this.service.get(`services/${this.serviceId}`).subscribe(data => {
    //   this.serviceDetails = data
    // })
    this.serviceDetails = this.dummyData[0];
  }

  goBack() {
    this.router.navigateByUrl("/service-history")
  }
}
